<template>
  <div class="Navbar">
    <a class="Navbartext font">Luc Gouzy</a>
    <a
      href="https://www.instagram.com/lucg.photography/"
      target="_blank"
      class="Navbartext font"
      >Instagram</a
    >
    <select class="Navbartext font" id="dropdownnav">
      <option value="">Navigate Sections Here</option>
      <option value="#normal">Landscape</option>
      <option value="#pano">Panorama</option>
      <option value="#portrait">Portrait</option>
    </select>
    <a class="Navbartext font">Products</a>
    <a class="Navbartext font">About</a>
    <a class="Navbartext font">Contact</a>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "Navbar",

  setup() {
    onMounted(() => {
      const sectionDropdown = document.getElementById("dropdownnav");

      // Add an event listener to the dropdown
      sectionDropdown.addEventListener("change", function () {
        // Get the selected option's value
        const selectedValue = sectionDropdown.value;

        // Check if a section is selected
        if (selectedValue) {
          // Scroll to the selected section
          window.location.href = selectedValue;
        }
      });
    });

    // Other setup code if needed

    return {};
  },
};
</script>

<style scoped>
#dropdownnav {
}
</style>
