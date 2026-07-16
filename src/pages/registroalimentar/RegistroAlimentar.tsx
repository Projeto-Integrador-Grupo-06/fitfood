import { useState, useEffect } from "react";
import { COLORS } from "../../utils/theme";

import Calendario from "./components/Calendario";
import HeaderRegistro from "./components/HeaderRegistro";
import ResumoDiario from "./components/ResumoDiario";
import ListaCategorias from "./components/ListaCategorias";
import RefeicaoSection from "./components/RefeicaoSection";
import ModalAlimento from "./components/ModalAlimento";

// Importando apenas as funções que existem no seu alimentacaoService.ts
import { 
  criarAlimentacao, 
  excluirAlimentacao, 
  atualizarAlimentacao 
} from "./services/alimentacaoService";

interface ItemRefeicao {
  itemId: string;
  id?: number;
  nome: string;
  nomeOriginal?: string;
  imagem?: string;
  calorias: number;
  proteinas: number;
  carboidratos: number;
  gorduras: number;
}

type RefeicaoChave = "cafe" | "almoco" | "lanche" | "jantar";
type Refeicoes = Record<RefeicaoChave, ItemRefeicao[]>;

const FORMATO_REFEICAO_BACKEND: Record<RefeicaoChave, string> = {
  cafe: "CAFE_DA_MANHA",
  almoco: "ALMOCO",
  lanche: "LANCHE",
  jantar: "JANTAR",
};

function RegistroAlimentar() {
  const [modalAberto, setModalAberto] = useState(false);
  const [refeicaoAtual, setRefeicaoAtual] = useState<RefeicaoChave>("cafe");
  const [alimentoEmEdicao, setAlimentoEmEdicao] = useState<ItemRefeicao | null>(null);
  
  // Estado para a notificação flutuante estilizada (Toast)
  const [notificacao, setNotificacao] = useState<{ mensagem: string; tipo: "sucesso" | "erro" } | null>(null);

  // --- CARREGAR REFEIÇÕES SALVAS NO NAVEGADOR (Evita sumir no F5) ---
  const [refeicoes, setRefeicoes] = useState<Refeicoes>(() => {
    const dadosSalvos = localStorage.getItem("meus_alimentos_salvos");
    if (dadosSalvos) {
      try {
        return JSON.parse(dadosSalvos);
      } catch (error) {
        console.error("Erro ao ler alimentos do localStorage:", error);
      }
    }
    return {
      cafe: [],
      almoco: [],
      lanche: [],
      jantar: [],
    };
  });

  // --- GRAVAR TOKEN DO SWAGGER AUTOMATICAMENTE ---
  const meuTokenDoSwagger = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c3VhcmlvQHRlc3RlLmNvbSIsImlhdCI6MTc4NDIyMjM1NywiZXhwIjoxNzg0MjI1OTU3fQ.2bxQLAZRNkAP-q_IvpNU616XFsizkf1BhtrzKIFSD4s";
  localStorage.setItem("token", meuTokenDoSwagger);

  // --- SALVAR AUTOMATICAMENTE NO NAVEGADOR SEMPRE QUE MUDAR ---
  useEffect(() => {
    localStorage.setItem("meus_alimentos_salvos", JSON.stringify(refeicoes));
  }, [refeicoes]);

  // Função para acionar o Toast na tela
  function mostrarNotificacao(mensagem: string, tipo: "sucesso" | "erro") {
    setNotificacao({ message: mensagem, tipo } as any); // hack rápido para o tipo do estado anterior
    setNotificacao({ mensagem, tipo });
  }

  // Auto-fechar a notificação após 3 segundos
  useEffect(() => {
    if (notificacao) {
      const timer = setTimeout(() => {
        setNotificacao(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notificacao]);

  // --- CÁLCULO DINÂMICO DE MACROS E CALORIAS ---
  const todosOsItens = [
    ...refeicoes.cafe,
    ...refeicoes.almoco,
    ...refeicoes.lanche,
    ...refeicoes.jantar,
  ];

  const totalCalorias = todosOsItens.reduce((soma, item) => soma + item.calorias, 0);
  const totalProteinas = todosOsItens.reduce((soma, item) => soma + item.proteinas, 0);
  const totalCarboidratos = todosOsItens.reduce((soma, item) => soma + item.carboidratos, 0);
  const totalGorduras = todosOsItens.reduce((soma, item) => soma + item.gorduras, 0);

  function abrirModal(refeicao: RefeicaoChave) {
    setRefeicaoAtual(refeicao);
    setAlimentoEmEdicao(null);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
    setAlimentoEmEdicao(null);
  }

  // Função unificada para criar ou atualizar um alimento
  async function handleSalvarAlimento(alimento: any, categoriaId: number) {
    try {
      const usuarioIdStr = localStorage.getItem("usuarioId");
      const usuarioId = usuarioIdStr ? Number(usuarioIdStr) : 2;

      const dadosAlimento = {
        nomeRefeicao: FORMATO_REFEICAO_BACKEND[refeicaoAtual],
        descricao: alimento.nome,
        calorias: alimento.calorias,
        proteinas: alimento.proteinas || 0,
        carboidratos: alimento.carboidratos || 0,
        gorduras: alimento.gorduras || 0,
        quantidade: 1,
        dataConsumo: new Date().toISOString().split("T")[0],
        categoria: { id: categoriaId },
        usuario: { id: usuarioId },
      };

      if (alimentoEmEdicao && alimentoEmEdicao.id) {
        // --- MODO EDIÇÃO ---
        await atualizarAlimentacao(alimentoEmEdicao.id, dadosAlimento);

        setRefeicoes((prev) => {
          const listaAtualizada = prev[refeicaoAtual].map((item) =>
            item.itemId === alimentoEmEdicao.itemId
              ? { ...item, ...alimento, id: alimentoEmEdicao.id }
              : item
          );
          return { ...prev, [refeicaoAtual]: listaAtualizada };
        });

        mostrarNotificacao("Alimento atualizado com sucesso!", "sucesso");
      } else {
        // --- MODO CRIAÇÃO ---
        const respostaBackend = await criarAlimentacao(dadosAlimento);

        const novoItem: ItemRefeicao = {
          itemId: crypto.randomUUID(),
          id: respostaBackend?.id,
          nome: alimento.nome,
          calorias: alimento.calorias,
          proteinas: alimento.proteinas || 0,
          carboidratos: alimento.carboidratos || 0,
          gorduras: alimento.gorduras || 0,
          imagem: alimento.imagem,
        };

        setRefeicoes((prev) => ({
          ...prev,
          [refeicaoAtual]: [...prev[refeicaoAtual], novoItem],
        }));

        mostrarNotificacao("Alimento cadastrado com sucesso!", "sucesso");
      }

      setModalAberto(false);
      setAlimentoEmEdicao(null);
    } catch (error) {
      console.error("Erro ao salvar no backend:", error);
      mostrarNotificacao("Erro ao salvar alimento no servidor.", "erro");
    }
  }

  // Ativa o modo de edição abrindo o modal com os dados atuais
  async function handleEditarAlimento(item: ItemRefeicao) {
    const chaveRefeicao = Object.keys(refeicoes).find((chave) =>
      refeicoes[chave as RefeicaoChave].some((i) => i.itemId === item.itemId)
    ) as RefeicaoChave | undefined;

    if (chaveRefeicao) {
      setRefeicaoAtual(chaveRefeicao);
      setAlimentoEmEdicao(item);
      setModalAberto(true);
    }
  }

  async function handleExcluirAlimento(item: ItemRefeicao) {
    try {
      if (item.id) {
        await excluirAlimentacao(item.id);
      }

      setRefeicoes((prev) => {
        const chaveRefeicao = Object.keys(prev).find((chave) =>
          prev[chave as RefeicaoChave].some((i) => i.itemId === item.itemId)
        ) as RefeicaoChave | undefined;

        if (!chaveRefeicao) return prev;

        const novaLista = prev[chaveRefeicao].filter((i) => i.itemId !== item.itemId);
        return {
          ...prev,
          [chaveRefeicao]: novaLista,
        };
      });

      mostrarNotificacao("Alimento removido com sucesso!", "sucesso");
    } catch (error) {
      console.error("Erro ao excluir do backend:", error);
      mostrarNotificacao("Erro ao excluir alimento.", "erro");
    }
  }

  return (
    <main
      className="min-h-screen px-6 py-8 md:px-12 relative"
      style={{ backgroundColor: COLORS.background }}
    >
      <HeaderRegistro />

      <Calendario />

      <ResumoDiario
        caloriasConsumidas={totalCalorias}
        metaDiaria={2000}
        proteinas={totalProteinas}
        carboidratos={totalCarboidratos}
        gorduras={totalGorduras}
      />

      <ListaCategorias />

      <RefeicaoSection
        titulo="🍳 Café da manhã"
        itens={refeicoes.cafe}
        onAdicionar={() => abrirModal("cafe")}
        onEditar={handleEditarAlimento}
        onExcluir={handleExcluirAlimento}
      />

      <RefeicaoSection
        titulo="🍽️ Almoço"
        itens={refeicoes.almoco}
        onAdicionar={() => abrirModal("almoco")}
        onEditar={handleEditarAlimento}
        onExcluir={handleExcluirAlimento}
      />

      <RefeicaoSection
        titulo="🍎 Lanche"
        itens={refeicoes.lanche}
        onAdicionar={() => abrirModal("lanche")}
        onEditar={handleEditarAlimento}
        onExcluir={handleExcluirAlimento}
      />

      <RefeicaoSection
        titulo="🌙 Jantar"
        itens={refeicoes.jantar}
        onAdicionar={() => abrirModal("jantar")}
        onEditar={handleEditarAlimento}
        onExcluir={handleExcluirAlimento}
      />

      <ModalAlimento
        aberto={modalAberto}
        onFechar={fecharModal}
        onAdicionar={handleSalvarAlimento}
      />

      {/* --- NOTIFICAÇÃO FLUTUANTE ESTILIZADA (TOAST) --- */}
      {notificacao && (
        <div
          className="fixed bottom-5 right-5 z-50 px-6 py-4 rounded-lg shadow-xl text-white font-medium flex items-center gap-3 transition-all duration-300 transform translate-y-0 animate-bounce"
          style={{
            backgroundColor: notificacao.tipo === "sucesso" ? "#2e7d32" : "#c62828",
            borderLeft: `6px solid ${notificacao.tipo === "sucesso" ? "#1b5e20" : "#8e0000"}`
          }}
        >
          <span>{notificacao.tipo === "sucesso" ? "✅" : "❌"}</span>
          <span>{notificacao.mensagem}</span>
        </div>
      )}
    </main>
  );
}

export default RegistroAlimentar;