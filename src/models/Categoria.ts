import type Alimento from "./Alimentacao"

export default interface Categoria {
  id: number
  nome: string
  descricao: string
  alimentos: Alimento[] | null
}
