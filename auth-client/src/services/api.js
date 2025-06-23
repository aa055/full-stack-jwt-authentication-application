import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Request: attach access token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response: handle 401 (expired token)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If access token expired (401), retry with refreshed token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Get new access token using refresh token
        const res = await axios.post('http://localhost:5000/api/auth/token', {
          token: localStorage.getItem('refreshToken')
        });

        localStorage.setItem('accessToken', res.data.accessToken);

        // Update header and retry original request
        originalRequest.headers['Authorization'] = 'Bearer ' + res.data.accessToken;
        return api(originalRequest);
      } catch (err) {
        // Refresh token failed, force logout
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(err);
      }
    }

    // If 403 or other, do not retry, just fail
    return Promise.reject(error);
  }
);

export default api;
