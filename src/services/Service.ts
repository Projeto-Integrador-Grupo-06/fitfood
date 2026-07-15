import axios from "axios"
import type UsuarioLogin from "../models/UsuarioLogin";

const api = axios.create({
    baseURL: 'https://sistema-fit.onrender.com/'
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

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
