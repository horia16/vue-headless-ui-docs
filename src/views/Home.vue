<template>
  <div class="px-4">
    <div class="flex justify-center">
      <img src="@/assets/logo-text.png" alt="Headless UI logo" width="400" />
    </div>
    <div class="mb-4">
      <h1 class="font-bold text-2xl ">
        Getting started with Vue Headless UI
      </h1>
      <h2 class="text-lg">
        This library is still under active development and is not recommended for production.
      </h2>
    </div>
    <div>
      This library only supports <external-link href="https://github.com/vuejs/vue-next/">Vue 3</external-link>.
    </div>
    <div id="installation" class="mt-8">
      <h1 class="font-bold text-2xl ">
        Installation
      </h1>
      <code-block type="shell">
        <pre>npm install vue-headless-ui</pre>
      </code-block>
      <p>
        Or install it with yarn
      </p>
      <code-block type="shell">
        <pre>yarn add vue-headless-ui</pre>
      </code-block>
    </div>
  </div>
</template>

<script lang="ts">
import CodeBlock from "@/components/user-interface/CodeBlock.vue";
import ExternalLink from "@/components/user-interface/ExternalLink.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { ExternalLink, CodeBlock },
  setup() {
    return {};
  },
});
</script>
