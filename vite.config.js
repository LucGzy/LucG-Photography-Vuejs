import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // for dev use this :
  //base: "/LucG-Photography-Vuejs/",
  // for build use this :
  base: "./",
  plugins: [vue()],
});
