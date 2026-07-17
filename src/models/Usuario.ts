import type Alimentos from "./Alimentacao";

export default interface Usuario {

    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;

    peso: number | null;
    altura: number | null;
    imc: string | null;

    alimentos: Alimentos[] | null;
}