<template>
  <main>
    <div class="heading mt-8">
      <h1>Contact Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        commodi!
      </p>
    </div>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              v-model="name"
              label="Full Name"
              placeholder="John Doe"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="Your Email"
              placeholder="Your Email"
              required
            ></v-text-field>
            <v-text-field
              v-model="topic"
              label="Your Topic"
              required
              placeholder="Your Topic"
            ></v-text-field>
            <v-textarea
              required
              v-model="message"
              label="Your Message"
              placeholder="Your Message"
              counter
            ></v-textarea>
          </v-card-text>
          <v-btn block outline  color="indigo" class="white--text "> Save Message </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </main>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style lang="scss" scoped>
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
</style>