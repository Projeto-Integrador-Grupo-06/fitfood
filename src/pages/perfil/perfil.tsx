import { useEffect, useState } from "react";
import { UserCircle } from "@phosphor-icons/react";
import axios from "axios";
import type Usuario from "../../models/Usuario";

function classificacaoImc(imc: number): string {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso adequado";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

export default function Perfil() {

    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

    useEffect(() => {
        axios
            .get("http://localhost:8080/usuarios/1")
            .then((response) => {
                setUsuario(response.data);
            })
            .catch((error) => {
                console.log("Erro ao buscar usuário:", error);
            });

    }, []);

    const valorImc = Number(usuario.imc);

    return (
        <main className="min-h-screen bg-[#F0F0CF] py-12 px-8">

            <div className="max-w-[1400px] mx-auto">

                {/* PERFIL */}

                <section className="bg-[#839558] rounded-[36px] px-14 py-12 flex items-center gap-14">

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


                    <div className="flex-1">

                        <h1 className="font-camera text-[64px] leading-none text-[#F0F0CF] mb-8">
                            {usuario.nome || "Usuário"}
                        </h1>


                        <div className="grid grid-cols-2 gap-x-16 gap-y-4">


                            <p className="font-creato text-[#0E3322] text-xl">
                                <span className="font-creato-medium">
                                    Sexo:
                                </span>{" "}
                                {usuario.sexo || "-"}
                            </p>


                            <p className="font-creato text-[#0E3322] text-xl">
                                <span className="font-creato-medium">
                                    Altura:
                                </span>{" "}
                                {usuario.altura || "-"} cm
                            </p>


                            <p className="font-creato text-[#0E3322] text-xl">
                                <span className="font-creato-medium">
                                    Idade:
                                </span>{" "}
                                {usuario.idade || "-"} anos
                            </p>


                            <p className="font-creato text-[#0E3322] text-xl">
                                <span className="font-creato-medium">
                                    Peso atual:
                                </span>{" "}
                                {usuario.peso || "-"} kg
                            </p>


                            <p className="font-creato text-[#0E3322] text-xl">
                                <span className="font-creato-medium">
                                    Objetivo:
                                </span>{" "}
                                {usuario.objetivo || "-"}
                            </p>


                            <p className="font-creato text-[#0E3322] text-xl">
                                <span className="font-creato-medium">
                                    Atividade:
                                </span>{" "}
                                {usuario.atividade || "-"}
                            </p>


                        </div>

                    </div>

                </section>



                {/* RESULTADOS */}

                <h2 className="font-camera text-[64px] text-[#0E3322] mt-16 mb-8">
                    Resultados
                </h2>



                <section className="grid grid-cols-3 gap-8">


                    {/* TMB */}

                    <div className="bg-[#0E3322] rounded-[28px] p-8 flex flex-col justify-between min-h-[180px]">

                        <h3 className="font-creato text-[#F0F0CF] text-xl">
                            Taxa Metabólica Basal (TMB):
                        </h3>


                        <div className="flex items-end mt-8">

                            <span className="font-creato-medium text-[#839558] text-6xl">

                                {usuario.tmb
                                    ? usuario.tmb.toLocaleString("pt-BR")
                                    : "-"}

                            </span>


                            <span className="font-creato text-[#839558] text-xl ml-2 mb-1">
                                kcal/dia
                            </span>

                        </div>

                    </div>




                    {/* IMC */}

                    <div className="bg-[#0E3322] rounded-[28px] p-8 flex flex-col justify-between min-h-[180px]">


                        <h3 className="font-creato text-[#F0F0CF] text-xl">
                            Índice de Massa Corporal (IMC)
                        </h3>


                        <div className="flex items-end flex-wrap mt-8">


                            <span className="font-creato-medium text-[#839558] text-6xl">

                                {!isNaN(valorImc)
                                    ? valorImc.toFixed(1)
                                    : "-"}

                            </span>


                            {!isNaN(valorImc) && (

                                <span className="font-creato text-[#839558] text-xl ml-2 mb-1">
                                    kg/m² - {classificacaoImc(valorImc)}
                                </span>

                            )}


                        </div>


                    </div>




                    {/* CALORIAS */}

                    <div className="bg-[#0E3322] rounded-[28px] p-8 flex flex-col justify-between min-h-[180px]">


                        <h3 className="font-creato text-[#F0F0CF] text-xl">
                            Calorias diárias recomendadas:
                        </h3>


                        <div className="flex items-end mt-8">


                            <span className="font-creato-medium text-[#839558] text-6xl">

                                {usuario.caloriasRecomendadas
                                    ? usuario.caloriasRecomendadas.toLocaleString("pt-BR")
                                    : "-"}

                            </span>


                            <span className="font-creato text-[#839558] text-xl ml-2 mb-1">
                                kcal
                            </span>


                        </div>


                    </div>


                </section>


            </div>

        </main>
    );
}