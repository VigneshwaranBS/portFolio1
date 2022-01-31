<template>
  <v-app>
   <home/>
   <about/>
   <what/>
   <recentProject/>
   <contact/>
  </v-app>
</template>

<script>
import about from './components/about.vue';
import contact from './components/contact.vue';
import home from './components/home';
import recentProject from './components/recentProject.vue';
import what from './components/what';


export default {
  name: 'App',

  components: {
    home,
    about,
    what,
    recentProject,
    contact,
  },

 
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,500&display=swap');
*{
  font-family: 'Poppins', sans-serif;
}
</style>
