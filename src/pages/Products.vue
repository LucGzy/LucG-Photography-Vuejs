<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import ProductDisplay from "../components/Productdisplay.vue";
import Aboutme from "../components/Aboutme.vue";

import axios from "axios";

export default {
  components: {
    Navbar,
    Footer,
    ProductDisplay,
  },
};
</script>

<template>
  <Navbar />
  <div class="innerbody">
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
