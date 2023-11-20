<template>
  <div class="image-viewer" @click="closeViewer">
    <img :src="selectedImage.url" :class="type" alt="Full-Screen Image" />
    <button class="close-button" @click="closeViewer">Close</button>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  onMounted() {
    console.log("fullviewer");
  },
  props: {
    selectedImage: Object, // The selected image object to display
    type: String,
  },
  methods: {
    closeViewer() {
      this.$emit("close"); // Emit an event to close the viewer
    },
  },
};
</script>

<style scoped>
.image-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

img {
  max-width: 90%;
  max-height: 85%;
}
.portrait {
  max-height: 80%;
}
.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}
</style>
