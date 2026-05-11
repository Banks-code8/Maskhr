import apiClient from '@/services/api/apiClient';

// =====================
// REGISTER USER
// =====================
export const registerUser = async (data) => {
  const res = await apiClient.post('/register', data);
  return res.data; // IMPORTANT: return backend data only
};

// =====================
// LOGIN USER
// =====================
export const loginUser = async (data) => {
  const res = await apiClient.post('/login', data);
  return res.data; // IMPORTANT: return backend data only
};
