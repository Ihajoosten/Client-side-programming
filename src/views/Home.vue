<template>
  <div id="custom-home">
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "home",
  components: {
    Home
  },
  beforeCreate: function() {
    fetch(this.$store.state.apiURL + "/api/user", { method: "GET" })
      //.then(res => res.json())
  }
};
</script>
