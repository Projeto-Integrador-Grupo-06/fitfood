import api from "./api";

export interface Categoria {
  id: number;
  nome: string;
  descricao: string;
}

export async function listarCategorias() {
  const { data } = await api.get<Categoria[]>("/categoria");
  return data;
}

export async function criarCategoria(dados: Omit<Categoria, "id">) {
  const { data } = await api.post<Categoria>("/categoria", dados);
  return data;
}

export async function atualizarCategoria(dados: Categoria) {
  const { data } = await api.put<Categoria>("/categoria", dados);
  return data;
}

export async function excluirCategoria(id: number) {
  await api.delete(`/categoria/${id}`);
}