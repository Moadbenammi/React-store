import axios from 'axios';

const API = axios.create({ baseURL: "https://ilem-node-rest-api.herokuapp.com/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
  }
  return req;
});

export const fetchProducts = () => API.get('/products')
export const createProduct = (newProduct) => API.post('/products', newProduct)
export const updateProduct = (id, updatedProduct) => API.patch(`/products/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post
('/auth/signup', formData);