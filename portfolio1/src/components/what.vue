<template>
  <main>
    <div class="heading">
      <h1>What I Do</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        commodi!
      </p>
    </div>
    <div class="card">
      
      <v-card
        class=" blue-grey lighten-5"
        elevation-0
        height="300"
        width="300"
      >
        <v-avatar color="warning">
          <v-icon dark> explore </v-icon>
        </v-avatar>
          <p>Branding</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, illo.</p>
      </v-card>
      <v-card
        class=" blue-grey lighten-5"
        elevation-0
        height="300"
        width="300"
      >
        <v-avatar color="warning">
          <v-icon dark> payment </v-icon>
        </v-avatar>
         <p>Web Devlopment</p>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, corporis!</p>
      </v-card>
      <v-card
        class=" blue-grey lighten-5"
        elevation-0
        height="300"
        width="300"
      >
        <v-avatar color="warning">
          <v-icon dark> star_rate </v-icon>
        </v-avatar>
         <p>Android App Devlopment</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolores?</p>
      </v-card>
    </div>
  </main>
</template>

<script>
export default {
  name: "what",
};
</script>

<style lang="scss" scoped>
main {
  background-color: #eceff1;
}
.heading {
  h1 {
    text-align: center;
    text-decoration: underline;
    text-decoration-color: red;
    padding-top: 20px;
  }
  p {
    text-align: center;
    padding-top: 20px;
  }
}
.card {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

</style>