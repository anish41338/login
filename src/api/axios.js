import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const login = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  }, {
    withCredentials: true
  });

  return response.data;
};

export default axios;
