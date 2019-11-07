<template>
  <div id="app">
    <Navbar />
    <div id="app-container">
      <AppHeader />
      <transition name="page" mode="out-in" v-if="!isLoading">
      <router-view></router-view>
    </transition>
    </div>
    <Footer />
    <AppLoader />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import AppHeader from "./components/AppHeader.vue";
import AppLoader from "./components/AppLoading.vue";
import { mapGetters } from "vuex"


export default {
  name: "app",
  components: {
    Navbar,
    Footer,
    AppHeader,
    AppLoader
  },
  beforeCreate() {
    this.$store.dispatch("authenticate");
    this.$store.dispatch("fetchData");
  },
    computed: {
    ...mapGetters({
      isLoading: "isLoading"
    })
  }

};
</script>