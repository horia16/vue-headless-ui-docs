<template>
  <div class="text-white">
    <nav-bar />
    <div class="flex h-full  mx-auto ">
      <div class="flex max-w-xs w-full">
        <drawer />
      </div>
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
import Drawer from "./components/layout/Drawer.vue";
import NavBar from "./components/layout/NavBar.vue";

export default defineComponent({
  components: { NavBar, AppFooter, Drawer },

  setup() {
    return {};
  },
});
</script>

<style></style>
