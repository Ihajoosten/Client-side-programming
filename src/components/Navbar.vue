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
          <li class="nav-item">
            <router-link id="custom-link" class="nav-link" to="/tasks" exact>Tasks</router-link>
          </li>
          <li class="nav-item">
            <router-link id="custom-link" class="nav-link" to="/register" exact>Register</router-link>
          </li>
          <li class="nav-item">
            <router-link id="custom-link" class="nav-link" to="/login" exact>Login</router-link>
          </li>
          <li class="nav-item">
            <a id="custom-link" class="nav-link">Logout</a>
          </li>
          <li class="nav-item">
            <a id="custom-link" class="nav-link">{{ this.$store.state.username ? this.$store.state.username : null}}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
</style>