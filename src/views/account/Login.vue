<template>
  <div class="container h-100">
    <div class="d-flex justify-content-center h-100">
      <div class="user_card">
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            <img src="../../assets/logo.png" class="brand_logo" alt="Logo" />
          </div>
        </div>
        <div class="d-flex justify-content-center form_container">
          <form v-on:submit.prevent="onSubmit">
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input
                v-model="username"
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
            <div class="input-group mb-2">
              <span class="input-group-text"><i class="fas fa-key"></i></span>
              <div class="input-group-append"></div>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <br>
            <div class="form-group text-center">
        <button type="submit" class="btn btn-success">Login</button>
      </div>
          </form>
        </div>

        <div class="mt-4">
          <div class="d-flex justify-content-center links">
            Don't have an account?
            <a href="#" class="ml-2">Sign Up</a>
          </div>
          <div class="d-flex justify-content-center links">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import * as auth from "../../services/AuthService.js";

export default {
  name: "login",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit: async function() {
      const user = {
        username: this.username,
        password: this.password
      };
      await auth.login(user);
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
.user_card {
  height: 400px;
  width: 350px;
  margin-top: auto;
  margin-bottom: auto;

  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}
.brand_logo_container {
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  background: #373f46;
  padding: 10px;
  text-align: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
.form_container {
  margin-top: 100px;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: #373f46 !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #c0392b !important;
}
</style>