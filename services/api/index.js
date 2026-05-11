import apiClient from './apiClient';

export const postData = async (url, data) => {
  try {
    const response = await apiClient.post(url, data);

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        message: error.response.data?.message || 'Request failed',
        status: error.response.status,
      };
    }

    return {
      success: false,
      message: 'Network error. Please check your connection.',
    };
  }
};
