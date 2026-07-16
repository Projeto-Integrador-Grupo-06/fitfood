export interface Nutrientes {
  ENERC_KCAL: number;
  PROCNT: number;
  CHOCDF: number;
  FAT: number;
}

export interface Alimento {
  foodId: string;
  label: string;
  nutrients: Nutrientes;
  category?: string;
  image?: string;
}

export interface RespostaEdamam {
  hints: Alimento[];
}