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
      <v-card width="500" height="250" class="blue-grey lighten-5" elevation-0>
        <div class="card1">
          <div class="left">
            <v-avatar size="60">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </div>
          <div class="vertical"></div>
          <div class="right">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              fugiat quibusdam culpa tempore rem recusandae!
            </p>
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <p class="red--text">Sundar Pitchai</p>
            <p>CEO of Google</p>
          </div>
        </div>
      </v-card>
      <v-card width="500" height="250" class="blue-grey lighten-5" elevation-0>
        <div class="card1">
          <div class="left">
            <v-avatar size="60">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </div>
          <div class="vertical"></div>
          <div class="right">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              fugiat quibusdam culpa tempore rem recusandae!
            </p>
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <p class="red--text">Sundar Pitchai</p>
            <p>CEO of Google</p>
          </div>
        </div>
      </v-card>
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
.card1 {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.left {
  padding-left: 10px;
}

.right {
  display: flex;
  flex-direction: column;
  padding-left: 80px;
  margin-top: 20px;
}
.vertical {
  border-left: 2px solid red;
  height: 200px;
  left: 50%;
}

@media   (max-width: 768px) {
  .card{
    display: flex;
    flex-direction: column;
  }
  .v-card{
    margin-top: 15px;
  }
} 
</style>