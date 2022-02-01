<template>
  <main>
    <div class="heading">
      <h1>Recent Project</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        commodi!
      </p>
      <v-tabs>
        <v-tab>All</v-tab>
        <v-tab>Web</v-tab>
        <v-tab>Software</v-tab>
        <v-tab>Graphics</v-tab>
        <v-tab>App</v-tab>
      </v-tabs>
    </div>
    <div class="grid mt-10 pl-12 pr-12">
      <v-row>
        <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            height="300"
            width="300"
            :src="`https://picsum.photos/400/400?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            class="grey lighten-2"
          >
          </v-img>
        </v-col>
      </v-row>
    </div>
    
  </main>
</template>

<script>
export default {
  name: "recentProject",
};
</script>

<style lang="scss" scoped>
.heading {
  h1 {
    text-align: center;
    text-decoration: underline;
    text-decoration-color: red;
       text-underline-offset:15px;
    padding-top: 20px;
  }
  p {
    text-align: center;
    padding-top: 20px;
  }
  .v-tabs {
    display: flex;
    justify-content: center;
  }
}
</style>