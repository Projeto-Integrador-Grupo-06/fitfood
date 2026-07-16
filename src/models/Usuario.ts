import type Alimentos from "./Alimentacao";

export default interface Usuario {

    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;

    peso: number;
    altura: number;
    imc: string;

    alimentos: Alimentos[] | null;
}