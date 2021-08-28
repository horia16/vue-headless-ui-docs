<template>
  <page-structure
    title="Headless Input"
    description="A rudimentary and accessible input complete with form validation, labels and error messages."
    :structure="structure"
  >
    <div class="flex justify-center">
      <div class="bg-white p-8 rounded-lg shadow-xl">
        <headless-input v-model="model" :rules="required" class="flex flex-col">
          <input-label text="Example input" class="text-black pb-2" />
          <input-field
            class="max-w-sm p-3 text-black-900 shadow-lg rounded-lg transition-shadow focus:outline-none focus:ring focus:ring-blue-400 border border-gray-400"
            placeholder="Type something"
          />
          <input-error class="text-red-500 mt-2" />
        </headless-input>
      </div>
    </div>
    <template #code>
      <pre>{{`<template>
    <headless-input v-model="model" :rules="required" class="flex flex-col">
        <input-label text="Example input" class="text-black pb-2" />
        <input-field 
          placeholder="Type something" 
          class="max-w-sm p-3 text-black-900 shadow-lg rounded-lg transition-shadow
          focus:outline-none focus:ring focus:ring-blue-400 border border-gray-400"
        />
        <input-error class="text-red-500 mt-2" />
    </headless-input>
</template>

<script lang="ts">
import { HeadlessInput, InputLabel, InputError, InputField } from "vue-headless-ui";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { HeadlessInput, InputLabel, InputError, InputField },
  setup() {
    const model = ref("");
    function required(v: string) {
      if (v) return true;
      return "This field is required.";
    }
    return { model, required };
  },
});
</script>`}}</pre>
    </template>
  </page-structure>
</template>
<script lang="ts">
import PageStructure from "@/components/layout/PageStructure.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { PageStructure },
  setup() {
    const model = ref("");
    function required(v: string) {
      if (v) return true;
      return "This field is required.";
    }

    const structure = [
      {
        title: "Component Preview",
        id: "componentPreview",
        children: [],
      },
      {
        title: "Component Structure",
        id: "componentStructure",
        children: [
          {
            title: "Test Child",
            id: "testChild",
          },
        ],
      },
    ];
    return { model, required, structure };
  },
});
</script>
