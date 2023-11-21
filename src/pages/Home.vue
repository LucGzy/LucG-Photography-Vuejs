<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import ProductDisplay from "../components/Productdisplay.vue";
import Aboutme from "../components/Aboutme.vue";

import axios from "axios";
import GridCombined from "../components/GridCombined.vue";

export default {
  components: {
    Navbar,
    Footer,
    ProductDisplay,
    Aboutme,
    GridCombined,
  },
};
</script>

<template>
  <Navbar />
  <div class="innerbody">
    <section class="Photos">
      <GridCombined />
    </section>

    <Footer />
  </div>
</template>

<style scoped>
/* Add component-specific styles here */
</style>
