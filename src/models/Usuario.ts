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

    // Informações complementares do cadastro
    sexo?: string;
    idade?: number;
    objetivo?: string;
    atividade?: string;

    // Resultados calculados
    tmb?: number;
    caloriasRecomendadas?: number;
}