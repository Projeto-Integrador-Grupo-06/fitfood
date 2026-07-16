import { useState, useContext, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import type UsuarioLogin from "../../models/UsuarioLogin"
import { ClipLoader } from "react-spinners"
import fotoLogin from "../../assets/img/Rectangle 170.png"
import logoMaca from "../../assets/img/logocantoparede 1.png"

function Login() {
  const navigate = useNavigate()
  const { handleLogin, isLoading } = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: ""
  })

  const [mostrarSenha, setMostrarSenha] = useState(false)

  const dicasSaudaveis = useMemo(() => [
    "Beba pelo menos 2L de água hoje! ",
    "Alimentos integrais dão energia por mais tempo. ",
    "Que tal incluir uma fruta na sua próxima refeição? ",
    "Planejar suas refeições evita escolhas impulsivas! ",
    "Comer devagar ajuda na digestão e na saciedade. "
  ], [])

  const dicaDoDia = useMemo(() => {
    return dicasSaudaveis[Math.floor(Math.random() * dicasSaudaveis.length)]
  }, [dicasSaudaveis])

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const sucesso = await handleLogin(usuarioLogin)

    if (sucesso) {
      navigate("/home")
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden"
      style={{
        backgroundColor: "#0E3322",
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(131, 149, 88, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 85% 80%, rgba(202, 80, 48, 0.12) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(131, 149, 88, 0.08) 0%, transparent 60%),
          linear-gradient(135deg, #0E3322 0%, #1a4d33 100%)
        `
      }}
    >

      <svg className="absolute top-10 left-12 w-24 h-24 opacity-[0.07] rotate-12 pointer-events-none hidden lg:block" fill="#F0F0CF" viewBox="0 0 24 24">
        <path d="M17 8C12 8 10 12 10 16C10 17 11 18 12 18C16 18 18 14 18 10C18 9 18 8 17 8Z" />
        <path d="M2 2C8 2 12 6 13 10C12 12 8 14 4 11C3 9 2 5 2 2Z" />
      </svg>

      <svg className="absolute bottom-12 left-16 w-32 h-32 opacity-[0.07] -rotate-12 pointer-events-none hidden lg:block" fill="none" stroke="#F0F0CF" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 1 0-18c1.05 0 2.055.18 3 .512a9 9 0 0 1 6 8.488c0 4.97-4.03 9-9 9Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.5-1 1.5-2 3-2s2.5 1 2.5 2.5S16 6 15 6" />
      </svg>

      <svg className="absolute top-16 right-16 w-28 h-28 opacity-[0.07] rotate-45 pointer-events-none hidden lg:block" fill="#F0F0CF" viewBox="0 0 24 24">
        <path d="M17 8C12 8 10 12 10 16C10 17 11 18 12 18C16 18 18 14 18 10C18 9 18 8 17 8Z" />
      </svg>

      <svg className="absolute bottom-16 right-20 w-36 h-36 opacity-[0.07] -rotate-45 pointer-events-none hidden lg:block" fill="none" stroke="#F0F0CF" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l3-3m-3 3l-3 3m3-3l3 3m-3-3l-3-3" />
      </svg>

      <div
        className="flex flex-col md:flex-row w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl z-10"
        style={{ backgroundColor: "#F0F0CF" }}
      >

        <div className="hidden md:block w-1/2 flex-shrink-0 relative">
          <img
            src={fotoLogin}
            alt="Alimentação saudável"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/50 to-transparent">
            <h2 className="font-camera text-3xl text-white drop-shadow-lg">
              FitFood
            </h2>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2 relative p-8 md:p-12 justify-center">

          <img
            src={logoMaca}
            alt="Mascote maçã"
            className="absolute top-5 right-0 w-24 hidden md:block"
          />

          <h1 className="font-camera text-4xl md:text-5xl font-bold mb-2 leading-tight"
            style={{ color: "#839558" }}>
            Bem vindo<br />de volta!
          </h1>

          <p className="font-creato text-sm mb-6 opacity-70"
            style={{ color: "#0E3322" }}>
            Entre com sua conta para continuar
          </p>

          <form onSubmit={login} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label
                htmlFor="usuario"
                className="font-creato-medium text-sm font-bold"
                style={{ color: "#0E3322" }}
              >
                E-mail:
              </label>
              <input
                type="email"
                id="usuario"
                name="usuario"
                placeholder="Digite seu e-mail"
                value={usuarioLogin.usuario}
                onChange={atualizarEstado}
                required
                className="font-creato px-4 py-2 rounded-lg border-2 outline-none bg-transparent transition-colors focus:border-[#CA5030]"
                style={{ borderColor: "#839558", color: "#0E3322" }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="senha"
                className="font-creato-medium text-sm font-bold"
                style={{ color: "#0E3322" }}
              >
                Senha:
              </label>
              <div className="relative flex items-center">
                <input
                  type={mostrarSenha ? "text" : "password"}
                  id="senha"
                  name="senha"
                  placeholder="Digite sua senha"
                  value={usuarioLogin.senha}
                  onChange={atualizarEstado}
                  required
                  className="font-creato w-full px-4 py-2 pr-10 rounded-lg border-2 outline-none bg-transparent transition-colors focus:border-[#CA5030]"
                  style={{ borderColor: "#839558", color: "#0E3322" }}
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute right-3 transition-colors hover:text-[#CA5030]"
                  style={{ color: "#839558" }}
                >
                  {mostrarSenha ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                to="/cadastro"
                className="font-creato-medium text-sm underline hover:opacity-75 transition-opacity"
                style={{ color: "#0E3322" }}
              >
                Cadastre-se
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4 mt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="font-creato-medium px-12 py-2 rounded-lg font-bold uppercase tracking-widest transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px] cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95"
                style={{
                  backgroundColor: "#CA5030",
                  color: "#F0F0CF",
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.backgroundColor = "#839558"
                    e.currentTarget.style.color = "#F0F0CF"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.backgroundColor = "#CA5030"
                    e.currentTarget.style.color = "#F0F0CF"
                  }
                }}
              >
                {isLoading ? (
                  <ClipLoader color="#F0F0CF" size={20} />
                ) : (
                  "LOGIN"
                )}
              </button>

              <p
                className="font-creato text-xs text-center italic mt-1 max-w-[280px] leading-relaxed opacity-80"
                style={{ color: "#839558" }}
              >
                {dicaDoDia}
              </p>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login
