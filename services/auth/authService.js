import apiClient from '@/services/api/apiClient';

// =====================
// REGISTER USER
// =====================
export const registerUser = async (data) => {
  const res = await apiClient.post('/auth/register', data);
  return res.data;
};

// =====================
// LOGIN USER
// =====================
export const loginUser = async (data) => {
  const res = await apiClient.post('/auth/login', data);
  return res.data;
};
