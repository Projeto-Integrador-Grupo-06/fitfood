import type Alimentos from "./Alimentacao";

export default interface Usuario {
  id: number
  nome: string
  usuario: string
  senha: string
  foto: string
  peso: number
  altura: number
  imc: string
  alimentos: Alimentos[] | null
  
   // Informações complementares do cadastro
  objetivo: 'emagrecimento' | 'hipertrofia' | 'manutencao'
  atividade: 'sedentario' | 'moderada' | 'ativo'
  sexo: 'feminino' | 'masculino'
  idade: string
  
    // Resultados calculados
    tmb?: number;
    caloriasRecomendadas?: number;
}
