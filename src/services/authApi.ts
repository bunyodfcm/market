import { checkUser, createItem, getUsersByPost } from "./api";

// User type (kerak bo‘lsa kengaytirib olasan)
export interface User {
  id: string;
  phone: string;
  nickname: string;
  role: "admin" | "user";
}

// Register (telefon/email yuboradi)
export const registerUser = async (data: {
  phone: string;
  nickname: string;
  password: string;
}): Promise<{ token: string }> => {
  return await createItem("user/register", data);
};

// Verify OTP (localStorage'dagi token bilan ishlaydi)
export const verifyOtp = async (data: {
  numberOTP: string;
}): Promise<{ token: string; user: User }> => {
  return await createItem("user/verify-otp", data);
};

// Login
export const loginUser = async (data: {
  nickname: string;
  password: string;
}): Promise<{ token: string; user: User }> => {
  return await createItem("user/login", data);
};

// fetch users

export const fetchUsers = async (data: {
  page: number;
  limit: number;
  search?: string;
}): Promise<{ token: string; data: any }> => {
  return await getUsersByPost("user", data);
};

//check user nickname
export const checkNickname = async (data: {
  nickname: string;
}): Promise<{ message: string }> => {
  return await checkUser("user/nickname-check", data);
};

// get user 

export const getUser = async (data:{
  nickname: string;
}): Promise<{ data:any }>=> {
  
}