<template>
  <a class="font-bold underline text-blue-500" target="_blank">
    <slot />
  </a>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
