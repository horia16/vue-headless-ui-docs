<template>
  <div class="flex justify-center">
    <div class="flex-grow w-40">
      <ssh-pre :language="type" dark class="mb-4 overflow-auto font-mono">
        <slot />
      </ssh-pre>
    </div>
  </div>
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
<style>
.ssh-pre__content {
  white-space: pre !important;
  word-break: keep-all !important;
}
.ssh-pre__content span {
  @apply font-mono;
}
.ssh-pre {
  max-width: inherit !important;
}
</style>
