<template>
  <main>
    <v-card class="mx-auto overflow-hidden" height="700">
      <!-- <v-app-bar color="black" dark class="elevation-1">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title> <v-btn href="/" text> <span class="red--text font-weight-black text-h3">V</span > IGNESH </v-btn></v-toolbar-title>
        <v-spacer></v-spacer>

        <div class="nav-content">
          <v-btn class="elevation-0 ml-1 white--text" text >Home</v-btn>
          <v-btn class="elevation-0 ml-1 white--text" text href="/about">About</v-btn>
          <v-btn class="elevation-0 ml-1 white--text" text href="/what">My work</v-btn>
          <v-btn class="elevation-0 ml-1 white--text" text href="/recentProject">Recent project</v-btn>
          <v-btn class="elevation-0 ml-1 white--text" text href="/contact">Contact</v-btn>
          
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
              <v-list-item class="mt-5">
                <v-list-item-icon>
                  <v-icon class="white--text">home</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text">Home</v-list-item-title>
              </v-list-item>
              <v-list-item class="mt-5"  href="/about">
                <v-list-item-icon  > 
                  <v-icon class="white--text">info</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text">About</v-list-item-title>
              </v-list-item>
              <v-list-item class="mt-5"  href="/what"> 
                <v-list-item-icon>
                  <v-icon class="white--text">work</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text"
                  >My Work</v-list-item-title
                >
              </v-list-item>
              <v-list-item class="mt-5"  href="/recentProject">
                <v-list-item-icon>
                  <v-icon class="white--text">business</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="white--text"
                  >Recent Project</v-list-item-title
                >
              </v-list-item>
              <v-list-item class="mt-5"  href="/contact">
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
      </div> -->

      <div class="content">
        <h2 class="white--text">VIGNESHWARAN BS</h2>
        <h3 class="orange--text">I AM FULL STACK DEVELOPER.</h3>
        <div class="icon">
          <v-btn class="ma-2" outlined fab color="white">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="ma-2" outlined fab color="white">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn class="ma-2" outlined fab color="white">
            <v-icon> mdi-twitter</v-icon>
          </v-btn>
          <v-btn class="ma-2" outlined fab color="white">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>
  </main>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style lang="scss" scoped>
.v-card {
  background-image: url("data:image/jpeg;base64,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");
  background-attachment: fixed;
  background-size: 100% 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 180px;
}

h3,
h2 {
  padding: 10px;
}

</style>