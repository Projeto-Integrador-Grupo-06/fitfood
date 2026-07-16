import api from "./api";

export interface Alimentacao {
  id?: number;
  nomeRefeicao: string;
  descricao: string;
  calorias: number;
  proteinas: number;
  carboidratos: number;
  gorduras: number;
  quantidade: number;
  dataConsumo: string;
  categoria: {
    id: number;
  };
  usuario: {
    id: number;
  };
}

export async function criarAlimentacao(alimento: Alimentacao) {
  const { data } = await api.post("/alimentacao", alimento);
  return data;
}

export async function listarAlimentacoes() {
  const { data } = await api.get("/alimentacao");
  return data;
}


export const atualizarAlimentacao = async (id: number, dados: any) => {
  const resposta = await api.put(`/alimentacao/${id}`, dados); // ou a rota correspondente do seu backend
  return resposta.data;
};

export async function excluirAlimentacao(id: number) {
  await api.delete(`/alimentacao/${id}`);
}