import {createContext, useState, useEffect, type ReactNode,} from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogin: (
    usuarioLogin: UsuarioLogin
  ) => Promise<void>;
  handleLogout: () => void;
  isLoading: boolean;
}

const usuarioInicial: UsuarioLogin = {
  id: 0,
  nome: "",
  usuario: "",
  senha: "",
  foto: "",
  token: "",
};

const AuthContext =
  createContext<AuthContextProps>(
    {} as AuthContextProps
  );

function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [usuario, setUsuario] =
    useState<UsuarioLogin>(usuarioInicial);

  const [isLoading, setIsLoading] =
    useState(false);

  async function handleLogin(
    usuarioLogin: UsuarioLogin
  ) {
    setIsLoading(true);

    try {
      await login(
        "/usuarios/logar",
        usuarioLogin,
        setUsuario
      );
    } catch (error) {
      ToastAlerta(
        "Usuário ou senha inválidos!",
        "erro"
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (usuario.token !== "") {
      ToastAlerta(
        "Usuário autenticado com sucesso!",
        "sucesso"
      );
    }
  }, [usuario.token]);

  function handleLogout() {
    setUsuario(usuarioInicial);

    ToastAlerta(
      "Usuário deslogado!",
      "info"
    );
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        handleLogin,
        handleLogout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };