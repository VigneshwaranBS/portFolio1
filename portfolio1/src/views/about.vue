<template>
  <main>
    <div class="heading">
      <h1>About Myself</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        commodi!
      </p>
    </div>
    <div class="container">
      <div class="left pl-8">
        <img
          src="https://media.istockphoto.com/photos/male-programmer-working-on-new-project-picture-id1274948583?b=1&k=20&m=1274948583&s=170667a&w=0&h=TYb8QHIT9JT1hHmIh9oB5ClUuxenJ51b8OlSbHcXvqA="
          alt=""
        />
      </div>
      <div class="right">
        <v-card class="pl-8 pt-5">
          <h2>Full Stack Devloper</h2>
          <p class="text--secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, esse
            voluptatum? Quo numquam incidunt aut, voluptates doloribus expedita
            eum, error nostrum consequatur molestias, temporibus facilis.
          </p>
          <p class="text--secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            error eum atque soluta veritatis dolores rem qui quidem dolor nulla.
          </p>
          <p class="text--secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facere
            suscipit in ducimus quos dignissimos minus soluta ipsum rem expedita,
            ipsa totam eos, veritatis et.
          </p>
          <v-btn class="ma-2 rounded-pill  " outlined color="red black--text"> Read More </v-btn>
        </v-card>

  
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,500&display=swap');
*{
  font-family: 'Poppins', sans-serif;
}
.heading {
  h1
   {
    text-align: center;
    text-decoration: underline;
    text-decoration-color: red;
      text-underline-offset:15px;
    padding-top: 20px;
  }
  p{
      text-align: center;
      padding-top: 20px;
  }
}
.container {
  display: flex;
  justify-content: space-around;
  .right{
    padding-left: 50px;
    h2{
      padding-bottom: 15px;
    }
  }
}
@media   (max-width: 768px) {
  .container{
    display: flex;
    flex-direction: column;
  }
  .v-card{
      margin-top: 15px;
  }
} 
</style>