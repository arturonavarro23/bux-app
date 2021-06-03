import api from '.';

export function setupInterceptors() {
  api.interceptors.request.use((config) => {
    config.params = {
      ...config.params,
      token: process.env.REACT_APP_PUBLISHABLE_TOKEN,
    };
    return config;
  });
}

export default setupInterceptors;
