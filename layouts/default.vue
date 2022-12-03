<template>
  <nav class="container-fluid bg-primary-1 shadow mb-ad-[30]">
    <div
      class="container flex items-center justify-between h-ad-[100] px-ad-[20]"
    >
      <lazy-layouts-default-nav-logo />
      <lazy-layouts-default-nav />
      <lazy-layouts-default-nav-shop />
    </div>
  </nav>
  <main>
    <slot />
  </main>
  <footer>
    <lazy-layouts-default-footer />
  </footer>
</template>
