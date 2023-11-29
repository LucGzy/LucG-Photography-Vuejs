<template>
  <div class="image-grid">
    <div
      :class="['image', type]"
      v-for="(image, index) in images"
      :key="index"
      @click="openFullViewer(image)"
    >
      <img :src="image.url" alt="Image" />
      <p class="Title titlefont">{{ image.title }}</p>
    </div>
    <Fullscreenviewer
      v-if="isFullViewerOpen"
      :selectedImage="selectedImage"
      :type="type"
      @close="closeFullViewer"
    />
  </div>
</template>

<script>
import Fullscreenviewer from "./Fullscreenviewer.vue";
export default {
  props: {
    images: Array,
    type: String, // This prop will receive the array of image objects from your JSON file
  },
  components: {
    Fullscreenviewer, // Register the FullViewer component
  },
  data() {
    return {
      selectedImage: null,
      isFullViewerOpen: false,
    };
  },
  methods: {
    openFullViewer(image) {
      this.selectedImage = image;

      this.isFullViewerOpen = true;
    },
    closeFullViewer() {
      this.isFullViewerOpen = false;
    },
  },
};
</script>

<style scoped>
.titlefont {
  font-family: "Roboto Condensed", sans-serif;
}
.Title {
  width: 100%;
}
.image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid gray;
}
.image-grid {
  margin-top: 70px;
  padding: 4%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  background-color: lightgray;
  border-radius: 50px;
}

.image {
  width: 31%;
  height: 350px;
  margin: 10px;
  overflow: hidden;
  background-color: lightgray;
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.5s ease-in-out;
}
.image:hover {
  box-shadow: 0 0 10px 5px rgba(61, 61, 61, 0.7); /* Box shadow with a light grey color and larger spread for the glow effect */
  transform: scale(1.05);
  z-index: 3;
}

img {
  vertical-align: bottom;
  width: 100%;
  height: 100%;
  object-fit: fill;
  background-color: lightgray;
}
.pano {
  width: 98%;
}

.portrait {
  width: 23%;
  height: 550px;
}
</style>
