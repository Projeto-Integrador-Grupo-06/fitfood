import { X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { COLORS, FONT, BORDER } from "../../../utils/theme";
import SearchBar from "./SearchBar";
import CardResultado from "./CardResultado";
import { useEdamam } from "../hooks/useEdamam";

import {
    listarCategorias,
    type Categoria,
} from "../services/categoriaService";


interface ModalAlimentoProps {

    aberto: boolean;

    onFechar: () => void;

    onAdicionar: (
        alimento: any,
        categoriaId: number
    ) => void;

    onEditar: (
        alimento: any,
        categoriaId: number
    ) => void;

    alimentoEmEdicao?: any;

}



function ModalAlimento({
    aberto,
    onFechar,
    onAdicionar,
    onEditar,
    alimentoEmEdicao

}: ModalAlimentoProps) {


    const {
        busca,
        setBusca,
        resultado,
        loading,
        erro,
        buscar,
        limpar

    } = useEdamam();



    const [categorias, setCategorias] =
        useState<Categoria[]>([]);



    const [categoriaSelecionada, setCategoriaSelecionada] =
        useState<number>(0);



    // Carregar categorias quando abrir modal

    useEffect(() => {


        async function carregarCategorias() {


            try {


                const dados = await listarCategorias();


                setCategorias(dados);



                if (dados.length > 0) {

                    setCategoriaSelecionada(
                        dados[0].id
                    );

                }



            } catch (error) {


                console.error(
                    "Erro ao carregar categorias:",
                    error
                );


            }

        }



        if (aberto) {

            carregarCategorias();

        }


    }, [aberto]);




    // Limpa busca ao fechar

    function handleFechar() {

        limpar();

        onFechar();

    }



    if (!aberto) return null;



    return (


        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >


            <div

                className="w-full max-w-lg rounded-3xl p-6"

                style={{
                    backgroundColor: COLORS.white,
                    borderRadius: BORDER.card
                }}

            >



                <div className="mb-4 flex items-center justify-between">


                    <h2

                        className="text-xl"

                        style={{
                            fontFamily: FONT.black,
                            color: COLORS.primary
                        }}

                    >

                        {
                            alimentoEmEdicao
                            ? "Editar alimento"
                            : "Adicionar alimento"
                        }


                    </h2>




                    <button

                        onClick={handleFechar}

                        className="rounded-full p-1 transition hover:scale-110"

                    >

                        <X
                            size={22}
                            color={COLORS.primary}
                            weight="bold"
                        />


                    </button>


                </div>





                <SearchBar

                    valor={busca}

                    onChange={setBusca}

                    onPesquisar={buscar}

                />






                <div className="my-4">


                    <label

                        className="mb-2 block text-sm font-medium"

                        style={{
                            color: COLORS.primary
                        }}

                    >

                        Categoria


                    </label>





                    <select

                        value={categoriaSelecionada}

                        onChange={(e) =>
                            setCategoriaSelecionada(
                                Number(e.target.value)
                            )
                        }

                        className="w-full rounded-xl border border-gray-300 bg-white p-3 text-sm"

                    >


                        {

                            categorias.length === 0 ? (


                                <option value={0}>

                                    Nenhuma categoria disponível

                                </option>


                            ) : (


                                categorias.map((categoria) => (


                                    <option

                                        key={categoria.id}

                                        value={categoria.id}

                                    >

                                        {categoria.nome}

                                    </option>


                                ))


                            )


                        }


                    </select>



                </div>







                {loading && (


                    <p

                        className="py-4 text-center"

                        style={{
                            color: COLORS.primary
                        }}

                    >

                        Buscando alimentos...

                    </p>


                )}






                {erro && (


                    <p className="py-4 text-center text-red-500">


                        Erro ao buscar alimento.


                    </p>


                )}








                {!loading && !erro && resultado.length === 0 && (


                    <p

                        className="py-4 text-center opacity-60"

                        style={{
                            color: COLORS.primary
                        }}

                    >

                        Pesquise um alimento para começar.


                    </p>


                )}







                <div

                    className="mt-2 max-h-60 space-y-3 overflow-y-auto pr-1"

                >



                    {

                    resultado
                    .filter(Boolean)
                    .map((alimento,index)=>(



                        <CardResultado


                            key={
                                alimento.id || index
                            }



                            nome={alimento.nome}

                            imagem={alimento.imagem}

                            calorias={alimento.calorias}

                            proteinas={alimento.proteinas}

                            carboidratos={alimento.carboidratos}

                            gorduras={alimento.gorduras}



                            onAdicionar={()=>{



                                if(alimentoEmEdicao){



                                    onEditar(

                                        {

                                            ...alimentoEmEdicao,

                                            nome:
                                            alimento.nome,

                                            calorias:
                                            alimento.calorias,

                                            proteinas:
                                            alimento.proteinas,

                                            carboidratos:
                                            alimento.carboidratos,

                                            gorduras:
                                            alimento.gorduras,

                                            imagem:
                                            alimento.imagem,

                                        },


                                        categoriaSelecionada


                                    );



                                } else {



                                    onAdicionar(

                                        alimento,

                                        categoriaSelecionada


                                    );


                                }



                            }}



                        />


                    ))



                    }



                </div>



            </div>



        </div>


    );

}


export default ModalAlimento;