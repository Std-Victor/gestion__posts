import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use(config => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`
  return config
})

axiosClient.interceptors.response.use(
    response => response,
    error => {
      if(error.response.status === 401) localStorage.removeItem('ACCESS_TOKEN')
      return Promise.reject(error.response.data)
    }
)

export default axiosClient;