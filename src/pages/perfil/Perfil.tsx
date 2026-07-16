import { useContext, useEffect, useState } from "react";
import { UserCircle, Fire } from "@phosphor-icons/react";
import type Usuario from "../../models/Usuario";
import { buscar } from "../../services/Service";
import type DadosFisicos from "../../models/DadosFisicos";
import { AuthContext } from "../../contexts/AuthContext";

function classificacaoImc(imc: number): string {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso adequado";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

export default function Perfil() {

    const {
        usuario: usuarioLogado,
        dadosFisicos,
        setDadosFisicos
    } = useContext(AuthContext);


    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        peso: 0,
        altura: 0,
        imc: "",
        alimentos: []
    });


    const [abrirModal, setAbrirModal] = useState(false);


    const [resultado, setResultado] = useState({
        imc: 0,
        tmb: 0,
        calorias: 0,
    });


    function atualizarUsuario(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }


    function atualizarPesoAltura(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setUsuario({
            ...usuario,
            [e.target.name]: Number(e.target.value)
        });
    }


    useEffect(() => {

        async function buscarUsuario() {

            try {

                await buscar(
                    "/usuarios/all",
                    (usuarios: Usuario[]) => {

                        const usuarioEncontrado = usuarios.find(
                            (item) => item.id === usuarioLogado.id
                        );


                        if (usuarioEncontrado) {
                            setUsuario(usuarioEncontrado);
                        }

                    },
                    {
                        headers: {
                            Authorization: usuarioLogado.token,
                        },
                    }
                );


            } catch (error) {

                console.log(error);

            }

        }


        if (usuarioLogado.id !== 0) {
            buscarUsuario();
        }


    }, [usuarioLogado.id, usuarioLogado.token]);



    function calcularResultados() {

        const peso = Number(usuario.peso);
        const altura = Number(usuario.altura);
        const idade = Number(dadosFisicos.idade);


        if (
            peso <= 0 ||
            altura <= 0 ||
            idade <= 0
        ) {
            return;
        }


        let tmb =
            10 * peso +
            6.25 * altura -
            5 * idade;


        tmb =
            dadosFisicos.sexo === "masculino"
                ? tmb + 5
                : tmb - 161;



        const fatorAtividade = {
            sedentario: 1.2,
            moderada: 1.45,
            ativo: 1.725,
        };


        let kcal =
            tmb *
            fatorAtividade[dadosFisicos.atividade];



        if (dadosFisicos.objetivo === "emagrecimento") {
            kcal -= 400;
        }


        if (dadosFisicos.objetivo === "hipertrofia") {
            kcal += 400;
        }



        const alturaImc = altura / 100;

        const imc = peso / (alturaImc * alturaImc);



        setResultado({
            imc,
            tmb: Math.round(tmb),
            calorias: Math.round(kcal),
        });


        setAbrirModal(false);
    }



    function atualizarDados(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {

        setDadosFisicos({
            ...dadosFisicos,
            [e.target.name]:
                e.target.type === "number"
                    ? Number(e.target.value)
                    : e.target.value,
        });

    }

    return (
        <main className="min-h-screen bg-[#F0F0CF] py-12 px-8">

            <div className="max-w-[1400px] mx-auto">

                <section className="relative bg-[#839558] rounded-[36px] px-14 py-12 flex items-center gap-14">

                    {/* Botão do modal */}
                    <button
                        onClick={() => setAbrirModal(true)}
                        className="absolute top-8 right-8 w-14 h-14 rounded-full bg-[#0E3322] hover:scale-105 transition-all flex items-center justify-center"
                    >
                        <Fire
                            size={28}
                            weight="fill"
                            className="text-[#F0F0CF]"
                        />
                    </button>

                    {/* Foto */}
                    <div className="w-[260px] flex justify-center">

                        {usuario.foto ? (

                            <img
                                src={usuario.foto}
                                alt={usuario.nome}
                                className="w-[250px] h-[250px] rounded-full object-cover"
                            />

                        ) : (

                            <UserCircle
                                size={250}
                                weight="fill"
                                className="text-[#D9D9D9]"
                            />

                        )}

                    </div>

                    {/* Dados */}
                    <div className="flex-1">

                        <h1 className="font-camera text-[64px] leading-none text-[#F0F0CF]">

                            {usuario.nome || "Usuário"}

                        </h1>

                        <p className="font-creato text-[#F0F0CF] text-2xl mt-3">

                            {usuario.usuario}

                        </p>

                        <div className="mt-10 grid grid-cols-2 gap-y-5">

                            <p className="font-creato text-[#0E3322] text-xl">

                                <span className="font-creato-medium">
                                    Peso:
                                </span>{" "}

                                {usuario.peso} kg

                            </p>

                            <p className="font-creato text-[#0E3322] text-xl">

                                <span className="font-creato-medium">
                                    Altura:
                                </span>{" "}

                                {usuario.altura} cm

                            </p>

                        </div>

                    </div>

                </section>

                <h2 className="font-camera text-[64px] text-[#0E3322] mt-16 mb-8">

                    Resultados

                </h2>

                <section className="grid grid-cols-3 gap-8">

                    {/* TMB */}

                    <div className="bg-[#0E3322] rounded-[28px] p-8 flex flex-col justify-between min-h-[180px]">

                        <h3 className="font-creato text-[#F0F0CF] text-xl">

                            Taxa Metabólica Basal (TMB)

                        </h3>

                        <div className="flex items-end mt-8">

                            <span className="font-creato-medium text-[#839558] text-6xl">

                                {resultado.tmb || "-"}

                            </span>

                            {resultado.tmb > 0 && (

                                <span className="font-creato text-[#839558] text-xl ml-2 mb-1">

                                    kcal/dia

                                </span>

                            )}

                        </div>

                    </div>

                    {/* IMC */}

                    <div className="bg-[#0E3322] rounded-[28px] p-8 flex flex-col justify-between min-h-[180px]">

                        <h3 className="font-creato text-[#F0F0CF] text-xl">

                            Índice de Massa Corporal

                        </h3>

                        <div className="flex flex-wrap items-end mt-8">

                            <span className="font-creato-medium text-[#839558] text-6xl">

                                {resultado.imc
                                    ? resultado.imc.toFixed(1)
                                    : "-"}

                            </span>

                            {resultado.imc > 0 && (

                                <span className="font-creato text-[#839558] text-xl ml-2 mb-1">

                                    kg/m² - {classificacaoImc(resultado.imc)}

                                </span>

                            )}

                        </div>

                    </div>

                    {/* Calorias */}

                    <div className="bg-[#0E3322] rounded-[28px] p-8 flex flex-col justify-between min-h-[180px]">

                        <h3 className="font-creato text-[#F0F0CF] text-xl">

                            Calorias diárias recomendadas

                        </h3>

                        <div className="flex items-end mt-8">

                            <span className="font-creato-medium text-[#839558] text-6xl">

                                {resultado.calorias || "-"}

                            </span>

                            {resultado.calorias > 0 && (

                                <span className="font-creato text-[#839558] text-xl ml-2 mb-1">

                                    kcal

                                </span>

                            )}

                        </div>

                    </div>

                </section>

            </div>
            {abrirModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                    <div className="bg-[#F0F0CF] w-full max-w-xl rounded-[30px] p-10 relative">

                        <button
                            onClick={() => setAbrirModal(false)}
                            className="absolute top-5 right-6 text-3xl text-[#0E3322] hover:scale-110 transition"
                        >
                            ×
                        </button>

                        <h2 className="font-camera text-5xl text-[#0E3322] mb-8 text-center">
                            Avaliação Física
                        </h2>

                        <div className="space-y-5">

                            {/* Peso */}

                            <div>
                                <label className="font-creato-medium text-[#0E3322]">
                                    Peso (kg)
                                </label>

                                <input
                                    type="number"
                                    name="peso"
                                    value={usuario.peso}
                                    onChange={atualizarUsuario}
                                    className="..."
                                />
                            </div>

                            {/* Altura */}

                            <div>
                                <label className="font-creato-medium text-[#0E3322]">
                                    Altura (cm)
                                </label>

                                <input
                                    type="number"
                                    name="altura"
                                    value={usuario.altura}
                                    onChange={atualizarUsuario}
                                    className="..."
                                />
                            </div>

                            {/* Idade */}

                            <div>
                                <label className="font-creato-medium text-[#0E3322]">
                                    Idade
                                </label>

                                <input
                                    type="number"
                                    name="idade"
                                    value={dadosFisicos.idade}
                                    onChange={atualizarDados}
                                    className="w-full mt-2 rounded-xl border p-3"
                                />
                            </div>

                            {/* Sexo */}

                            <div>

                                <label className="font-creato-medium text-[#0E3322]">
                                    Sexo
                                </label>

                                <select
                                    name="sexo"
                                    value={dadosFisicos.sexo}
                                    onChange={atualizarDados}
                                    className="w-full mt-2 rounded-xl border p-3"
                                >
                                    <option value="feminino">
                                        Feminino
                                    </option>

                                    <option value="masculino">
                                        Masculino
                                    </option>

                                </select>

                            </div>

                            {/* Objetivo */}

                            <div>

                                <label className="font-creato-medium text-[#0E3322]">
                                    Objetivo
                                </label>

                                <select
                                    name="objetivo"
                                    value={dadosFisicos.objetivo}
                                    onChange={atualizarDados}
                                    className="w-full mt-2 rounded-xl border p-3"
                                >

                                    <option value="emagrecimento">
                                        Emagrecimento
                                    </option>

                                    <option value="hipertrofia">
                                        Hipertrofia
                                    </option>

                                    <option value="manutencao">
                                        Manutenção
                                    </option>

                                </select>

                            </div>

                            {/* Atividade */}

                            <div>

                                <label className="font-creato-medium text-[#0E3322]">
                                    Atividade Física
                                </label>

                                <select
                                    name="atividade"
                                    value={dadosFisicos.atividade}
                                    onChange={atualizarDados}
                                    className="w-full mt-2 rounded-xl border p-3"
                                >

                                    <option value="sedentario">
                                        Sedentário
                                    </option>

                                    <option value="moderada">
                                        Moderada
                                    </option>

                                    <option value="ativo">
                                        Muito ativo
                                    </option>

                                </select>

                            </div>

                            <button
                                onClick={calcularResultados}
                                className="w-full bg-[#0E3322] text-[#F0F0CF] py-4 rounded-xl font-creato-medium text-lg hover:scale-[1.02] transition mt-8"
                            >
                                Calcular
                            </button>

                        </div>

                    </div>

                </div>
            )}
        </main>
    );
}