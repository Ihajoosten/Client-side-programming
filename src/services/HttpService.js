import store from "../store";
import axios from "axios";
import * as auth from "../services/AuthService.js";

export function http() {
  return axios.create({
    baseURL: store.state.apiURL,
    headers: {
      Authorization: auth.getToken()
    }
  });
}
