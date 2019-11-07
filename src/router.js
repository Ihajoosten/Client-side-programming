import Vue from "vue";
import Router from "vue-router";
import * as auth from "./services/AuthService.js";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/tasks",
      name: "tasks-all",
      component: () => import("./views/tasks/TaskAll.vue"),
      beforeEnter: (to, from, next) => {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/tasks/create",
      name: "tasks-create",
      component: () => import("./views/tasks/TaskCreate.vue"),
      beforeEnter: (to, from, next) => {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/tasks/edit/:id",
      name: "tasks-edit",
      component: () => import("./views/tasks/TaskEdit.vue"),
      beforeEnter: (to, from, next) => {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/account/Login.vue"),
      beforeEnter: (to, from, next) => {
        if (!auth.isLoggedIn()) {
          next();
        } else {
          next("/");
        }
      }
    },
    {
      path: "/change-password",
      name: "change-password",
      component: () => import("./views/account/ChangePassword.vue")
    },
    {
      path: "/account",
      name: "account",
      component: () => import("./views/account/Details.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/account/Register.vue"),
      beforeEnter: (to, from, next) => {
        if (!auth.isLoggedIn()) {
          next();
        } else {
          next("/");
        }
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  linkActiveClass: "active",
  mode: "history"
});

export default router;
