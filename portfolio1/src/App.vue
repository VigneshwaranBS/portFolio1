<template>
  <v-app>
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- <home />
    <about />
    <what />
    <recent-project />
    <contact /> -->
    <v-card class="mx-auto overflow-hidden" height="700" width="1600">
      <v-app-bar color="black" dark class="elevation-1">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="vignesh" />
        </v-avatar>
        <v-toolbar-title>
          <v-btn href="/" text>
            <span class="red--text font-weight-black text-h3">V</span> IGNESH
          </v-btn></v-toolbar-title
        >
        <V-spacer></V-spacer>

        <div class="nav-content">
          <!-- <v-btn class="elevation-0 ml-1 white--text" text >Home</v-btn> -->
          <v-btn class="elevation-0 ml-1 white--text" text href="/about"
            >About</v-btn
          >
          <v-btn class="elevation-0 ml-1 white--text" text href="/what"
            >My work</v-btn
          >
          <v-btn class="elevation-0 ml-1 white--text" text href="/recentProject"
            >Recent project</v-btn
          >
          <v-btn class="elevation-0 ml-1 white--text" text href="/contact"
            >Contact</v-btn
          >
        </div>
      </v-app-bar>
      <div class="sidenav">
        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          class="deep-purple accent-4"
        >
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item class="mt-5" href="/">
                <v-list-item-icon>
                  <v-icon class="white--text">home</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text">Home</v-list-item-title>
              </v-list-item>
              <v-list-item class="mt-5" href="/about">
                <v-list-item-icon>
                  <v-icon class="white--text">info</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text">About</v-list-item-title>
              </v-list-item>
              <v-list-item class="mt-5" href="/what">
                <v-list-item-icon>
                  <v-icon class="white--text">work</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text"
                  >My Work</v-list-item-title
                >
              </v-list-item>
              <v-list-item class="mt-5" href="/recentProject">
                <v-list-item-icon>
                  <v-icon class="white--text">business</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text"
                  >Recent Project</v-list-item-title
                >
              </v-list-item>
              <v-list-item class="mt-5" href="/contact">
                <v-list-item-icon>
                  <v-icon class="white--text">contact_page</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text"
                  >Contact Me</v-list-item-title
                >
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </div>
      <router-view />
    </v-card>
  </v-app>
</template>

<script>
// import home from "./components/home.vue";
// import about from "./components/about.vue";
// import what from "./components/what.vue";
// import recentProject from "./components/recentProject.vue";
// import contact from "./components/contact.vue";

export default {
  name: "app",
  // components: {
  //   home,
  //   about,
  //   what,
  //   recentProject,
  //   contact,
  // },
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style lang="scss">
.v-btn :hover {
  color: red;
}
.v-btn :active {
  color: skyblue;
}
@media (max-width: 768px) {
  .nav-content {
    display: none;
  }
}
</style>
