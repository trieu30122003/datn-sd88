import axios from "axios";
import { Navigate } from "react-router-dom";

// import { Route, Redirect } from 'react-router-dom';

const PORT = 'http://localhost:8080';

export const instance = axios.create({
  baseURL: PORT,
  // timeout: 10000,
  withCredentials: true,
  headers: {
    'Authorization': 'Bearer',
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
});

instance.interceptors.request.use(
  function (config) {
    const userInfoStr = localStorage.getItem("userInfo");
    if (userInfoStr) {
      const userInfo = userInfoStr ? JSON.parse(userInfoStr) : null;
      config.headers.Authorization = `Bearer ${userInfo?.token}`;
    }

   
    return config;
    
  },
  function (error) {
   
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    Promise.reject(error)
    return  <Navigate replace to="/login" />;
    
    
    // history.replace('/login');
    // return Promise.reject(error)
  }
);
