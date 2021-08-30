<template>
  <page-structure
    title="Headless Input"
    description="A rudimentary and accessible input complete with form validation, labels and error messages."
    :structure="structure"
  >
    <div class="flex justify-center">
      <div class="bg-white p-4 rounded-lg shadow-xl">
        <headless-input v-model="model" :rules="required" class="flex flex-col">
          <input-label text="Example input" class="text-black pb-2" />
          <input-field
            class="w-40 sm:w-44 md:w-auto p-2 text-black-900 shadow-lg rounded-lg transition-shadow focus:outline-none focus:ring focus:ring-blue-400 border border-gray-400"
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
    <template #docs>
      <div>
        <id-scroll id="componentStructure" />
        <h2 class="text-xl border-b mb-4">
          Component structure
        </h2>
        <p>
          The HeadlessInput is built from a set of multiple components
          <span class="mx-1 outline-white">HeadlessInput</span>, <span class="mx-1 outline-white">InputLabel</span>,
          <span class="mx-1 outline-white">InputError</span> and <span class="mx-1 outline-white">InputField</span>.
        </p>
        <p>
          The example above shows a basic input of type text but inputs can be created with diffrent fields.
        </p>
        <p>
          A full list of "Fields" can be found below:
        </p>
        <ul class="list-disc ml-8">
          <li>
            InputField
          </li>
          <li>
            RadioField
          </li>
          <li>
            SelectField
          </li>
          <li>
            TextareaField
          </li>
          <li>
            CheckboxField
          </li>
        </ul>
      </div>
    </template>
  </page-structure>
</template>
<script lang="ts">
import IdScroll from "@/components/functional/IdScroll.vue";
import PageStructure from "@/components/layout/PageStructure.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { PageStructure, IdScroll },
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
