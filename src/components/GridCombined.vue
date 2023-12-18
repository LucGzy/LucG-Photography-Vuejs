<template>
  <div class="combined-grid">
    <div class="grid-container">
      <Photodisplay
        :images="grid1Images"
        type="normal"
        class="boxshadow hidden"
        id="normal"
        @open-fullviewer="handleOpenFullViewer"
      />
      <Photodisplay
        :images="grid2Images"
        type="pano"
        class="boxshadow hidden"
        id="pano"
        @open-fullviewer="handleOpenFullViewer"
      />
      <Photodisplay
        :images="grid3Images"
        type="portrait"
        class="boxshadow hidden"
        id="portrait"
        @open-fullviewer="handleOpenFullViewer"
      />
    </div>
  </div>
</template>

<script>
import Photodisplay from "./Photodisplay.vue";
import { onMounted } from "vue";
import axios from "axios"; // Import Axios

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

      if (hiddenElements) {
        hiddenElements.forEach((el) => observer.observe(el));
      }
    });
  },
  components: {
    Photodisplay,
  },
  data() {
    return {
      grid1Images: [], // Initialize separate data properties for each grid
      grid2Images: [],
      grid3Images: [],
    };
  },
  created() {
    this.loadGrid1Images();
    this.loadGrid2Images();
    this.loadGrid3Images();
  },
  methods: {
    handleOpenFullViewer(image) {
      this.$emit("open-fullviewer", image);
    },
    loadGrid1Images() {
      axios
        // for build use this :
        .get("./imggrid.json")
        // for dev use this :
        // .get("/imggrid.json")
        .then((response) => {
          this.grid1Images = response.data; // Update grid1Images
        })
        .catch((error) => {
          console.error("Error loading image data for grid 1:", error);
        });
    },
    loadGrid2Images() {
      axios
        // for build use this :
        .get("./imggridpano.json")
        // for dev use this :
        .get("/imggridpano.json")
        .then((response) => {
          this.grid2Images = response.data; // Update grid2Images
        })
        .catch((error) => {
          console.error("Error loading image data for grid 2:", error);
        });
    },
    loadGrid3Images() {
      axios
        // for build use this :
        .get("./imggridportrait.json")
        // for build use this :
        // .get("/imggridportrait.json")
        .then((response) => {
          this.grid3Images = response.data; // Update grid3Images
        })
        .catch((error) => {
          console.error("Error loading image data for grid 3:", error);
        });
    },
  },
};
</script>

<style scoped>
.boxshadow {
  box-shadow: 0px 10px 14px 1px rgba(125, 125, 125, 0.8);
}
</style>
