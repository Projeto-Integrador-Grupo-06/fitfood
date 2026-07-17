import api from "./api";

export interface Alimentacao {
  id?: number;
  nomeRefeicao: string;
  descricao: string;
  calorias: number;
  proteinas?: number;
  carboidratos?: number;
  gorduras?: number;
  quantidade: number;
  dataConsumo: string;

  categoria: {
    id: number;
  };

  usuario: {
    id: number;
  };
}


// CADASTRAR ALIMENTO
export async function criarAlimentacao(dados: any) {
  try {
    const resposta = await api.post("/alimentacao", dados);

    return resposta.data;

  } catch (error: any) {

    console.log(
      "ERRO CADASTRAR ALIMENTAÇÃO:",
      error.response?.data
    );

    throw error;
  }
}


// LISTAR TODOS
export async function listarAlimentacoes() {

  try {

    const { data } = await api.get("/alimentacao");

    return data;

  } catch (error: any) {

    console.log(
      "ERRO LISTAR ALIMENTAÇÕES:",
      error.response?.data
    );

    throw error;
  }
}


// ATUALIZAR ALIMENTO
export async function atualizarAlimentacao(
  id: number,
  dados: any
) {
  try {

    const resposta = await api.put(
      "/alimentacao",
      {
        id,
        ...dados
      }
    );

    return resposta.data;

  } catch (error: any) {

    console.log(
      "ERRO ATUALIZAR ALIMENTAÇÃO:",
      error.response?.data
    );

    throw error;
  }
}


// EXCLUIR ALIMENTO
export async function excluirAlimentacao(id: number) {

  try {

    await api.delete(
      `/alimentacao/${id}`
    );


  } catch (error: any) {

    console.log(
      "ERRO EXCLUIR ALIMENTAÇÃO:",
      error.response?.data
    );

    throw error;
  }
}


// BUSCAR ALIMENTAÇÕES DO USUÁRIO
export async function buscarAlimentacoesPorUsuario(
  usuarioId: number
) {

  try {

    const { data } = await api.get(
      "/alimentacao"
    );


    return data.filter(
      (item: any) =>
        item.usuario?.id === usuarioId
    );


  } catch (error: any) {

    console.log(
      "ERRO BUSCAR ALIMENTAÇÕES DO USUÁRIO:",
      error.response?.data
    );

    throw error;
  }
}