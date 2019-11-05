import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const isLoggedIn = false;

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/tasks",
      name: "tasks-all",
      component: () => import('./views/tasks/TaskAll.vue'),
      beforeEnter: (to, from, next) => {
        if(isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: "/tasks/create",
      name: "tasks-create",
      component: () => import('./views/tasks/TaskCreate.vue'),
      beforeEnter: (to, from, next) => {
        if(isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: "/tasks/edit/:id",
      name: "tasks-edit",
      component: () => import('./views/tasks/TaskEdit.vue'),
      beforeEnter: (to, from, next) => {
        if(isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import('./views/authentication/Login.vue'),
      beforeEnter: (to, from, next) => {
        if(!isLoggedIn) {
          next();
        } else {
          next('/');
        }
      }
    },
    {
      path: "/register",
      name: "register",
      component: () => import('./views/authentication/Register.vue'),
      beforeEnter: (to, from, next) => {
        if(!isLoggedIn) {
          next();
        } else {
          next('/');
        }
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  linkActiveClass: "active",
  mode: 'history'
});


export default router;