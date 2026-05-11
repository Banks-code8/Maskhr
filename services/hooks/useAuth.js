// hooks/useAuth.js
import { useAuthStore } from '@/store/authStore';
import { loginUser } from '@/services/auth/authService';

export const useAuth = () => {
  const { setAuth } = useAuthStore();

  const login = async (data) => {
    const res = await loginUser(data);

    if (res.success) {
      setAuth(res.data);
      localStorage.setItem('token', res.data.accessToken);
    }

    return res;
  };

  return { login };
};
