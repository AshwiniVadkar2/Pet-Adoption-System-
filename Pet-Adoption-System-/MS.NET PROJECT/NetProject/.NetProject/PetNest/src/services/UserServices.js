import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_BASE_URL = "https://localhost:7077/api";

// Axios instance with interceptor
const api = axios.create({
  baseURL: API_BASE_URL
});

// Add JWT token to every request if available
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

// ======================
// Auth APIs
// ======================

export function registerUser(data) {
  return api.post("/auth/register", data);
}

export function loginUser(data) {
  return api.post("/auth/login", data);
}

// ======================
// User APIs
// ======================

export function getCurrentUser() {
  return api.get("/users/me");
}

export function getAllUsers() {
  return api.get("/users"); // Admin only
}

// ======================
// Auth Token Helpers
// ======================

export function addToken(token) {
  localStorage.setItem("token", token);
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function getToken() {
  return localStorage.getItem("token");
}

// ======================
// Role Helper
// ======================

export function getUserRole() {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    const roleClaim = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
    console.log("Decoded JWT:", decoded);
    console.log("Decoded role:", decoded?.[roleClaim]);
    return decoded?.[roleClaim] || null;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}