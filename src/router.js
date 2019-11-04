import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/tasks",
      name: "tasks-all",
      component: () => import('./views/tasks/TaskAll.vue')
    },
    {
      path: "/tasks/create",
      name: "tasks-create",
      component: () => import('./views/tasks/TaskCreate.vue')
    },
    {
      path: "/tasks/edit/:id",
      name: "tasks-edit",
      component: () => import('./views/tasks/TaskEdit.vue')
    },
    {
      path: "/login",
      name: "login",
      component: () => import('./views/authentication/Login.vue')
    },
    {
      path: "/register",
      name: "register",
      component: () => import('./views/authentication/Register.vue')
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  linkActiveClass: "active",
  mode: 'history'
});
