<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import ProductDisplay from "../components/Productdisplay.vue";
import Aboutme from "../components/Aboutme.vue";

import GridCombined from "../components/GridCombined.vue";
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      });

      const hiddenElements = document.querySelectorAll(".hidden");
      console.log(hiddenElements);
      if (hiddenElements) {
        hiddenElements.forEach((el) => observer.observe(el));
      }
    });
  },
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
  <nav>
    <Navbar class="hidden" />
  </nav>

  <div class="innerbody">
    <main>
      <section class="Photos hidden">
        <GridCombined />
      </section>
    </main>
    <footer>
      <Footer class="hidden" />
    </footer>
  </div>
</template>

<style scoped>
/* Add component-specific styles here */
</style>
