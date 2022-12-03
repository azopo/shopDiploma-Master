<template>
  <div class="container flex flex-col">
    <div class="flex justify-between">
      <div class="flex flex-col pb-ad-[30]">
        <Form id="by" @submit="submit">
          <template v-for="(inputItem, i) in textInputItems" :key="i">
            <p class="text-primary-1 text-ad-[26]">{{ inputItem.title }}</p>
            <template v-for="(input, j) in inputItem.items" :key="j">
              <label
                :for="input.name"
                class="mb-ad-[5] text-primary-0 text-ad-[12]"
                >{{ input.label }}</label
              >
              <client-only>
                <Field
                  v-model="input.model"
                  :name="input.name"
                  class="border text-primary-1 text-ad-[18] w-full rounded-lg p-ad-[10]"
                  :type="input.type"
                  validate-on-input
                  :placeholder="input.placeholder"
                  :rules="input.schema"
                />
              </client-only>
              <ErrorMessage
                :name="input.name"
                class="text-danger-1 uppercase font-semibold"
              />
            </template>
          </template>
          <template v-for="(inputItem, i) in radioInputItems" :key="i">
            <p class="text-primary-1 text-ad-[26] mt-ad-[20]">
              {{ inputItem.title }}
            </p>
            <div
              v-for="(input, j) in inputItem.items"
              :key="j"
              class="mt-ad-[20]"
            >
              <client-only>
                <Field
                  v-model="inputItem.model"
                  :value="input.value"
                  :name="input.name"
                  type="radio"
                  validate-on-input
                />
              </client-only>
              <label
                :for="input.name"
                class="ml-ad-[10] text-primary-1 text-ad-[20]"
                >{{ input.label }}</label
              >
            </div>
          </template>
        </Form>
      </div>
      <div
        class="border-l ml-ad-[40] p-ad-[30] h-ad-[500] flex flex-col items-center justify-center"
      >
        <p class="text-primary-1 text-ad-[26] self-start mb-ad-[30]">
          Ваше замовлення
        </p>

        <div class="flex">
          <div class="h-full w-ad-[500]">
            <nuxt-img
              alt="logo"
              class="w-[100%] h-[100%] object-cover object-center"
              preset="image"
              :src="`/${item.image}`"
            />
          </div>
          <div>
            <p class="text-primary-1 text-ad-[18] mb-ad-[20]">12 місяців</p>
            <p class="text-primary-1 text-ad-[18] mb-ad-[20]">
              {{ item.name }}
            </p>
            <p class="text-primary-1 text-ad-[18] mb-ad-[20]">
              Всього до сплати
              <span class="font-semibold"> {{ item.price }} грн</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <button
      form="by"
      class="self-center bg-primary-0 text-light-0 rounded w-ad-[400] h-ad-[50] uppercase text-ad-[20] font-semibold transition-all hover:bg-primary-1 hover:text-light-1 mt-ad-[50]"
    >
      Підтверджую замовлення
    </button>
  </div>
</template>
<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import { string } from 'yup'
import { orderStore } from '~/store/pages/by/order'

const route = useRoute()
const { data } = await useAsyncData('item', () =>
  $fetch(`/api/pages/item?id=${route.params.id}`, { method: 'GET' })
)
const item = computed(() => {
  return data.value
})
const textInputItems = [
  {
    title: 'Покупець',
    items: [
      {
        name: 'name',
        type: 'text',
        label: 'ПІБ',
        value: '',
        placeholder: 'Франко Олексій Юрійович',
        schema: string().required("Обов'язкове поле"),
      },
      {
        name: 'phone',
        type: 'text',
        label: 'Номер телефону',
        value: '',
        placeholder: '+380 67 123 45 67',
        schema: string().required("Обов'язкове поле"),
      },
      {
        name: 'email',
        type: 'email',
        label: 'Електронна пошта',
        value: '',
        placeholder: 'example@gmail.com',
        schema: string()
          .required("Обов'язкове поле")
          .email('Перевірте формат email'),
      },
    ],
  },
]
const radioInputItems = [
  {
    title: 'Спосіб доставки',
    model: '',
    items: [
      {
        label:
          'Самовивіз (можлива передплата, уточнюйте у операторів колл-центру)',
        name: 'delivery',
        value: 'self',
      },
      {
        label: 'Нова Пошта',
        name: 'delivery',
        value: 'post',
      },
      {
        label: "Доставка кур'єром «Нова пошта»",
        name: 'delivery',
        value: 'courier',
      },
    ],
  },
  {
    title: 'Спосіб оплати',
    model: '',
    items: [
      {
        label: 'Карткою онлайн ( +3% комісія банку )',
        name: 'pay',
        value: 'card',
      },
      {
        label:
          'Оплатити при отриманні (Деякі товари відправляються після повної передплати, уточнюйте у операторів контакт-центру)',
        name: 'pay',
        value: 'cash',
      },
    ],
  },
]
const submit = ({ name, phone, email, delivery, pay }) => {
  orderStore().createOrder(name, phone, email, delivery, pay, item.value._id)
}
</script>
