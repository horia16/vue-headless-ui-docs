<template>
  <div class="text-white font-poppins">
    <nav-bar />
    <div class="flex h-full  mx-auto max-w-7xl">
      <div class="flex flex-col   flex-grow">
        <router-view />
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "./components/layout/AppFooter.vue";

import NavBar from "./components/layout/NavBar.vue";

export default defineComponent({
  components: { NavBar, AppFooter },

  setup() {
    return {};
  },
});
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}
</style>
