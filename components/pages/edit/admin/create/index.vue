<template>
  <lazy-parts-modal
    v-model="show"
    :open-text="item ? 'Редагувати' : 'Додати'"
    @open="show = true"
    @close="show = false"
  >
    <template #title>Додати смартфон</template>
    <div>
      <lazy-pages-edit-admin-create-image
        :item="item"
        @change-image="changeImage"
      />
      <Form id="user" @submit="submit">
        <div
          v-for="(input, i) in inputItems"
          :key="i"
          :class="input.fields ? 'border mt-ad-[20] p-ad-[10]' : ''"
        >
          <label
            :for="input.name"
            class="mb-ad-[5] text-primary-0 text-ad-[12]"
            >{{ input.label }}</label
          >
          <client-only>
            <Field
              v-model="input.value"
              :name="input.name"
              :as="input.as"
              class="border text-primary-1 text-ad-[18] w-full rounded-lg p-ad-[10]"
              :type="input.type ? input.type : undefined"
              validate-on-input
              :placeholder="input.placeholder ? input.placeholder : ''"
              :rules="input.schema ? input.schema : undefined"
            />
          </client-only>
          <ErrorMessage
            :name="input.name"
            class="text-danger-1 uppercase font-semibold"
          />
        </div>
        <lazy-pages-edit-admin-create-characteristics :item="item" />
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
import { itemsStore } from '~/store/pages/edit/admin/items'

const props = defineProps({
  item: {
    type: Object,
    default: undefined,
  },
})
const show = ref(false)
const inputItems = [
  {
    name: 'name',
    type: 'string',
    label: 'Назва',
    value: props.item ? props.item.name : '',
    as: 'input',
    placeholder: 'Смартфон Xiaomi Redmi 10 4/64GB Pebble White',
    schema: string().required("Обов'язкове поле"),
  },
  {
    name: 'price',
    type: 'string',
    label: 'Ціна',
    value: props.item ? props.item.price : '',
    as: 'input',
    placeholder: '23999',
    schema: string().required("Обов'язкове поле"),
  },
]
const fieldValue: { [k: string]: any } = {}
const changeImage = (file: File) => {
  fieldValue.image = file
}
const submit = (value: object) => {
  const { image, name, price, characteristics } = Object.assign(
    value,
    fieldValue
  )
  itemsStore().create(image, name, price, characteristics)
  show.value = false
}
</script>
