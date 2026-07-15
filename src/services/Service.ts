import axios from "axios";
import type UsuarioLogin from "../models/UsuarioLogin";

export const api = axios.create({
  baseURL: "https://sistema-fit.onrender.com"
});

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