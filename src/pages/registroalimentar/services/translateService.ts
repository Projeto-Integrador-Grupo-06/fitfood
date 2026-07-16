// src/services/translateService.ts
import axios from "axios";

export async function traduzir(texto: string, destino = "pt") {
  const { data } = await axios.get("https://api.mymemory.translated.net/get", {
    params: {
      q: texto,
      langpair: `en|${destino}`,
    },
  });

  return data.responseData.translatedText;
}