<template>
  <lazy-parts-modal
    v-model="show"
    open-text="Редагувати"
    @open="show = true"
    @close="show = false"
  >
    <template #title>Додати смартфон</template>
    <div>
      <Form id="user" @submit="submit">
        <div
          v-for="(item, i) in inputItems"
          :key="i"
          :class="item.fields ? 'border mt-ad-[20] p-ad-[10]' : ''"
        >
          <label
            :for="item.name"
            class="mb-ad-[5] text-primary-0 text-ad-[12]"
            >{{ item.label }}</label
          >
          <client-only>
            <Field
              v-model="item.value"
              :name="item.name"
              :as="item.as"
              class="border text-primary-1 text-ad-[18] w-full rounded-lg p-ad-[10]"
              :type="item.type ? item.type : undefined"
              validate-on-input
              :placeholder="item.placeholder ? item.placeholder : ''"
              :rules="item.schema ? item.schema : undefined"
            />
          </client-only>
          <ErrorMessage
            :name="item.name"
            class="text-danger-1 uppercase font-semibold"
          />
          <client-only>
            <div v-if="item.fields" class="flex">
              <div
                v-for="(field, j) in item.fields"
                :key="j"
                class="w-full mr-ad-[20] last-of-type:mr-0"
              >
                <label
                  :for="field.name"
                  class="mb-ad-[5] text-primary-0 text-ad-[12]"
                  >{{ field.label }}</label
                >
                <Field
                  v-model="field.value"
                  :name="field.name"
                  :as="field.as"
                  class="border text-primary-1 text-ad-[18] w-full rounded-lg p-ad-[10]"
                  :type="field.type ? field.type : undefined"
                  validate-on-input
                  :placeholder="field.placeholder ? field.placeholder : ''"
                  :rules="field.schema"
                />
                <ErrorMessage
                  :name="field.name"
                  class="text-danger-1 uppercase font-semibold"
                />
              </div>
            </div>
          </client-only>
        </div>
      </Form>
    </div>
    <template #footer>
      <div class="flex items-center justify-end w-full">
        <button
          type="submit"
          form="user"
          class="border p-ad-[10] rounded transition-all bg-success-1 text-secondary-1 hover:bg-success-0 hover:text-secondary-0 text-ad-[18]"
        >
          Додати
        </button>
      </div>
    </template>
  </lazy-parts-modal>
</template>
<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import { string } from 'yup'

const show = ref(false)
const inputItems = [
  {
    name: 'name',
    type: 'string',
    label: 'Назва',
    value: '',
    as: 'input',
    placeholder: 'Смартфон Xiaomi Redmi 10 4/64GB Pebble White',
    schema: string().required("Обов'язкове поле"),
  },
  {
    name: 'price',
    type: 'string',
    label: 'Ціна',
    value: '',
    as: 'input',
    placeholder: '23999',
    schema: string().required("Обов'язкове поле"),
  },
  {
    name: 'characteristics',
    type: 'string',
    label: 'Назва характиристики',
    value: '',
    as: 'input',
    placeholder: 'Екран',
    fields: [
      {
        name: 'key',
        type: 'string',
        label: 'Ключ',
        value: '',
        as: 'input',
        placeholder: 'Діагональ',
      },
      {
        name: 'value',
        type: 'string',
        label: 'Значення',
        value: '',
        as: 'input',
        placeholder: '6,5 IPS',
      },
    ],
  },
]
const submit = (value) => {
  console.log(value)
  show.value = false
}
</script>
