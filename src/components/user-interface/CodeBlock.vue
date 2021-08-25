<template>
  <ssh-pre :language="type" dark class="mb-4">
    <slot />
  </ssh-pre>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SshPre from "simple-syntax-highlighter";
export default defineComponent({
  components: {
    SshPre,
  },
  props: {
    type: { type: String, default: "js" },
  },
  setup() {
    return {};
  },
});
</script>
