/*import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-sandbox.factus.com.co', // Reemplazar con la URL real de la API
});

// Interceptor para agregar token de autenticación si está disponible
apiClient.interceptors.request.use(
  (config) => {
      const dataStore = JSON.parse(localStorage.getItem("store"));
      const token = dataStore?.token || "";
      config.headers["token"] = token;
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

Función para autenticación\export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error en la autenticación';
  };*/
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api-sandbox.factus.com.co"
});

apiClient.interceptors.request.use(
  (config) => {
      const dataStore = JSON.parse(localStorage.getItem("tienda"));
      const token = dataStore?.token || "";

      // 🚨 No agregar "token" en la autenticación
      if(!config.url.includes("/oauth/token")) {
          config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

export default apiClient;