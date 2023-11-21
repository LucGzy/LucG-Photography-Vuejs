<template>
  <div class="Navbar">
    <router-link to="/" class="navelement Navbartext font">Home</router-link>
    <a
      href="https://www.instagram.com/lucg.photography/"
      target="_blank"
      class="navelement Navbartext font"
      >Instagram</a
    >
    <select class="navelement Navbartext font" id="dropdownnav">
      <option value="" disabled selected>Navigate Sections Here</option>
      <option value="#normal">Landscape</option>
      <option value="#pano">Panorama</option>
      <option value="#portrait">Portrait</option>
    </select>
    <router-link to="/products" class="navelement Navbartext font"
      >Products</router-link
    >
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

      if (sectionDropdown) {
        sectionDropdown.addEventListener("change", function () {
          // Get the selected option's value
          const selectedValue = sectionDropdown.value;

          // Check if a section is selected
          if (selectedValue) {
            // Scroll to the selected section
            window.location.href = selectedValue;
          }
        });
      }
    });

    const nightmode = () => {
      isNightMode.value = !isNightMode.value;
      lightnightvalue.value = isNightMode.value ? "Light Mode" : "Night Mode";

      const imagegrid = document.getElementsByClassName("image-grid");
      const nightmodebutton = document.getElementsByClassName("nightmode");
      const imagecontainer = document.getElementsByClassName("image");
      const navelement = document.getElementsByClassName("navelement");
      const footer = document.getElementsByClassName("footer-container");

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
      for (const element of footer) {
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
  border-top: none;
  border-left: none;
  height: 52px;
}
.Navbar {
  z-index: 10000;
}
#dropdownnav {
  border-top: none;
  border-left: none;
  height: 52px;
}
</style>
