import axios from "axios";
import type { AxiosResponse } from "axios";
const API_URL = "https://e-mall.webpack.uz/api"; // bazaviy URL

// LocalStorage’dan token olish
const getToken = () => localStorage.getItem("otpToken");

// Axios instance
const api = axios.create({
  baseURL: API_URL,
});

// Har bir requestga token qo‘shish (agar mavjud bo‘lsa)
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Create
export const createItem = async <T>(
  endpoint: string,
  data: any
): Promise<T> => {
  const response: AxiosResponse<T> = await api.post(`/${endpoint}`, data);
  return response.data;
};

// Read (all)
export const getItems = async <T>(endpoint: string): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(`/${endpoint}`);
  return response.data;
};

// Read (single)
export const getItem = async <T>(
  endpoint: string,
  id: string | number
): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(`/${endpoint}/${id}`);
  return response.data;
};

// Update
export const updateItem = async <T>(
  endpoint: string,
  id: string | number,
  data: any
): Promise<T> => {
  const response: AxiosResponse<T> = await api.put(`/${endpoint}/${id}`, data);
  return response.data;
};

// Delete
export const deleteItem = async <T>(
  endpoint: string,
  id: string | number
): Promise<T> => {
  const response: AxiosResponse<T> = await api.delete(`/${endpoint}/${id}`);
  return response.data;
};

// get users with by post method
export const getUsersByPost = async <T>(
  endpoint: string,
  data: any
): Promise<T> => {
  const response: AxiosResponse<T> = await api.post(`/${endpoint}`, data);
  return response.data;
};

export const checkUser = async <T>(endpoint: string, data: any): Promise<T> => {
  const response: AxiosResponse<T> = await api.post(`/${endpoint}`, data);
  return response.data;
};
