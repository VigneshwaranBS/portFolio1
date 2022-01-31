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
      <div class="left">
        <img
          src="https://media.istockphoto.com/photos/male-programmer-working-on-new-project-picture-id1274948583?b=1&k=20&m=1274948583&s=170667a&w=0&h=TYb8QHIT9JT1hHmIh9oB5ClUuxenJ51b8OlSbHcXvqA="
          alt=""
        />
      </div>
      <div class="right">
        <h2>Full Stack Devloper</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, esse
          voluptatum? Quo numquam incidunt aut, voluptates doloribus expedita
          eum, error nostrum consequatur molestias, temporibus facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          error eum atque soluta veritatis dolores rem qui quidem dolor nulla.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facere
          suscipit in ducimus quos dignissimos minus soluta ipsum rem expedita,
          ipsa totam eos, veritatis et.
        </p>
        <v-btn class="ma-2 rounded-pill  " outlined color="red black--text"> Read More </v-btn>


  
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
.heading {
  h1,
  p {
    text-align: center;
    text-decoration: underline;
    text-decoration-color: red;
  }
}
.container {
  display: flex;
  justify-content: space-around;
}
</style>