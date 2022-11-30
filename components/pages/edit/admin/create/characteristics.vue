<template>
  <div class="flex">
    <client-only>
      <div class="flex flex-col w-full">
        <Field v-model="characteristics" name="characteristics">
          <div
            v-for="(character, i) in characteristics"
            :key="i"
            class="flex w-full mt-ad-[15] border border-primary-1 rounded p-ad-[10]"
          >
            <div class="w-full">
              <div class="w-full">
                <label :for="i" class="mb-ad-[5] text-primary-0 text-ad-[12]"
                  >Назва характиристики</label
                >
                <input
                  :id="i"
                  v-model="character.name"
                  type="text"
                  placeholder="Екран"
                  class="border text-primary-1 text-ad-[18] w-full rounded-lg p-ad-[10]"
                />
              </div>
              <div class="flex">
                <div class="w-full mr-ad-[15]">
                  <label :for="i" class="mb-ad-[5] text-primary-0 text-ad-[12]"
                    >Ключ</label
                  >
                  <input
                    :id="i"
                    v-model="character.fields.key"
                    type="text"
                    placeholder="Діагональ"
                    class="border text-primary-1 text-ad-[18] w-full rounded-lg p-ad-[10]"
                  />
                </div>
                <div class="w-full">
                  <label :for="i" class="mb-ad-[5] text-primary-0 text-ad-[12]"
                    >Значення</label
                  >
                  <input
                    :id="i"
                    v-model="character.fields.value"
                    type="text"
                    placeholder="6,5 IPS"
                    class="border text-primary-1 text-ad-[18] w-full rounded-lg p-ad-[10]"
                  />
                </div>
              </div>
            </div>
            <button
              v-show="i !== 0"
              type="button"
              class="w-ad-[50] h-full bg-danger-1 rounded ml-ad-[10] text-secondary-1 hover:bg-danger-0 hover:text-secondary-0"
              @click="remove(i)"
            >
              <Icon size="2rem" name="ic:baseline-restore-from-trash" />
            </button>
          </div>
        </Field>
      </div>
    </client-only>
    <button
      type="button"
      class="w-ad-[50] h-ad-[50] self-end bg-primary-1 rounded my-ad-[10] text-secondary-1 hover:bg-primary-0 hover:text-secondary-0"
      @click="add()"
    >
      <Icon size="2rem" name="ic:twotone-plus" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate'

const props = defineProps({
  item: {
    type: String,
    default: '',
  },
})
const characteristics = ref(
  props.item.characteristics
    ? props.item.characteristics
    : [
        {
          name: '',
          fields: {
            key: '',
            value: '',
          },
        },
      ]
)

const add = () => {
  characteristics.value.push({
    name: '',
    fields: {
      key: '',
      value: '',
    },
  })
}
const remove = (i: any) => {
  characteristics.value.splice(i, 1)
}
</script>
