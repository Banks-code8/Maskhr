import axios from 'axios';
import { getToken } from '@/services/utils/token';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // useful if you later use cookies/auth
});

// 🔹 Request Interceptor (attach token)
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response Interceptor (global error handling)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optional: handle global auth errors
    if (error.response?.status === 401) {
      console.warn('Unauthorized - maybe redirect to login later');
    }

    return Promise.reject(error);
  }
);

export default apiClient;
