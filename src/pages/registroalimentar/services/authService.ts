// src/pages/registroalimentar/services/authService.ts
import api from "./api";

export async function login(usuario: string, senha: string) {
  const { data } = await api.post("/usuarios/logar", { usuario, senha });

  const tokenLimpo = data.token.replace("Bearer ", "");

  localStorage.setItem("token", tokenLimpo);
  return tokenLimpo;
}