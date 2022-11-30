<template>
  <div>
    <button
      type="button"
      class="w-ad-[50] h-ad-[50] bg-primary-1 rounded ml-ad-[10] text-secondary-1 hover:bg-primary-0 hover:text-secondary-0"
      @click="setImage"
    >
      <Icon
        size="2rem"
        :name="image ? 'ic:baseline-edit' : 'ic:twotone-plus'"
      />
    </button>
    <div class="h-full w-ad-[200] mb-ad-[20]">
      <nuxt-img
        v-if="image"
        alt="Головне зображення"
        class="w-[100%] h-[100%] object-cover object-center"
        preset="image"
        :src="image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFileSystemAccess } from '@vueuse/core'
const props = defineProps({
  item: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['changeImage'])
const image = ref(props.item.image ? props.item.image : '')
const setImage = async () => {
  const { file, open } = useFileSystemAccess({
    types: [
      {
        accept: {
          'image/*': ['.jpg', '.jpeg', '.png', '.webp'],
        },
      },
    ],
  })
  await open()
  image.value = URL.createObjectURL(file.value)
  emit('changeImage', file.value)
}
</script>
