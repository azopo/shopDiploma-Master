<template>
  <lazy-parts-modal
    v-model="show"
    open-text="Редагувати"
    @open="show = true"
    @close="show = false"
  >
    <template #title>Додати адміністратора</template>
    <div>
      <Form id="user" @submit="submit">
        <!--        <div v-for="(item, i) in inputItems" :key="i">-->
        <!--          <label-->
        <!--            :for="item.name"-->
        <!--            class="mb-ad-[5] text-primary-0 text-ad-[12]"-->
        <!--            >{{ item.label }}</label-->
        <!--          >-->
        <!--          <client-only>-->
        <!--            <Field-->
        <!--              v-model="item.value"-->
        <!--              :name="item.name"-->
        <!--              :as="item.as"-->
        <!--              class="border text-primary-1 text-ad-[18] w-full rounded-lg p-ad-[10]"-->
        <!--              :type="item.type ? item.type : undefined"-->
        <!--              validate-on-input-->
        <!--              :placeholder="item.placeholder ? item.placeholder : ''"-->
        <!--              :rules="item.schema"-->
        <!--            >-->
        <!--              <template v-if="item.select">-->
        <!--                <option-->
        <!--                  v-for="(selectItem, j) in item.select"-->
        <!--                  :key="j"-->
        <!--                  :value="selectItem.value"-->
        <!--                >-->
        <!--                  {{ selectItem.text }}-->
        <!--                </option>-->
        <!--              </template>-->
        <!--            </Field>-->
        <!--          </client-only>-->
        <!--          <ErrorMessage-->
        <!--            :name="item.name"-->
        <!--            class="text-danger-1 uppercase font-semibold"-->
        <!--          />-->
        <!--        </div>-->
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

const show = ref(false)
const submit = () => {
  show.value = false
}
</script>
