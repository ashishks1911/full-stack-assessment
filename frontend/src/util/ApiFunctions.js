import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:8080"
})

export async function getAllProducts() {
  try {
    const response = await api.get("/products");
    return response.data;
  }
  catch (error) {
    throw new error("Error fetching products");
  }
}

export async function searchProductsInDB(query) {
  try {
    const response = await api.get(`/products?search=${query}`);
    return response.data;
  }
  catch (error) {
    throw new error("Error fetching products");
  }
}

export async function findProductById(id) {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  }
  catch (error) {
    throw new error("Product not found");
  }
}

