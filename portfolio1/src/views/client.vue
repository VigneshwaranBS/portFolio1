<template>
  <main>
    <div class="heading mt-8">
      <h1>What Clients Say</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        commodi!
      </p>
    </div>
    <div class="card">
      <div class="card1">
        <v-card width="500" height="300" class="blue-grey lighten-5">
          <div class="left">
            <!-- <v-avatar size="70">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar> -->
            <v-icon  color="black" size="70">mdi-google</v-icon>
          </div>
          <div class="right">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              laudantium asperiores, numquam fuga quo dolore rem dignissimos
              voluptatibus illum quos?
            </p>
            <v-avatar size="70">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <p class="red--text">Sundar Pitchai</p>
            <p class="mt-n4">CEO of Google</p>
          </div>
        </v-card>
      </div>

      <div class="card2">
        <v-card width="500" height="300" class="blue-grey lighten-5">
          <div class="left">
            <!-- <v-avatar size="70">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar> -->
             <v-icon  color="black" size="70">mdi-facebook</v-icon>
          </div>
          <div class="right">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              laudantium asperiores, numquam fuga quo dolore rem dignissimos
              voluptatibus illum quos?
            </p>
            <v-avatar size="70">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <p class="red--text">Mark ZuckerBurg</p>
            <p class="mt-n4">CEO of Facebook</p>
          </div>
        </v-card>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style lang="scss" scoped>
main {
  background-color: #eceff1;
  padding: 35px;
  margin: 35px;
}
.heading {
  h1 {
    text-align: center;
    text-decoration: underline;
    text-decoration-color: red;
    text-underline-offset: 15px;
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
}
.v-card {
  display: flex;
  justify-content: space-around;

  .right {
    align-self: center;
    padding-left: 30px;
  }
  .left {
    align-self: center;
    padding-left: 10px;
  }
}

@media (max-width: 768px) {
  .card {
    display: flex;
    flex-direction: column;
  }
  .v-card {
    margin-top: 15px;
  }
   .right{
    padding-top: 15px;
  }
}
</style>