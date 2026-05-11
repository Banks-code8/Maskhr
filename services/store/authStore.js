// store/authStore.js
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  token: null,

  setAuth: (data) =>
    set({
      user: data.user,
      token: data.accessToken,
    }),

  logout: () =>
    set({
      user: null,
      token: null,
    }),
}));
