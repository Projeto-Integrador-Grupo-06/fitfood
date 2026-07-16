import { createContext, useState, type ReactNode } from "react"
import type UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { ToastAlerta } from "../utils/ToastAlerta"

interface AuthContextProps {
  usuario: UsuarioLogin
  handleLogin: (usuarioLogin: UsuarioLogin) => Promise<boolean>
  handleLogout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextProps>({
  usuario: {
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: ""
  },
  handleLogin: async () => false,
  handleLogout: () => {},
  isLoading: false
})

function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: ""
  })

  const [isLoading, setIsLoading] = useState(false)

  async function handleLogin(usuarioLogin: UsuarioLogin): Promise<boolean> {
    try {
      setIsLoading(true)
      
      // Usa o RETORNO direto da API, não o estado
      const resposta = await login("/usuarios/logar", usuarioLogin, setUsuario)

      if (resposta.token !== "") {
        ToastAlerta("Usuário autenticado com sucesso!", "sucesso")
        return true
      }
      return false
    } catch (error) {
      console.error("Erro no login:", error)
      ToastAlerta("Dados do usuário inválidos!", "erro")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: ""
    })
  }

  return (
    <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
