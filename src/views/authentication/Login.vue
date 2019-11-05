<template>
  <div>
    <h1 class="text-center">Login</h1>
    <form class="custom-form" v-on:submit="onSubmit">
      <div class="offset-md-1">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" />
        </div>
      </div>
      <div class="form-group text-center">
        <button type="submit" class="btn btn-success btn-lg">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as auth from '../../services/AuthService.js'

export default {
    name: 'login',
    methods: {
        onSubmit: function(event) {
            event.preventDefault();
            auth.login();
            this.$router.push({ name: 'home' });
        }
    }
}
</script>