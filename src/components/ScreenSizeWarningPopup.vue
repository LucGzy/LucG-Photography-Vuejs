<template>
  <div>
    <div v-if="showPopup" class="screen-size-warning-popup">
      <img src="/warning-1-svgrepo-com.svg" alt="Warning" />
      <p>
        You are viewing this website on a small screen. The experience might not
        be optimal because of the images dimensions.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScreenSizeWarningPopup",

  data() {
    return {
      showPopup: true,
    };
  },
  mounted() {
    // Check screen width on component mount
    this.checkScreenWidth();

    // Add a listener for screen resize events
    window.addEventListener("resize", this.checkScreenWidth);
  },
  beforeDestroy() {
    // Remove the resize event listener when the component is destroyed
    window.removeEventListener("resize", this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      // Update showPopup based on screen width
      this.showPopup = window.innerWidth <= 800; // You can adjust this threshold as needed
    },
  },
};
</script>

<style>
.screen-size-warning-popup {
  display: inline-block;
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 90px;
  border-radius: 20px;
  left: 50%;
  height: 120px;
  transform: translateX(-50%);
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
  z-index: 10000;

  animation: popupdisappear 8s forwards;
}
img {
  width: 30px;
}
@keyframes popupdisappear {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
