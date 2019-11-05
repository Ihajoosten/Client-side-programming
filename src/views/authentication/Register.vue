<template>
  <div>
    <h1 class="text-center">Register</h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
      <div class="offset-md-1">
        <div class="form-group">
          <label for="first">First Name</label>
          <input v-model="first" type="text" class="form-control" id="first" placeholder="First" />
        </div>
        <div class="form-group">
          <label for="last">Last Name</label>
          <input v-model="last" type="text" class="form-control" id="last" placeholder="Last" />
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            v-model="username"
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="form-group text-center">
        <button type="submit" class="btn btn-success btn-lg">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as auth from "../../services/AuthService.js";

export default {
  name: "register",
  data: function() {
    return {
      username: "",
      password: "",
      first: "",
      last: ""
    };
  },
  methods: {
    onSubmit: async function() {
      const user = {
        username: this.username,
        password: this.password,
        first: this.first,
        last: this.last
      };
      const registerPromise = auth.registerUser(user);
      const loginPromise = auth.login(user);
      await Promise.all([registerPromise, loginPromise]);
      this.$router.push({ name: "home" });
    }
  }
};
</script>