<template>
  <div v-if="component">
    <component :is="`${component}Page`" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    component: { type: String, default: null },
  },
  setup() {
    return {};
  },
});
</script>
