import apiClient from '@/services/api/apiClient';

export const wakeBackendService = async () => {
  try {
    const response = await apiClient.get('/');

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        message: error.response.data?.message || 'Wake request failed',
        status: error.response.status,
      };
    }

    return {
      success: false,
      message: 'Network error. Backend may be asleep.',
    };
  }
};
