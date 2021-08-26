<template>
  <nav class=" p-1 shadow-lg sticky top-0 backdrop-filter backdrop-blur-lg bg-black-900 bg-opacity-40 z-30">
    <div class="flex items-center">
      <div>
        <img src="@/assets/logo.png" alt="" srcset="" class="w-20 h-20" />
      </div>
      <div class="font-bold text-2xl text-white">Vue Headless UI</div>
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
