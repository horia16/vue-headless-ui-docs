<template>
  <headless-accordion self>
    <accordion-header #default="{toggle, isOpen}" class="flex w-full">
      <button @click="toggle" class="bg-white w-full p-2 rounded bg-opacity-10 flex justify-between items-center">
        <h1 class="text-md">{{ title }}</h1>
        <headless-icon
          :name="isOpen ? 'akar-icons:circle-chevron-up-fill' : 'akar-icons:circle-chevron-down-fill'"
          iconify
        />
      </button>
    </accordion-header>
    <accordion-content class="">
      <div class="w-full p-2 rounded bg-opacity-10 flex flex-col mt-2">
        <slot />
      </div>
    </accordion-content>
  </headless-accordion>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: { type: Boolean, default: null },
    title: { type: String, default: null },
  },
  setup(props, context) {
    return {};
  },
});
</script>
