<template>
  <div class="combined-grid">
    <div class="grid-container">
      <Photodisplay
        :images="grid1Images"
        type="normal"
        class="boxshadow"
        id="normal"
      />
      <Photodisplay
        :images="grid2Images"
        type="pano"
        class="boxshadow"
        id="pano"
      />
      <Photodisplay
        :images="grid3Images"
        type="portrait"
        class="boxshadow"
        id="portrait"
      />
    </div>
  </div>
</template>

<script>
import Photodisplay from "./Photodisplay.vue";
import axios from "axios"; // Import Axios

export default {
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
    loadGrid1Images() {
      axios
        .get("/src/imggrid.json")
        .then((response) => {
          console.log(response.data);
          this.grid1Images = response.data; // Update grid1Images
        })
        .catch((error) => {
          console.error("Error loading image data for grid 1:", error);
        });
    },
    loadGrid2Images() {
      axios
        .get("/src/imggridpano.json")
        .then((response) => {
          console.log(response.data);
          this.grid2Images = response.data; // Update grid2Images
        })
        .catch((error) => {
          console.error("Error loading image data for grid 2:", error);
        });
    },
    loadGrid3Images() {
      axios
        .get("/src/imggridportrait.json")
        .then((response) => {
          console.log(response.data);
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
