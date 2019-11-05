import store from "../store.js";
import { http } from "../services/HttpService.js";

export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return token != null;
}

export function login(user) {
  return http()
    .post("/api/auth", user)
    .then(res => {
      if (res) {
        setToken(res.data.token);
      }
    });
}

export function logout() {
  localStorage.clear();
  store.dispatch("authenticate");
}

function setToken(token) {
  localStorage.setItem("token", token);
  store.dispatch("authenticate");
}

export function getUserName() {
  return "Luc";
}

export function getUserId() {
  return 1;
}

export function registerUser(user) {
  return http().post("/api/register", user);
}
