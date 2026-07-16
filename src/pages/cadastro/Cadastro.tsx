import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { MoonLoader } from "react-spinners";

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
    idade: "",
    objetivo: "manutencao",
    atividade: "sedentario",
    sexo: "feminino",
    alimentos: [],
  });

  const pesoNum = Number(usuario.peso);
  const alturaNum = Number(usuario.altura);
  const idadeNum = Number(usuario.idade);

  let tmb = 10 * pesoNum + 6.25 * alturaNum - 5 * idadeNum;
  tmb = usuario.sexo === "masculino" ? tmb + 5 : tmb - 161;

  const fatorAtividade = {
    sedentario: 1.2,
    moderada: 1.45,
    ativo: 1.725,
  };

  let kcal = tmb * fatorAtividade[usuario.atividade];

  if (usuario.objetivo === "emagrecimento") {
    kcal -= 400;
  } else if (usuario.objetivo === "hipertrofia") {
    kcal += 400;
  }

  const kcalDiarias = Math.round(kcal);

  const alturaImc = alturaNum / 100;
  const imc = (pesoNum / (alturaImc * alturaImc)).toFixed(1);

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
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
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
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
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-screen place-items-center font-bold bg-[#f0f0cf]">
        <div className="bg-[url('https://i.imgur.com/KqZSJ6n.png')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center rounded-2xl ml-8"></div>

        <form
          className="flex justify-center items-center flex-col w-13/14 gap-3 col-span-3 rounded-2xl p-5"
          onSubmit={cadastrarNovoUsuario}
        >
          <h1 className="font-camera text-[#839558] text-5xl text-center flex-col w-2/3 gap-4">
            Venha fazer parte do fitfood
          </h1>
          <p className="text-[#0e3322] text-lg text-center font-creato text-xl">
            Crie sua conta e comece hoje a construir uma vida mais saudável
          </p>
          <div className="flex flex-col w-full">
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome"
              className="rounded-2xl p-2 bg-[#f0f0cf] border-2 border-[#839558]"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className="flex flex-col w-full">
            <input
              type="email"
              name="usuario"
              id="usuario"
              placeholder="Email"
              className="bg-[#f0f0cf] rounded-2xl p-2 border-2 border-[#839558]"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className="flex flex-col w-full">
            <input
              type="text"
              name="foto"
              id="foto"
              placeholder="Cole o link da sua foto"
              className="bg-[#f0f0cf] rounded-2xl p-2 border-2 border-[#839558]"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className="grid grid-cols-2 w-full gap-2">
            <div className="flex flex-col w-full">
              <input
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
                className="bg-[#f0f0cf] rounded-2xl p-2 border-2 border-[#839558]"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>

            <div className="flex flex-col w-full">
              <input
                type="password"
                name="confirmarSenha"
                id="confirmarSenha"
                placeholder="Confirmar senha"
                className="bg-[#f0f0cf] rounded-2xl p-2 border-2 border-[#839558]"
                value={confirmarSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleConfirmarSenha(e)
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-3 w-full gap-2">
            <div className="flex flex-col w-full">
              <label htmlFor="altura">Altura</label>
              <input
                type="type"
                name="altura"
                id="altura"
                placeholder="Altura em cm"
                className="bg-[#f0f0cf] rounded-2xl p-2 border-2 border-[#839558]"
                value={usuario.altura}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="peso">Peso</label>
              <input
                type="type"
                name="peso"
                id="peso"
                placeholder="Peso em kg"
                className="bg-[#f0f0cf] rounded-2xl p-2 border-2 border-[#839558]"
                value={usuario.peso}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="idade">Idade</label>
              <input
                type="type"
                name="idade"
                id="idade"
                placeholder="Idade"
                className="bg-[#f0f0cf] rounded-2xl p-2 border-2 border-[#839558]"
                value={usuario.idade}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20 mt-3">
            <div className="flex flex-col w-full font-creato text-[#0e3322]">
              <p>Objetivo:</p>
              <label>
                <input
                  type="radio"
                  name="objetivo"
                  id="emagrecimento"
                  value="emagrecimento"
                  checked={usuario.objetivo === "emagrecimento"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                Emagrecimento
              </label>
              <label>
                <input
                  type="radio"
                  name="objetivo"
                  id="hipertrofia"
                  value="hipertrofia"
                  checked={usuario.objetivo === "hipertrofia"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                Hipertrofia
              </label>
              <label>
                <input
                  type="radio"
                  name="objetivo"
                  id="manutencao"
                  value="manutencao"
                  checked={usuario.objetivo === "manutencao"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                Manutenção
              </label>
            </div>

            <div className="flex flex-col w-full font-creato text-[#0e3322]">
              <p>Atividade Física:</p>
              <label>
                <input
                  type="radio"
                  name="atividade"
                  id="sedentario"
                  value="sedentario"
                  checked={usuario.atividade === "sedentario"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                Sedentário
              </label>
              <label>
                <input
                  type="radio"
                  name="atividade"
                  id="moderada"
                  value="moderada"
                  checked={usuario.atividade === "moderada"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                Moderada
              </label>
              <label>
                <input
                  type="radio"
                  name="atividade"
                  id="ativo"
                  value="ativo"
                  checked={usuario.atividade === "ativo"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                Muito ativo
              </label>
            </div>

            <div className="flex flex-col w-full font-creato text-[#0e3322]">
              <p>Sexo:</p>
              <label>
                <input
                  type="radio"
                  name="sexo"
                  id="feminino"
                  value="feminino"
                  checked={usuario.sexo === "feminino"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                Feminino
              </label>
              <label>
                <input
                  type="radio"
                  name="sexo"
                  id="masculino"
                  value="masculino"
                  checked={usuario.sexo === "masculino"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                Masculino
              </label>
            </div>
          </div>

          <div className="flex justify-around w-full gap-8">
            <button
              type="submit"
              className="rounded-3xl cursor-pointer text-white bg-[#ca5030] hover:bg-[#f7613b] w-1/2 py-2 flex justify-center"
            >
              {isLoading ? (
                <MoonLoader color="#ffffff" size={24} />
              ) : (
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="absolute right-0 top-5 z-50 pointer-events-none">
        <img
          src="https://i.imgur.com/hogHPOm.png"
          alt="Mascote FitFood"
          className="h-30  w-auto translate-x-[2px]"
        />
      </div>
    </>
  );
}
export default Cadastro;
