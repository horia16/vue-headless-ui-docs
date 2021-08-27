<template>
  <div class="flex ">
    <!-- Drawer -->
    <div class="w-72" style="min-width:18rem">
      <div class="fixed w-72 box-border">
        <div class="p-4 mt-8">
          <h1 class="font-bold text-xl">On this page</h1>
        </div>
      </div>
    </div>
    <!-- Main Content -->
    <div class="w-full">
      <div class="mt-8 p-4">
        <h1 class="font-bold text-4xl">
          {{ title }}
        </h1>
        <h2 class="mt-4 font-light text-lg text-gray-300">
          {{ description }}
        </h2>
        <div class=" rounded mt-8 transition-all" :class="tab == 0 ? gradient : 'bg-black-900'">
          <headless-tabs v-model="tab" #default="{currentTab}">
            <headless-tab-switches class="flex gap-2 px-4">
              <headless-tab-switch
                class=" p-3 rounded-md  focus:ring focus:ring-white mt-4 font-medium focus:outline-none transition-shadow "
                :class="{ 'ring ring-white  shadow-lg': currentTab == 0 }"
              >
                Preview
              </headless-tab-switch>
              <headless-tab-switch
                class=" p-3 rounded-md  focus:ring focus:ring-white mt-4 font-medium focus:outline-none transition-shadow "
                :class="{ 'ring ring-white  shadow-lg': currentTab == 1 }"
              >
                Code
              </headless-tab-switch>
            </headless-tab-switches>
            <headless-tab class="p-4">
              <slot />
            </headless-tab>
            <headless-tab class="p-4 overflow-auto max-w-full">
              <code-block>
                <slot name="code" />
              </code-block>
            </headless-tab>
          </headless-tabs>
        </div>
      </div>
      <div v-for="x in 100" :key="x" class="p-10">{{ x }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeBlock from "../user-interface/CodeBlock.vue";

export default defineComponent({
  components: { CodeBlock },
  props: {
    title: { type: String, default: "Component Title" },
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus praesentium necessitatibus, maiores quas magnam cum enim eligendi quasi, quibusdam fugiat nostrum? Illum rerum quas velit ea saepe, vero beatae quod.",
    },
    gradient: { type: String, default: "bg-gradient-to-r from-yellow-400 via-yellow-500  to-yellow-600" },
  },
  setup() {
    const tab = ref(0);
    return { tab };
  },
});
</script>
<style></style>
