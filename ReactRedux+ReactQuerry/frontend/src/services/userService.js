import axios from "axios";

// login, must return a promise
export const loginAPI = async (userData) => {
  const response = await axios.post("http://localhost:8000/api/users/login", {
    email: userData.email,
    password: userData.password,
  });
  // return a promise
  return response.data;
};
// logout, must return a promise
export const registerAPI = async (userData) => {
  const response = await axios.post(
    "http://localhost:8000/api/users/register",
    {
      email: userData.email,
      password: userData.password,
      username: userData.username,
    }
  );
  // return a promise
  return response.data;
};
// Profile, must return a promise
export const profileAPI = async (token) => {
  const response = await axios.get("http://localhost:8000/api/users/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // return a promise
  return response.data;
};
