import { useEffect, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { COLORS } from "../../../utils/theme";
import CardCategoria from "./CardCategoria";
import ModalCategoria from "./ModalCategoria";

import {
  listarCategorias,
  criarCategoria,
  atualizarCategoria,
  excluirCategoria,
  type Categoria,
} from "../services/categoriaService";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const [modalAberto, setModalAberto] = useState(false);
  const [categoriaParaEditar, setCategoriaParaEditar] = useState<Categoria | null>(null);

  useEffect(() => {
    carregarCategorias();
  }, []);

  async function carregarCategorias() {
    try {
      setLoading(true);
      setErro("");
      const dados = await listarCategorias();
      setCategorias(dados || []);
    } catch (error) {
      console.error("Erro ao listar categorias:", error);
      setErro("Não foi possível carregar as categorias.");
    } finally {
      setLoading(false);
    }
  }

  async function salvarCategoria(nome: string, descricao: string) {
    try {
      if (categoriaParaEditar) {
        // Modo Edição
        await atualizarCategoria({
          id: categoriaParaEditar.id,
          nome,
          descricao,
        });
        alert("Categoria atualizada com sucesso!");
      } else {
        // Modo Criação
        await criarCategoria({
          nome,
          descricao,
        });
        alert("Categoria criada com sucesso!");
      }

      fecharModal();
      carregarCategorias();
    } catch (error) {
      console.error("Erro ao salvar categoria:", error);
      alert("Erro ao salvar categoria.");
    }
  }

  async function handleExcluirCategoria(id: number) {
    if (!confirm("Tem certeza de que deseja excluir esta categoria?")) return;

    try {
      await excluirCategoria(id);
      alert("Categoria excluída com sucesso!");
      carregarCategorias();
    } catch (error) {
      console.error("Erro ao excluir categoria:", error);
      alert("Erro ao excluir categoria. Certifique-se de que nenhum alimento dependa dela.");
    }
  }

  function abrirModalParaCriar() {
    setCategoriaParaEditar(null);
    setModalAberto(true);
  }

  function abrirModalParaEditar(categoria: Categoria) {
    setCategoriaParaEditar(categoria);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
    setCategoriaParaEditar(null);
  }

  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2
          className="text-2xl font-bold"
          style={{ color: COLORS.primary }}
        >
          Categorias
        </h2>

        <button
          onClick={abrirModalParaCriar}
          className="flex items-center gap-2 rounded-full px-5 py-3 text-white transition hover:scale-105"
          style={{ backgroundColor: COLORS.secondary }}
        >
          <Plus size={20} weight="bold" />
          Nova categoria
        </button>
      </div>

      {loading && (
        <p
          style={{ color: COLORS.primary }}
          className="opacity-60"
        >
          Carregando categorias...
        </p>
      )}

      {erro && (
        <p style={{ color: COLORS.secondary }} className="mb-4">
          {erro}
        </p>
      )}

      {!loading && categorias.length === 0 && (
        <p
          style={{ color: COLORS.primary }}
          className="opacity-60"
        >
          Nenhuma categoria cadastrada.
        </p>
      )}

      <div className="flex flex-wrap gap-4">
        {categorias.map((categoria) => (
          <CardCategoria
            key={categoria.id}
            nome={categoria.nome}
            onEditar={() => abrirModalParaEditar(categoria)}
            onExcluir={() => handleExcluirCategoria(categoria.id)}
          />
        ))}
      </div>

      <ModalCategoria
        aberto={modalAberto}
        fechar={fecharModal}
        salvar={salvarCategoria}
        categoriaEdicao={categoriaParaEditar || undefined}
      />
    </section>
  );
}

export default ListaCategorias;