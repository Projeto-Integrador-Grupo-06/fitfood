import { useState, useEffect, useContext } from "react";
import { COLORS } from "../../utils/theme";

import Calendario from "./components/Calendario";
import HeaderRegistro from "./components/HeaderRegistro";
import ResumoDiario from "./components/ResumoDiario";
import ListaCategorias from "./components/ListaCategorias";
import RefeicaoSection from "./components/RefeicaoSection";
import ModalAlimento from "./components/ModalAlimento";
import { AuthContext } from "../../contexts/AuthContext";

import {
  criarAlimentacao,
  excluirAlimentacao,
  atualizarAlimentacao,
  buscarAlimentacoesPorUsuario
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


  const { dadosFisicos, usuario } = useContext(AuthContext);


  const [modalAberto, setModalAberto] = useState(false);

  const [refeicaoAtual, setRefeicaoAtual] =
    useState<RefeicaoChave>("cafe");


  const [alimentoEmEdicao, setAlimentoEmEdicao] =
    useState<ItemRefeicao | null>(null);



  // DIA SELECIONADO NO CALENDÁRIO
  const [dataSelecionada, setDataSelecionada] =
    useState(new Date());



  const [notificacao, setNotificacao] =
    useState<{
      mensagem: string;
      tipo: "sucesso" | "erro";
    } | null>(null);



  // Usa os componentes locais da data em vez de toISOString(),
  // que converte para UTC e pode "pular" o dia dependendo do
  // horário/fuso do usuário (ex: BR = UTC-3).
  function formatarData(data: Date) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
  }



  const [refeicoesPorDia, setRefeicoesPorDia] = useState<Record<string, Refeicoes>>({});

  useEffect(() => {

    async function carregarAlimentos() {

      if (!usuario.id) return;

      try {

        const alimentos = await buscarAlimentacoesPorUsuario(usuario.id);


        const organizados: Record<string, Refeicoes> = {};


        alimentos.forEach((alimento: any) => {


          const data = alimento.dataConsumo;


          if (!organizados[data]) {
            organizados[data] = {
              cafe: [],
              almoco: [],
              lanche: [],
              jantar: [],
            };
          }


          let refeicao: RefeicaoChave = "cafe";


          if (alimento.nomeRefeicao === "ALMOCO") {
            refeicao = "almoco";
          }

          if (alimento.nomeRefeicao === "LANCHE") {
            refeicao = "lanche";
          }

          if (alimento.nomeRefeicao === "JANTAR") {
            refeicao = "jantar";
          }


          organizados[data][refeicao].push({

            itemId: crypto.randomUUID(),

            id: alimento.id,

            nome: alimento.descricao,

            calorias: alimento.calorias,

            proteinas: alimento.proteinas ?? 0,

            carboidratos: alimento.carboidratos ?? 0,

            gorduras: alimento.gorduras ?? 0,

          });


        });


        setRefeicoesPorDia(organizados);


      } catch (error) {

        console.error(
          "Erro ao carregar alimentos:",
          error
        );

      }

    }


    carregarAlimentos();


  }, [usuario.id]);



  const chaveData = formatarData(dataSelecionada);



  // PEGA SOMENTE AS REFEIÇÕES DO DIA ESCOLHIDO

  const refeicoes: Refeicoes = {

    cafe: refeicoesPorDia[chaveData]?.cafe || [],

    almoco: refeicoesPorDia[chaveData]?.almoco || [],

    lanche: refeicoesPorDia[chaveData]?.lanche || [],

    jantar: refeicoesPorDia[chaveData]?.jantar || [],

  };


  useEffect(() => {

    const refeicoesDoDia = refeicoesPorDia[chaveData];

    if (!refeicoesDoDia) {

      setRefeicoesPorDia((prev) => ({

        ...prev,

        [chaveData]: {

          cafe: [],
          almoco: [],
          lanche: [],
          jantar: [],

        }

      }));

    }

  }, [chaveData]);



  function mostrarNotificacao(
    mensagem: string,
    tipo: "sucesso" | "erro"
  ) {

    setNotificacao({
      mensagem,
      tipo
    });

  }



  useEffect(() => {

    if (notificacao) {

      const timer =
        setTimeout(() => {
          setNotificacao(null);
        }, 3000);


      return () => clearTimeout(timer);

    }

  }, [notificacao]);



  const todosOsItens = [
    ...refeicoes.cafe,
    ...refeicoes.almoco,
    ...refeicoes.lanche,
    ...refeicoes.jantar,
  ];



  const totalCalorias =
    todosOsItens.reduce(
      (soma, item) => soma + item.calorias,
      0
    );


  const totalProteinas =
    todosOsItens.reduce(
      (soma, item) => soma + item.proteinas,
      0
    );


  const totalCarboidratos =
    todosOsItens.reduce(
      (soma, item) => soma + item.carboidratos,
      0
    );


  const totalGorduras =
    todosOsItens.reduce(
      (soma, item) => soma + item.gorduras,
      0
    );



  function abrirModal(refeicao: RefeicaoChave) {

    setRefeicaoAtual(refeicao);

    setAlimentoEmEdicao(null);

    setModalAberto(true);

  }



  function fecharModal() {

    setModalAberto(false);

    setAlimentoEmEdicao(null);

  }

  // Cria um novo alimento
// Cria um novo alimento
async function handleSalvarAlimento(alimento: any, categoriaId: number) {

  if (!usuario?.id) {
    mostrarNotificacao(
      "Usuário não carregado.",
      "erro"
    );
    return;
  }

  try {

    const dadosAlimento = {
      nomeRefeicao: FORMATO_REFEICAO_BACKEND[refeicaoAtual],
      descricao: alimento.nome,
      calorias: Number(alimento.calorias),
      quantidade: 1,
      dataConsumo: chaveData,

      categoria: {
        id: categoriaId,
      },

      usuario: {
        id: usuario.id,
      },
    };

    console.log(
      "DADOS ENVIADOS:",
      JSON.stringify(dadosAlimento, null, 2)
    );

    // SALVA NO BACKEND
    const resposta = await criarAlimentacao(dadosAlimento);

    console.log(
      "RESPOSTA BACKEND:",
      resposta
    );

    // CRIA ITEM PARA TELA
    const novoItem: ItemRefeicao = {
      itemId: String(resposta.id),
      id: resposta.id,
      nome: resposta.descricao,
      calorias: resposta.calorias,
      proteinas: resposta.proteinas ?? 0,
      carboidratos: resposta.carboidratos ?? 0,
      gorduras: resposta.gorduras ?? 0,
    };

    setRefeicoesPorDia((prev) => ({

      ...prev,

      [chaveData]: {

        cafe: prev[chaveData]?.cafe || [],
        almoco: prev[chaveData]?.almoco || [],
        lanche: prev[chaveData]?.lanche || [],
        jantar: prev[chaveData]?.jantar || [],

        [refeicaoAtual]: [
          ...(prev[chaveData]?.[refeicaoAtual] || []),
          novoItem,
        ],

      },

    }));

    mostrarNotificacao(
      "Alimento cadastrado com sucesso!",
      "sucesso"
    );

    setModalAberto(false);

  } catch (error) {

    console.error(error);

    mostrarNotificacao(
      "Erro ao salvar alimento.",
      "erro"
    );

  }
}

  // Atualiza um alimento já existente (era essa função que faltava
  // e causava "handleEditarSalvarAlimento is not defined")
  async function handleEditarSalvarAlimento(alimento: any, categoriaId: number) {

    if (!alimentoEmEdicao) {
      mostrarNotificacao(
        "Nenhum alimento selecionado para editar.",
        "erro"
      );
      return;
    }

    if (!usuario?.id) {
      mostrarNotificacao(
        "Usuário não carregado.",
        "erro"
      );
      return;
    }

    try {
      const dadosAlimento = {
        nomeRefeicao: FORMATO_REFEICAO_BACKEND[refeicaoAtual],
        descricao: alimento.nome,
        calorias: Number(alimento.calorias),
        quantidade: 1,
        dataConsumo: chaveData,
        categoria: {
          id: categoriaId,
        },
        usuario: {
          id: usuario.id,
        },
      };

      console.log(
        "DADOS EDITAR:",
        JSON.stringify(
          {
            id: alimentoEmEdicao.id,
            ...dadosAlimento
          },
          null,
          2
        )
      );

      await atualizarAlimentacao(alimentoEmEdicao.id, dadosAlimento);


      const itemAtualizado: ItemRefeicao = {
        ...alimentoEmEdicao,
        nome: alimento.nome,
        calorias: alimento.calorias,
        proteinas: alimento.proteinas || 0,
        carboidratos: alimento.carboidratos || 0,
        gorduras: alimento.gorduras || 0,
        imagem: alimento.imagem,
      };

      setRefeicoesPorDia((prev) => {

        const diaAtual = prev[chaveData];

        if (!diaAtual) return prev;

        return {
          ...prev,
          [chaveData]: {
            ...diaAtual,
            [refeicaoAtual]: diaAtual[refeicaoAtual].map((item) =>
              item.itemId === alimentoEmEdicao.itemId
                ? itemAtualizado
                : item
            ),
          },
        };

      });


      mostrarNotificacao(
        "Alimento atualizado com sucesso!",
        "sucesso"
      );


      setModalAberto(false);

      setAlimentoEmEdicao(null);

    } catch (error) {

      console.error(error);

      mostrarNotificacao(
        "Erro ao atualizar alimento.",
        "erro"
      );

    }
  }

  // Ativa o modo de edição abrindo o modal com os dados atuais
  async function handleEditarAlimento(item: ItemRefeicao) {

    const chaveRefeicao = Object.keys(refeicoes).find((chave) =>
      refeicoes[chave as RefeicaoChave].some(
        (i) => i.itemId === item.itemId
      )
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

      setRefeicoesPorDia((prev) => {

        const diaAtual = prev[chaveData];

        if (!diaAtual) return prev;


        const novaRefeicao = Object.keys(diaAtual).reduce(
          (acc, chave) => {

            const refeicao = chave as RefeicaoChave;


            acc[refeicao] = diaAtual[refeicao].filter(
              (i) => i.itemId !== item.itemId
            );


            return acc;

          },
          {} as Refeicoes
        );


        return {
          ...prev,
          [chaveData]: novaRefeicao,
        };

      });


      mostrarNotificacao(
        "Alimento removido com sucesso!",
        "sucesso"
      );


    } catch (error) {

      console.error(
        "Erro ao excluir do backend:",
        error
      );

      mostrarNotificacao(
        "Erro ao excluir alimento.",
        "erro"
      );

    }
  }

  return (
    <main
      className="min-h-screen px-6 py-8 md:px-12 relative"
      style={{ backgroundColor: COLORS.background }}
    >
      <HeaderRegistro />

      <Calendario
        onSelecionarDia={(data) =>
          setDataSelecionada(data)
        }
      />

      <ResumoDiario
        caloriasConsumidas={totalCalorias}
        metaDiaria={dadosFisicos.caloriasDiarias}
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
        onEditar={handleEditarSalvarAlimento}
        alimentoEmEdicao={alimentoEmEdicao}
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