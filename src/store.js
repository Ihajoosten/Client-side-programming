import Vue from "vue";
import Vuex from "vuex";
import * as auth from "./services/AuthService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiURL: `${window.location.protocol}//${window.location.hostname}:4200`,
    username: null,
    userId: null,
    token: localStorage.getItem("access_token") || null,
  },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.username = auth.getUserName();
        state.userId = auth.getUserId();
      } else {
        state.username = null;
        state.userId = null;
      }
    }
  },
  actions: {
    authenticate(context) {
      context.commit("authenticate");
    }
  }
});
