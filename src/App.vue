<template>
  <v-app class="bg-grey-lighten-4">
    <Navbar/>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  name: "App",
};
</script>
