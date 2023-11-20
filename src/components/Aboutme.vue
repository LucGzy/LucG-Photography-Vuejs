<template>
  <div>
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: "Hello, Vue.js!",
    };
  },
  // You can add more component options here, like methods, computed properties, etc.
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
