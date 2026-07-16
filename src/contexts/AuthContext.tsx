import { createContext, useState, type ReactNode } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import type DadosFisicos from "../models/DadosFisicos";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";


interface AuthContextProps {

    usuario: UsuarioLogin;

    dadosFisicos: DadosFisicos;

    setDadosFisicos: React.Dispatch<
        React.SetStateAction<DadosFisicos>
    >;

    handleLogin: (
        usuarioLogin: UsuarioLogin
    ) => Promise<boolean>;

    handleLogout: () => void;

    isLoading: boolean;

}

const usuarioInicial: UsuarioLogin = {

    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: ""

};



const dadosFisicosInicial: DadosFisicos = {

    idade: 0,
    sexo: "feminino",
    atividade: "sedentario",
    objetivo: "manutencao"

};



const AuthContext = createContext<AuthContextProps>({

    usuario: usuarioInicial,

    dadosFisicos: dadosFisicosInicial,

    setDadosFisicos: () => { },

    handleLogin: async () => false,

    handleLogout: () => { },

    isLoading: false

});



function AuthProvider({ children }: { children: ReactNode }) {


    const [usuario, setUsuario] = useState<UsuarioLogin>(
        usuarioInicial
    );


    const [dadosFisicos, setDadosFisicos] =
        useState<DadosFisicos>(
            dadosFisicosInicial
        );


    const [isLoading, setIsLoading] =
        useState<boolean>(false);




    async function handleLogin(
        usuarioLogin: UsuarioLogin
    ): Promise<boolean> {


        try {

            setIsLoading(true);


            const resposta = await login(
                "/usuarios/logar",
                usuarioLogin,
                setUsuario
            );


            if (resposta.token) {


                ToastAlerta(
                    "Usuário autenticado com sucesso!",
                    "sucesso"
                );


                return true;

            }


            return false;



        } catch (error) {


            console.error(
                "Erro no login:",
                error
            );


            ToastAlerta(
                "Dados do usuário inválidos!",
                "erro"
            );


            return false;



        } finally {


            setIsLoading(false);


        }

    }




    function handleLogout() {


        setUsuario(usuarioInicial);


        setDadosFisicos(dadosFisicosInicial);


    }





    return (

        <AuthContext.Provider

            value={{

                usuario,

                dadosFisicos,

                setDadosFisicos,

                handleLogin,

                handleLogout,

                isLoading

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}



export {
    AuthContext,
    AuthProvider
};