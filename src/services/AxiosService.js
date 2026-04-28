import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

const AxiosService = {
  get: (url) => axiosInstance.get(url).catch(err => { throw err; }),
  post: (url, data) => axiosInstance.post(url, data).catch(err => { throw err; }),
  put: (url, data) => axiosInstance.put(url, data).catch(err => { throw err; }),
  delete: (url) => axiosInstance.delete(url).catch(err => { throw err; })
};

export default AxiosService;