import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { MoonLoader } from "react-spinners";
import mascote from "../../assets/img/mascotee.png";

function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    peso: 0,
    altura: 0,
    imc: "",
    alimentos: [],
  });

  function retornar() {
    navigate("/");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        const novoUsuario = {
          nome: usuario.nome,
          usuario: usuario.usuario,
          senha: usuario.senha,
          foto: usuario.foto,
        };

        await cadastrarUsuario(`/usuarios/cadastrar`, novoUsuario, setUsuario);
        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar usuário!", "erro");
      }
    } else {
      ToastAlerta(
        "Dados não conferem! Por favor, verifique as informações.",
        "erro",
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmarSenha("");
    }
    setIsLoading(false);
  }

  return (
    <>
      <div
        className="
      h-screen
      overflow-hidden
      bg-[#f0f0cf]
      flex
      items-center
      justify-center
      "
      >
        <div
          className="
        grid
        grid-cols-1
        lg:grid-cols-2
        w-full
        max-w-6xl
        h-[90vh]
        rounded-3xl
        overflow-hidden
        shadow-xl
        "
        >
          <div
            className="
          hidden
          lg:block
          bg-cover
          bg-center
          "
            style={{
              backgroundImage: "url('https://i.imgur.com/KqZSJ6n.png')",
            }}
          />

          <div
            className="
          bg-white
          relative
          flex
          items-center
          justify-center
          h-[90vh]
          "
          >
            <img
              src={mascote}
              alt="Mascote FitFood"
              className="
              absolute
              top-15
              right-0
              h-28
              w-auto"
            />

            <form
              className="
            w-full
            flex
            flex-col
            justify-center
            gap-5
            p-10
            "
              onSubmit={cadastrarNovoUsuario}
            >
              <div className="text-left">
                <h1
                  className="
    font-camera
    text-[#839558]
    text-4xl
    lg:text-5xl
    leading-tight
    mt-7
    "
                >
                  Venha fazer parte do FitFood
                </h1>

                <p
                  className="
    text-[#0e3322]
    mt-3
    font-creato text-xl
    "
                >
                  Crie sua conta e comece hoje uma jornada mais saudável
                </p>
              </div>

              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome completo"
                className="
              rounded-xl
              p-3
              bg-[#fafafa]
              border
              border-[#839558]
              focus:outline-none
              focus:ring-2
              focus:ring-[#839558]
              "
                onChange={atualizarEstado}
              />

              <input
                type="email"
                name="usuario"
                id="usuario"
                placeholder="Email"
                className="
              rounded-xl
              p-3
              bg-[#fafafa]
              border
              border-[#839558]
              focus:outline-none
              focus:ring-2
              focus:ring-[#839558]
              "
                onChange={atualizarEstado}
              />

              <input
                type="text"
                name="foto"
                id="foto"
                placeholder="Link da sua foto"
                className="
              rounded-xl
              p-3
              bg-[#fafafa]
              border
              border-[#839558]
              focus:outline-none
              focus:ring-2
              focus:ring-[#839558]
              "
                onChange={atualizarEstado}
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="Senha"
                  className="
                rounded-xl
                p-3
                bg-[#fafafa]
                border
                border-[#839558]
                "
                  onChange={atualizarEstado}
                />

                <input
                  type="password"
                  name="confirmarSenha"
                  id="confirmarSenha"
                  placeholder="Confirmar senha"
                  value={confirmarSenha}
                  className="
                rounded-xl
                p-3
                bg-[#fafafa]
                border
                border-[#839558]
                "
                  onChange={handleConfirmarSenha}
                />
              </div>

              <button
                type="submit"
                className="
              rounded-full
              py-3
              bg-[#ca5030]
              hover:bg-[#f7613b]
              text-white
              font-bold
              transition
              cursor-pointer
              "
              >
                {isLoading ? (
                  <MoonLoader color="#ffffff" size={24} />
                ) : (
                  "Cadastrar"
                )}
              </button>

              <button
                type="button"
                onClick={retornar}
                className="
              text-[#839558]
              hover:text-[#ca5030]
              cursor-pointer
              mb-8
              "
              >
                Já tenho uma conta
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cadastro;
