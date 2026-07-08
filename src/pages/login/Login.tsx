import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import type UsuarioLogin from "../../models/UsuarioLogin"
import { ClipLoader } from "react-spinners"
import logo from "../../assets/img/LogoLogin.png"

function Login() {
  const navigate = useNavigate()
  const { usuario, handleLogin, isLoading } = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin)

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/")
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <div className="font-camera min-h-screen w-full flex items-center justify-center bg-[#F0F0CF] px-4 py-10">
      <div className="w-full max-w-6xl rounded-[28px] overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2">

       
        <div className="flex items-center justify-center bg-[#0E3322] px-8 py-14">
          <img src={logo} alt="Fit Food" className="w-64 md:w-80 h-auto object-contain" />
        </div>

        
        <div className="flex flex-col justify-center bg-[#839558] px-8 md:px-14 py-14">
          <h1 className="flex flex-wrap items-baseline gap-3 mb-2">
            <span className="font-camera text-7xl text-[#F0F0CF]">Fit</span>
            <span className="font-camera text-7xl text-[#0E3322]">Food</span>
          </h1>
          <p className="italic font-semibold mb-8 text-[#F0F0CF]">
            Seu estilo de vida saudável começa com um simples acesso
          </p>

          <form className="flex flex-col gap-4" onSubmit={login}>
            <input
              type="email"
              name="usuario"
              placeholder="E-mail:"
              className="w-full rounded-2xl px-5 py-4 font-bold placeholder:font-bold outline-none bg-[#F0F0CF] text-[#0E3322]"
              value={usuarioLogin.usuario ?? ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <input
              type="password"
              name="senha"
              placeholder="Senha:"
              className="w-full rounded-2xl px-5 py-4 font-bold placeholder:font-bold outline-none bg-[#F0F0CF] text-[#0E3322]"
              value={usuarioLogin.senha ?? ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <div className="flex justify-center -mt-1">
              <Link to="/cadastro" className="font-camera text-1xl text-[#F0F0CF]">
                Cadastre-se
              </Link>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full py-4 font-bold text-lg shadow-md transition bg-[#CA5030] hover:brightness-95 text-[#F0F0CF] flex justify-center"
            >
              {isLoading ? <ClipLoader color="#ffffff" size={24} /> : <span>Login</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login