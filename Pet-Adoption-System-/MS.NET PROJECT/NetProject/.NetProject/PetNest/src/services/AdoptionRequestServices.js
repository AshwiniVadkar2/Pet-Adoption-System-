import axios from "axios";
import { getToken } from "./UserServices";

const API_BASE_URL = "https://localhost:7077/api";

const api = axios.create({
  baseURL: API_BASE_URL
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

export function createRequest(data) {
  return api.post("/adoptionrequests", data);
}

export function acceptRequest(id) {
  return api.post(`/adoptionrequests/${id}/accept`);
}

export function rejectRequest(id) {
  return api.post(`/adoptionrequests/${id}/reject`);
}

export function getRequestsForOwner() {
  return api.get("/adoptionrequests/owner");
}

export function getRequestsForAdopter() {
  return api.get("/adoptionrequests/adopter");
} 