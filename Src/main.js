import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

const router = new VueRouter({
    mode: 'history',
    routes: Routes
  
  });
  
  new Vue({
    render: h => h(App),
    router: router
  }).$mount('#app')
  