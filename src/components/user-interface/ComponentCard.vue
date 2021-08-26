<template>
  <router-link
    :to="`/components/${component}`"
    class="shadow-lg p-8 text-xl rounded-2xl w-full max-w-sm flex flex-col justify-center items-center transition-transform gap-2 transform hover:-translate-y-1 select-none"
  >
    <div class="flex items-center gap-2 font-light"><slot /></div>
    <div aria-hidden="true" class="w-40 h-28">
      <slot name="drawing" />
    </div>
  </router-link>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    icon: { type: String, default: "" },
    component: { type: String, default: "" },
  },
  setup() {
    return {};
  },
});
</script>
