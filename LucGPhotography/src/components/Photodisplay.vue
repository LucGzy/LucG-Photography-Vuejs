<template>
  <div class="image-grid">
    <div class="image" v-for="(image, index) in images" :key="index">
      <img :src="image.url" alt="Image" />
      <p class="Title">{{ image.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array, // This prop will receive the array of image objects from your JSON file
  },
};
</script>

<style scoped>
.Title {
  width: 100%;
}
.image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  object-fit: cover;
  background-color: lightgray;
}
</style>
