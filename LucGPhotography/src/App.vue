<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import PhotoDisplay from "./components/Photodisplay.vue";
import ProductDisplay from "./components/Productdisplay.vue";
import Aboutme from "./components/Aboutme.vue";

import axios from "axios";

export default {
  components: {
    Navbar,
    Footer,
    PhotoDisplay,
    ProductDisplay,
    Aboutme,
  },
  data() {
    return {
      imageData: [],
    };
  },
  created() {
    this.loadImageData();
  },
  methods: {
    loadImageData() {
      axios
        .get("/src/imggrid.json")
        .then((response) => {
          console.log(response.data);
          this.imageData = response.data;
        })
        .catch((error) => {
          console.error("Error loading image data:", error);
        });
    },
  },
};
</script>

<template>
  <Navbar />
  <div class="innerbody">
    <section class="Photos">
      <PhotoDisplay :images="imageData" />
    </section>

    <section class="Products">
      <ProductDisplay />
    </section>

    <section class="aboutme">
      <Aboutme />
    </section>
    <Footer />
  </div>
</template>

<style scoped>
/* Add component-specific styles here */
</style>
