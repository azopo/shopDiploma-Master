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
    <img
      v-if="image"
      :src="image"
      alt="Головне зображення"
      :style="{ 'max-width': '300px', 'max-height': '300px' }"
    />
  </div>
</template>

<script setup lang="ts">
import { useFileSystemAccess } from '@vueuse/core'

const emit = defineEmits(['changeImage'])
const image = ref('')
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
