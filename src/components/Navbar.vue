<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="text-grey"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        class="text-uppercase grey--text"
        @click="goToHome()"
        style="cursor: pointer"
      >
        <!-- <span class="font-weight-light">SPA</span> -->
        <span>Vuejs</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu :location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn color="grey" dark v-bind="props" class="mt-3"> MENU </v-btn>
        </template>
        <v-list density="compact">
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            style="display: flex; font-size: 18px; font-weight: 500"
            class="mt-3"
          >
            <template v-slot:prepend>
              <v-icon :icon="link.icon"></v-icon>
            </template>
            <v-list-item-title v-text="link.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-btn icon>
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" temporary class="bg-info">
      <v-layout class="mt-5">
        <div style="margin-left: 90px">
          <v-avatar size="x-large" color="white">
            <span>TP</span>
          </v-avatar>
          <p class="text-white text-subtitle mt-3">TT Patel</p>
        </div>
      </v-layout>
      <div class="d-flex justify-center mt-5 mt-3">
        <Popup @changeData="ChangeD($event)"/>
      </div>
      <v-list density="compact" style="margin-top: 90px">
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          style="display: flex; font-size: 18px; font-weight: 500"
          class="mt-3"
        >
          <template v-slot:prepend>
            <v-icon :icon="link.icon"></v-icon>
          </template>
          <v-list-item-title v-text="link.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
        { icon: "mdi-pencil", text: "Todo", route: "/todo" },
      ],
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>