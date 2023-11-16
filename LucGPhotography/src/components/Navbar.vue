<template>
  <div class="Navbar">
    <a class="navelement Navbartext font">Luc Gouzy</a>
    <a
      href="https://www.instagram.com/lucg.photography/"
      target="_blank"
      class="navelement Navbartext font"
      >Instagram</a
    >
    <select class="navelement Navbartext font" id="dropdownnav">
      <option value="">Navigate Sections Here</option>
      <option value="#normal">Landscape</option>
      <option value="#pano">Panorama</option>
      <option value="#portrait">Portrait</option>
    </select>
    <a class="navelement Navbartext font">Products</a>
    <a class="navelement Navbartext font">About</a>
    <a class="navelement Navbartext font">Contact</a>
    <button class="Navbartext font nightmode" @click="nightmode">
      {{ lightnightvalue }}
    </button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "Navbar",
  setup() {
    const isNightMode = ref(false);
    const lightnightvalue = ref("Night Mode");

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

    const nightmode = () => {
      isNightMode.value = !isNightMode.value;
      lightnightvalue.value = isNightMode.value ? "Light Mode" : "Night Mode";

      const imagegrid = document.getElementsByClassName("image-grid");
      const nightmodebutton = document.getElementsByClassName("nightmode");
      const imagecontainer = document.getElementsByClassName("image");
      const navelement = document.getElementsByClassName("navelement");

      for (const element of imagegrid) {
        element.style.backgroundColor = isNightMode.value
          ? "#1f1d1d"
          : "lightgray";
      }

      for (const element of imagecontainer) {
        element.style.borderColor = isNightMode.value ? "#1f1d1d" : "gray";
      }

      for (const element of nightmodebutton) {
        element.style.backgroundColor = isNightMode.value
          ? "lightgray"
          : "#1f1d1d";
        element.style.color = isNightMode.value ? "black" : "white";
      }
      for (const element of navelement) {
        element.style.backgroundColor = isNightMode.value
          ? "#1f1d1d"
          : "lightgray";
        element.style.color = isNightMode.value ? "white" : "black";
      }

      document.body.style.backgroundColor = isNightMode.value
        ? "#181717"
        : "darkgray";
    };

    return {
      isNightMode,
      lightnightvalue,
      nightmode,
    };
  },
};
</script>

<style scoped>
.nightmode {
  background-color: #1f1d1d;
  color: white;
}
.Navbar {
  z-index: 10000;
}
#dropdownnav {
  /* Add your dropdown styles here if needed */
}
</style>
