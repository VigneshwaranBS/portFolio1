<template>
  <main>
   
    <v-card class="mx-auto overflow-hidden" height="700">
      
      <v-app-bar color="black" dark class="elevation-1">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>VIGNESH</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn class="elevation-0 ml-1 white--text" text>Home</v-btn>
        <v-btn class="elevation-0 ml-1 white--text" text>About</v-btn>
        <v-btn class="elevation-0 ml-1 white--text" text>My work</v-btn>
        <v-btn class="elevation-0 ml-1 white--text" text>Recent project</v-btn>
        <v-btn class="elevation-0 ml-1 white--text" text>Contact</v-btn>
      </v-app-bar>

      <div class="sidenav">
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>info</v-icon>
                </v-list-item-icon>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>work</v-icon>
                </v-list-item-icon>
                <v-list-item-title>My Work</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>business</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Recent Project</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>contact_page</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Contact Me</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </div>
      
       <!-- <div class="bg">
      <img src="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=" alt="bg">
    </div> -->
    <v-parallax
    dark
    src="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk= " 
  >
       <div class="content">
          <h2 class="white--text">VIGNESHWARAN BS</h2>
          <h3 class="orange--text">I AM FULL STACK DEVELOPER.</h3>
          <div class="icon">
             <v-btn
      class="ma-2"
      outlined
      fab
      color="white"
    >
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
     <v-btn
      class="ma-2"
      outlined
      fab
      color="white"
    >
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
     <v-btn
      class="ma-2"
      outlined
      fab
      color="white"
    >
      <v-icon> mdi-twitter</v-icon>
    </v-btn>
     <v-btn
      class="ma-2"
      outlined
      fab
      color="white"
    >
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
    
          </div>
        </div>
    </v-parallax>
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
// main{
//   background-image: url("https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=");
// }
.content{
  display: flex;
  flex-direction: column;
  // align-items: center;
  text-align: center;
}
.bg img{
      height: 700px;
      width: 1600px;

}
</style>