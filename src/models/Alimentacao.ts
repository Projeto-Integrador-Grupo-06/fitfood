import type Categoria from "./Categoria"
import type Usuario from "./Usuario"

export default interface Alimento {
  id: number
  nomeRefeicao: string
  descricao: string
  calorias: number
  quantidade: number
  dataConsumo: string
  categoria: Categoria | null
  usuario: Usuario | null
}