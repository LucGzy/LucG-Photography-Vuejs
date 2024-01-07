<template>
  <div class="product-container">
    <h1 class="font">Products</h1>
    <div class="product-example">
      <h2 class="font">30x20</h2>

      <img class="product-example-image" src="/img/The Eye.webp" />
    </div>
    <div class="product-example">
      <h2 class="font">30x20</h2>

      <img class="product-example-image" src="/img/The Eye.webp" />
    </div>
    <div class="product-example">
      <h2 class="font">30x20</h2>

      <img class="product-example-image" src="/img/The Eye.webp" />
    </div>
    <div class="product-example">
      <h2 class="font">30x20</h2>

      <img class="product-example-image" src="/img/The Eye.webp" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.product-container {
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  padding: 1%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  background-color: lightgray;
  border-radius: 50px;
}
.product-container h1 {
  font-weight: 1000;
  font-size: 40px;
  text-shadow: 3px 2px 4px #000000;
}
.product-example {
  background-color: rgb(54, 51, 51);
  border: 1px solid darkgrey;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 20px;
}
.product-example h2 {
  text-decoration: underline;
}
.product-example-image {
  width: 100%;
  height: 80%;
  border-radius: 20px;
}
</style>
