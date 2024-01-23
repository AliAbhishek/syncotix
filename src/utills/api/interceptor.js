// interceptors.js
export const setupInterceptors = (api) => {
    api.interceptors.request.use(
      async (config) => {
        const token = await localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };
  