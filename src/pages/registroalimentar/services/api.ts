import axios from "axios";

const api = axios.create({
  baseURL: "https://sistema-fit.onrender.com",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      // Garante que não haverá a palavra "Bearer " duplicada
      const tokenLimpo = token.replace(/^Bearer\s+/i, "");
      config.headers.Authorization = `Bearer ${tokenLimpo}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor apenas para te avisar amigavelmente no console se o token vencer
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Atenção: Seu token do Swagger expirou! Cole o novo token no RegistroAlimentar.tsx.");
    }
    return Promise.reject(error);
  }
);

export default api;