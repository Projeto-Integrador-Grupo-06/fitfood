import axios from "axios";
import type UsuarioLogin from "../models/UsuarioLogin";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const cadastrarUsuario = async (
  url: string,
  dados: Object,
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export async function login(
  url: string,
  dados: UsuarioLogin,
  setUsuario: React.Dispatch<
    React.SetStateAction<UsuarioLogin>
  >
) {
  try {
    const resposta = await api.post(url, dados);

    setUsuario(resposta.data);

    return resposta.data;
  } catch (error) {
    console.error("Erro ao autenticar:", error);
    throw error;
  }
}

export async function buscar(
  url: string,
  setDados: Function,
  header: Object
) {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
}

export async function atualizar(
  url: string,
  dados: Object,
  setDados: Function,
  header: Object
) {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
}