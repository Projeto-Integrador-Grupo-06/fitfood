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

import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const [modalAberto, setModalAberto] = useState(false);
  const [categoriaParaEditar, setCategoriaParaEditar] =
    useState<Categoria | null>(null);

  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
  const [categoriaParaExcluir, setCategoriaParaExcluir] =
    useState<Categoria | null>(null);

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
      console.error(error);
      setErro("Não foi possível carregar as categorias.");
    } finally {
      setLoading(false);
    }
  }

  async function salvarCategoria(nome: string, descricao: string) {
    try {
      if (categoriaParaEditar) {
        await atualizarCategoria({
          id: categoriaParaEditar.id,
          nome,
          descricao,
        });

        ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
      } else {
        await criarCategoria({
          nome,
          descricao,
        });

        ToastAlerta("Categoria criada com sucesso!", "sucesso");
      }

      fecharModal();
      carregarCategorias();
    } catch (error) {
      console.error(error);
      ToastAlerta("Erro ao salvar categoria.", "erro");
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

  function abrirModalExcluir(categoria: Categoria) {
    setCategoriaParaExcluir(categoria);
    setModalExcluirAberto(true);
  }

  function fecharModalExcluir() {
    setCategoriaParaExcluir(null);
    setModalExcluirAberto(false);
  }

  async function confirmarExclusao() {
    if (!categoriaParaExcluir) return;

    try {
      await excluirCategoria(categoriaParaExcluir.id);

      ToastAlerta("Categoria excluída com sucesso!", "sucesso");

      fecharModalExcluir();
      carregarCategorias();
    } catch (error) {
      console.error(error);

      ToastAlerta(
        "Erro ao excluir categoria. Certifique-se de que nenhum alimento dependa dela.",
        "erro"
      );
    }
  }

  return (
    <>
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
            className="opacity-60"
            style={{ color: COLORS.primary }}
          >
            Carregando categorias...
          </p>
        )}

        {erro && (
          <p
            className="mb-4"
            style={{ color: COLORS.secondary }}
          >
            {erro}
          </p>
        )}

        {!loading && categorias.length === 0 && (
          <p
            className="opacity-60"
            style={{ color: COLORS.primary }}
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
              onExcluir={() => abrirModalExcluir(categoria)}
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

      {modalExcluirAberto && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div
            className="w-full max-w-md rounded-3xl p-8"
            style={{ backgroundColor: COLORS.background }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: COLORS.primary }}
            >
              Excluir categoria
            </h2>

            <p
              className="mb-8"
              style={{ color: COLORS.primary }}
            >
              Tem certeza que deseja excluir a categoria{" "}
              <strong>{categoriaParaExcluir?.nome}</strong>?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={fecharModalExcluir}
                className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancelar
              </button>

              <button
                onClick={confirmarExclusao}
                className="px-6 py-2 rounded-full text-white font-medium hover:scale-105 transition"
                style={{ backgroundColor: "#DC2626" }}
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaCategorias;