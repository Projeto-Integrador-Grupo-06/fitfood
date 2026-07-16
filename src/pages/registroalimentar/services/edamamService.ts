import axios from "axios";

const APP_ID = import.meta.env.VITE_EDAMAM_APP_ID;
const APP_KEY = import.meta.env.VITE_EDAMAM_APP_KEY;

const api = axios.create({
  baseURL: "https://api.edamam.com/api/food-database/v2",
});

export async function pesquisarAlimento(nome: string) {
  const { data } = await api.get("/parser", {
    params: {
      ingr: nome,
      app_id: APP_ID,
      app_key: APP_KEY,
    },
  });

  return data.hints;
}