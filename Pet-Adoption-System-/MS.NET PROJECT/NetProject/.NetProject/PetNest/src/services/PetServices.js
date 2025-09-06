
import axios from "axios";
import { getToken } from "./UserServices";

const API_BASE_URL = "https://localhost:7077/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});


api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export function getAllPets() {
  return api.get("/pets");
}


export function getPetById(id) {
  return api.get(`/pets/${id}`);
}


export function addPet(formData) {
  return api.post("/pets", formData, {
    headers: {
     
      "Content-Type": "multipart/form-data",
    },
  });
}


export function editPet(id, data) {

  if (data instanceof FormData) {
    return api.put(`/pets/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
 
  return api.put(`/pets/${id}`, data);
}


export function deletePet(id) {
  return api.delete(`/pets/${id}`);
}
