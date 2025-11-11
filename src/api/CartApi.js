import axios from "axios";

const API_URL = "https://68e7a0cd10e3f82fbf3ffe42.mockapi.io/fruit"; 

export const cartApi = {
  getAll: () => axios.get(API_URL),
  addItem: (item) => axios.post(API_URL, item),
  updateItem: (id, data) => axios.put(`${API_URL}/${id}`, data),
  deleteItem: (id) => axios.delete(`${API_URL}/${id}`),
};
