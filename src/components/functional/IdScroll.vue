<template>
  <div class="relative">
    <div class="absolute" :id="id" :style="{ top }"></div>
  </div>
</template>
<script>
export default {
  props: {
    id: { type: String, default: null },
    top: { type: String, default: "-8rem" },
  },
  setup() {
    return {};
  },
};
</script>
