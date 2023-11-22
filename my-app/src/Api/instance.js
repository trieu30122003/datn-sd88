import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PORT = "http://localhost:8080";

// const navigate = useNavigate();

const userInfoStr = localStorage.getItem("userInfo");
const userInfo = userInfoStr ? JSON.parse(userInfoStr) : null;
// if (userInfo == null) navigate('/login')

export const instance = axios.create({
  baseURL: PORT,
  // timeout: 10000,
  headers: {
    'Authorization': `Bearer ${userInfo?.token}`,
    'Content-Type': 'application/json'
  }
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
    // check if acctoken localstorage
    //  retun config.header {}
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
