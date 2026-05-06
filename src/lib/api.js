import axios from "axios";

const api = axios.create({
  baseURL: "https://debug-battle-5-backend.onrender.com/api",
  headers: { "Content-Type": "application/json" },
});

export const productService = {
  getAll: (params) => api.get("/products", { params }),
  getById: (id) => api.get(`/products/${id}`),
  create: (data) => api.post("/products", data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`),
};
