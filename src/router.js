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
      component: () =>
        import(/* webpackChunkName: "Tasks all" */ "./views/tasks/TaskAll.vue")
    },
    {
      path: "/tasks/create",
      name: "tasks-create",
      component: () =>
        import(
          /* webpackChunkName: "Tasks create" */ "./views/tasks/TaskCreate.vue"
        )
    },
    {
      path: "/tasks/edit/:id",
      name: "tasks-edit",
      component: () =>
        import(
          /* webpackChunkName: "Tasks edit id" */ "./views/tasks/TaskEdit.vue"
        )
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(
          /* webpackChunkName: "login" */ "./views/authentication/Login.vue"
        )
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(
          /* webpackChunkName: "register" */ "./views/authentication/Register.vue"
        )
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  linkActiveClass: "active",
  mode: 'history'
});
