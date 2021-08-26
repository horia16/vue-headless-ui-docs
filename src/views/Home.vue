<template>
  <div class="px-4">
    <div class="flex justify-center">
      <img src="@/assets/logo-text.png" alt="Headless UI logo" width="400" />
    </div>
    <div class="mb-4">
      <h1 class="font-bold text-2xl ">
        Getting started with Vue Headless UI
      </h1>
      <div class="text-lg">
        This library is still under active development and is not recommended for production.
      </div>
    </div>
    <div>
      This library only supports <external-link href="https://github.com/vuejs/vue-next/">Vue 3</external-link>.
    </div>

    <div class="my-8">
      <h1 class="font-bold text-2xl ">
        The Why
      </h1>
      <p>
        This library was created with the scope of providing an easy and quick way of creating custom styled components
        without the hassle of writing your own complex logic or worring about accessibility.
      </p>
      <p>
        This library is similar to and inspired by
        <external-link href="https://headlessui.dev/">Headless UI</external-link> but aims for a much bigger scope with
        a focus on form components.
      </p>
    </div>
    <div id="installation" class="my-8">
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
    <div>
      <h1 class="font-bold text-2xl ">
        Available components
      </h1>
      <div class="mt-4">
        <div class="bg-white bg-opacity-10     p-1 rounded-2xl">
          <div class="bg-black-900 p-6 rounded-xl flex gap-4 flex-wrap justify-center">
            <component-card
              class="bg-gradient-to-r from-yellow-400 via-yellow-500  to-yellow-600"
              icon="bi:input-cursor"
              component="HeadlessInput"
            >
              <div>
                Headless Input
              </div>
              <template #drawing>
                <div>
                  <div class="text-sm">
                    ********
                  </div>
                  <div class="bg-white h-9 w-40 rounded shadow-lg text-black-900 flex p-2">
                    *****
                  </div>
                </div>
              </template>
            </component-card>
            <component-card
              class="bg-gradient-to-r from-purple-400 via-purple-500  to-blue-500"
              icon="cil:pen"
              component="HeadlessForm"
            >
              <div>
                Headless Form
              </div>
              <template #drawing>
                <div class="flex flex-col gap-1">
                  <div class="bg-white h-1 w-40 rounded shadow-lg text-black-900 flex p-2"></div>
                  <div class="bg-white h-1 w-32 rounded shadow-lg text-black-900 flex p-2"></div>
                  <div class="bg-white h-1 w-36 rounded shadow-lg text-black-900 flex p-2"></div>
                  <div class="bg-blue-400 h-1 w-12 rounded shadow-lg text-black-900 flex p-2 text-xs" />
                </div>
              </template>
            </component-card>
            <component-card
              class="bg-gradient-to-r from-green-400 via-green-500  to-green-600"
              icon="carbon:row-expand"
              component="HeadlessAccordion"
            >
              <div>
                Headless Accordion
              </div>

              <template #drawing>
                <div class="flex flex-col gap-1">
                  <div class="bg-white w-40 rounded shadow-lg text-black-900 flex p-2 justify-end">
                    <div class="bg-blue-400 h-1 w-2 rounded shadow-lg text-black-900 flex p-2 text-xs" />
                  </div>
                  <div class="bg-white h-14 w-40 rounded shadow-lg text-black-900 flex p-2"></div>
                </div>
              </template>
            </component-card>
            <component-card
              class="bg-gradient-to-r from-red-600 via-red-500  to-red-400"
              icon="carbon:popup"
              component="HeadlessDialog"
            >
              <div>
                Headless Dialog
              </div>
              <template #drawing>
                <div class="flex flex-col gap-1 relative">
                  <div class="h-8"></div>

                  <div class="absolute bg-black-900 w-40 h-28 rounded bg-opacity-40"></div>
                  <div class="absolute w-40 h-28 flex justify-center items-center">
                    <div class="bg-white h-20 w-36  rounded shadow-lg text-black-900 flex p-2 justify-end">
                      <div class="bg-red-400 h-1 w-2 rounded shadow-lg text-black-900 flex p-2 text-xs relative"></div>
                    </div>
                  </div>
                </div>
              </template>
            </component-card>
            <component-card
              class="bg-gradient-to-r from-pink-400   to-yellow-500"
              icon="fluent:tab-desktop-copy-20-regular"
              component="HeadlessTabs"
            >
              <div>
                Headless Tabs
              </div>
              <template #drawing>
                <div>
                  <div class="bg-white shadow-lg w-40 h-24 rounded flex relative">
                    <div class="flex absolute -top-1 left-1">
                      <div
                        class="bg-purple-500 border-r rounded h-4  w-10  shadow-lg text-black-900 flex p-2 text-xs relative"
                      ></div>
                      <div
                        class="bg-indigo-500 border-r rounded h-4  w-10  shadow-lg text-black-900 flex p-2 text-xs relative"
                      ></div>
                      <div
                        class="bg-blue-500 h-4 rounded w-10  shadow-lg text-black-900 flex p-2 text-xs relative"
                      ></div>
                    </div>
                  </div>
                </div>
              </template>
            </component-card>
            <component-card
              class="bg-gradient-to-r from-blue-400   to-blue-600"
              icon="fluent:cursor-click-20-regular"
              component="HeadlessButton"
            >
              <div>
                Headless Button
              </div>
              <template #drawing>
                <div>
                  <div class="h-6" />
                  <div class="bg-indigo-800 shadow-lg w-36 h-12 rounded flex relative">
                    <div class="absolute -right-4 -bottom-6 ">
                      <headless-icon name="fluent:cursor-click-20-regular" :width="46" :height="46" iconify />
                    </div>
                  </div>
                </div>
              </template>
            </component-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CodeBlock from "@/components/user-interface/CodeBlock.vue";
import ComponentCard from "@/components/user-interface/ComponentCard.vue";
import ExternalLink from "@/components/user-interface/ExternalLink.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: { ExternalLink, CodeBlock, ComponentCard },
  setup() {
    return {};
  },
});
</script>
