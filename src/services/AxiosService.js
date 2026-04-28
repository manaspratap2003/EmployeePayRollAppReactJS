import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

const AxiosService = {
  get: (url) => {
    return axiosInstance.get(url)
      .then(response => response)
      .catch(error => { throw error; });
  },

  post: (url, data) => {
    return axiosInstance.post(url, data)
      .then(response => response)
      .catch(error => { throw error; });
  },

  put: (url, data) => {
    return axiosInstance.put(url, data)
      .then(response => response)
      .catch(error => { throw error; });
  },

  delete: (url) => {
    return axiosInstance.delete(url)
      .then(response => response)
      .catch(error => { throw error; });
  }
};

export default AxiosService;