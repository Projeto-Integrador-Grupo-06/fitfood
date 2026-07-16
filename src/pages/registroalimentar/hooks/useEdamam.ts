// src/pages/registroalimentar/hooks/useEdamam.ts
import { useState } from "react";
import { traduzir } from "../services/translateService";
import { pesquisarAlimento } from "../services/edamamService";

interface AlimentoResultado {
  id: string;
  nome: string;
  nomeOriginal: string;
  imagem?: string;
  calorias: number;
  proteinas: number;
  carboidratos: number;
  gorduras: number;
}

export function useEdamam() {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState<AlimentoResultado[]>([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function buscar() {
    if (!busca.trim() || loading) return;

    try {
      setLoading(true);
      setErro("");

      const hints = await pesquisarAlimento(busca);
      const limitados = hints.slice(0, 6);

      const alimentosTraduzidos = await Promise.all(
        limitados.map(async (hint: any) => {
          const food = hint?.food;
          const nutrientes = food?.nutrients;

          if (!food || !food.label || !nutrientes) return null;

          const nomeTraduzido = await traduzir(food.label);

          return {
            id: food.foodId,
            nome: nomeTraduzido,
            nomeOriginal: food.label,
            imagem: food.image,
            calorias: Math.round(nutrientes.ENERC_KCAL || 0),
            proteinas: Math.round(nutrientes.PROCNT || 0),
            carboidratos: Math.round(nutrientes.CHOCDF || 0),
            gorduras: Math.round(nutrientes.FAT || 0),
          };
        })
      );

      setResultado(
        alimentosTraduzidos
          .filter((item): item is AlimentoResultado => item !== null)
          .filter(
            (item, index, arr) => arr.findIndex((a) => a.id === item.id) === index
          )
      );
    } catch (error) {
      console.error(error);
      setErro("Não foi possível buscar os alimentos. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  function limpar() {
    setBusca("");
    setResultado([]);
    setErro("");
  }

  return {
    busca,
    setBusca,
    resultado,
    loading,
    erro,
    buscar,
    limpar,
  };
}