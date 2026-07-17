import type Alimentos from "./Alimentacao";

export default interface Usuario {

    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;

    peso: number | undefined;
    altura: number | undefined;
    imc: string | null;

    alimentos: Alimentos[] | null;
}