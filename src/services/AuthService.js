import store from "../store.js";

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login() {
    const token = {
        username: 'luc'
    }
    setToken(token)
}

function setToken(token) {
  localStorage.setItem("token", JSON.stringify(token));
  store.dispatch("authenticate");
}

export function getUserName() {
  return "Luc";
}

export function getUserId() {
  return 1;
}
