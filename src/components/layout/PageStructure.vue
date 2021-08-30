<template>
  <div class="flex ">
    <!-- Drawer -->
    <div
      class="w-72 fixed top-0 z-40 md:z-auto h-screen md:h-auto md:relative bg-black-900 transform md:transform-none transition-transform"
      :class="{ '-translate-x-full': !isDrawerOpen }"
      style="min-width:18rem"
    >
      <div class="fixed w-72 box-border bg-black-900">
        <div class="p-4 mt-8">
          <accordion title="Components" openByDefault class="mb-8">
            <ul>
              <li v-for="(component, index) in components" :key="index" class="my-4">
                <router-link
                  :to="`/components/${component.name}`"
                  class="flex items-center gap-2 ring ring-white ring-opacity-10 rounded p-1"
                >
                  <headless-icon :name="component.icon" iconify />
                  <div>{{ component.name }}</div>
                </router-link>
              </li>
            </ul>
          </accordion>

          <accordion title="On the page" openByDefault class="mb-8">
            <ul>
              <li v-for="(element, index) in structure" :key="index" class="">
                <a :href="`#${element.id}`" class="flex flex-col my-2 font-light" @click="isDrawerOpen = false">
                  <div>{{ index + 1 }}. {{ element.title }}</div>
                </a>
                <ul class="ml-4 mt-1">
                  <li v-for="(child, index2) in element.children" :key="index2" class="">
                    <a :href="`#${child.id}`" class="font-thin" @click="isDrawerOpen = false"
                      >{{ index + 1 }}.{{ index2 + 1 }}. {{ child.title }}</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </accordion>
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
        <id-scroll id="componentPreview" top="-6rem" />
        <div
          class=" rounded mt-8 transition-all ring-4 ring-white ring-opacity-30"
          :class="tab == 0 ? gradient : 'bg-black-900'"
        >
          <headless-tabs v-model="tab" #default="{currentTab}">
            <headless-tab-switches class="flex gap-2 px-4 mb-4">
              <headless-tab-switch
                class=" p-3 rounded-md  focus:ring focus:ring-white focus:ring-opacity-30 mt-4 font-medium focus:outline-none transition-shadow "
                :class="{ 'bg-white text-black-900  shadow-lg': currentTab == 0 }"
              >
                Preview
              </headless-tab-switch>
              <headless-tab-switch
                class=" p-3 rounded-md  focus:ring focus:ring-white focus:ring-opacity-30 mt-4 font-medium focus:outline-none transition-shadow "
                :class="{ 'bg-white text-black-900  shadow-lg': currentTab == 1 }"
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
      <div class="p-4">
        <slot name="docs" />
      </div>
      <div v-for="x in 100" :key="x" class="p-10">{{ x }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { isDrawerOpen } from "@/hooks/drawer";
import { defineComponent, PropType, ref } from "vue";
import IdScroll from "../functional/IdScroll.vue";
import Accordion from "../user-interface/Accordion.vue";
import CodeBlock from "../user-interface/CodeBlock.vue";

export default defineComponent({
  components: { CodeBlock, Accordion, IdScroll },
  props: {
    title: { type: String, default: "Component Title" },
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus praesentium necessitatibus, maiores quas magnam cum enim eligendi quasi, quibusdam fugiat nostrum? Illum rerum quas velit ea saepe, vero beatae quod.",
    },
    gradient: { type: String, default: "bg-gradient-to-r from-yellow-400 via-yellow-500  to-yellow-600" },
    structure: {
      type: Array as PropType<Array<{ title: string; id: string; children: Array<{ title: string; id: string }> }>>,
      default: null,
    },
  },
  setup() {
    const tab = ref(0);
    const components = [
      { name: "HeadlessInput", icon: "bi:input-cursor" },
      { name: "HeadlessForm", icon: "teenyicons:attachment-outline" },
      { name: "HeadlessAccordion", icon: "carbon:row-expand" },
      { name: "HeadlessDialog", icon: "carbon:popup" },
      { name: "HeadlessTabs", icon: "fluent:table-insert-row-24-regular" },
      { name: "HeadlessButton", icon: "dashicons:button" },
    ];

    return { tab, components, isDrawerOpen };
  },
});
</script>
<style></style>
