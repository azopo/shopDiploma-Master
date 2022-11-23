<template>
  <div>
    <vue-final-modal
      v-bind="$attrs"
      :click-to-close="false"
      classes="flex justify-center items-center"
      content-class="relative p-ad-[20] rounded bg-secondary-1 max-w-[80%] min-w-[60%]"
    >
      <span class="text-ad-[24] font-bold">
        <slot name="title" />
      </span>
      <div class="overflow-auto max-h-96">
        <slot />
      </div>
      <div class="flex-shrink-0 flex justify-center items-center pt-4">
        <div class="flex justify-between items-center w-full">
          <slot name="footer" />
          <button
            class="border p-ad-[10] ml-ad-[10] rounded transition-all bg-danger-1 text-secondary-1 hover:bg-danger-0 hover:text-secondary-0 text-ad-[18]"
            @click="$emit('close')"
          >
            Закрити
          </button>
        </div>
      </div>
    </vue-final-modal>
    <button
      class="text-light-0 rounded w-ad-[200] h-ad-[50] p-ad-[5] bg-primary-0 uppercase text-ad-[20] font-semibold transition-all group-hover:bg-primary-1 group-hover:text-light-1"
      @click="$emit('open')"
    >
      <Icon
        v-if="openIcon"
        color="white"
        class="group-hover:scale-105 transition-all"
        :class="openText ? 'mr-ad-[5]' : ''"
        :name="openIcon"
        :size="openIconSize"
      />
      <span v-if="openText">{{ openText }}</span>
    </button>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  openIcon: {
    type: String,
    default: '',
  },
  openIconSize: {
    type: String,
    default: '2rem',
  },
  openText: {
    type: String,
    default: '',
  },
})
</script>
