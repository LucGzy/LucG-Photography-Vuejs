<template>
  <div class="image-grid">
    <div
      :class="['image', type]"
      v-for="(image, index) in images"
      :key="index"
      @click="openFullViewer(image)"
      v-add-lazy-loading
    >
      <img :src="image.url" alt="Image" />
      <p class="Title titlefont">{{ image.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
    type: String,
  },

  methods: {
    openFullViewer(image) {
      this.$emit("open-fullviewer", image);
    },
  },
  directives: {
    "add-lazy-loading": {
      inserted(el) {
        // Check if the parent div has a specific class
        if (
          el.classList.contains("portrait") ||
          el.classList.contains("pano")
        ) {
          // Add the loading="lazy" attribute to the child img element
          const img = el.querySelector("img");
          img.setAttribute("loading", "lazy");
        }
      },
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
  object-fit: cover;
  background-color: lightgray;
}
.pano {
  width: 98%;
}

.portrait {
  width: 23%;
  height: 550px;
}
@media screen and (max-width: 1300px) {
  .image {
    width: 40%;
  }
}
@media screen and (max-width: 800px) {
  .image {
    width: 80%;
  }
}
</style>
