<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
      <router-link class="navbar-brand title" to="/">
        <img alt="Vue-logo" class="Vue-logo" src="../assets/logo.png" />
        Task Manager
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link id="custom-link" class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li v-if="$store.state.isLoggedIn" class="nav-item">
            <router-link id="custom-link" class="nav-link" to="/tasks" exact>Tasks</router-link>
          </li>
          <li v-if="$store.state.isLoggedIn" class="nav-item">
            <router-link id="custom-link" class="nav-link" to="/register" exact>Teams</router-link>
          </li>
          <li v-if="!$store.state.isLoggedIn" class="nav-item">
            <router-link id="custom-link" class="nav-link" to="/register" exact>Register</router-link>
          </li>
          <li v-if="!$store.state.isLoggedIn" class="nav-item">
            <router-link id="custom-link" class="nav-link" to="/login" exact>Login</router-link>
          </li>
          <li v-if="$store.state.isLoggedIn" class="nav-item">
            <router-link id="custom-link" class="nav-link" to="/account" exact>Account</router-link>
          </li>
          <li v-if="$store.state.isLoggedIn" class="nav-item">
            <a v-on:click.prevent="logout()" id="custom-link" class="nav-link">Logout</a>
          </li>
          
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import * as auth from "../services/AuthService.js";

export default {
  name: "Navbar",
  methods: {
    logout: function() {
      auth.logout();
      this.$router.push({ name: "home" });
    }
  }
};
</script>
