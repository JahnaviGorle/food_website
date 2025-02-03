import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : '/';
axios.defaults.withCredentials = true; // If you're sending cookies or credentials

// Optionally, you can set up interceptors or request/response middleware
axios.interceptors.request.use(
  (config) => {
    // You can add authorization tokens here if needed
    // config.headers['Authorization'] = `Bearer ${your_token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
