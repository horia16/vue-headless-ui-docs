<template>
  <nav class=" sticky top-0   backdrop-filter  backdrop-blur-lg bg-black-900 bg-opacity-40  z-30">
    <div class="px-4 p-6  flex items-center max-w-7xl mx-auto border-b border-gray-600 justify-between">
      <div class="flex items-center">
        <img src="@/assets/logo.svg" alt="" srcset="" class="w-10 h-10" />
        <div class="font-bold text-xl md:text-2xl text-white ml-4 ">Vue Headless UI</div>
      </div>
      <div class="md:hidden">
        <headless-button
          class="p-2 bg-indigo-800 flex justify-center items-center rounded-full focus:ring focus:ring-indigo-600 focus:ring-opacity-40"
          @click="isDrawerOpen = !isDrawerOpen"
        >
          <headless-icon name="entypo:menu" iconify />
        </headless-button>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { isDrawerOpen } from "@/hooks/drawer";
export default defineComponent({
  setup() {
    return { isDrawerOpen };
  },
});
</script>
