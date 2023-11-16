<template>
  <div class="footer-container">
    <div class="footer-box">
      <font-awesome-icon class="iconfooter" :icon="['fas', 'at']" />
      <p class="font">lucgphotography@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-container {
  margin-top: 70px;
  padding: 4%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  background-color: lightgray;
  border-radius: 50px;
}
.footer-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.iconfooter {
  margin-right: 5px;
}
</style>
