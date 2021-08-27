<template>
  <nav class=" sticky top-0   backdrop-filter  backdrop-blur-lg bg-black-900 bg-opacity-40  z-30">
    <div class="px-4 p-6  flex items-center max-w-7xl mx-auto border-b border-gray-600">
      <div>
        <img src="@/assets/logo.svg" alt="" srcset="" class="w-10 h-10" />
      </div>
      <div class="font-bold text-2xl text-white ml-4">Vue Headless UI</div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
