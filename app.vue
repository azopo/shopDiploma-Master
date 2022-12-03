<template>
  <nuxt-layout>
    <nuxt-page />
    <notifications width="20%" pause-on-hover />
  </nuxt-layout>
</template>
<style lang="scss">
.vue-notification {
  margin: 20px 20px 0 0;
  padding: 10px;
  border-radius: 5px !important;
  color: #ffffff;
  background: #8a8a8a;
  border-left: none;

  .notification-title {
    font-size: 1rem;
  }

  .notification-content {
    font-size: 0.8rem;
  }

  &.success {
    background: #68cd86;
  }

  &.warn {
    background: #ffb648;
  }

  &.error {
    background: #e54d42;
  }
}
</style>
