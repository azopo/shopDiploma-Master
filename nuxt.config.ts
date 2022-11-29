export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'uk',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Shop' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['~/assets/style/index.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@pinia/nuxt',
  ],
  build: {
    // @ts-ignore
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
  experimental: {
    reactivityTransform: false,
  },
  components: true,
  vite: {
    define: {
      'process.env.DEBUG': false,
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
      optimizeDeps: {
        include: ['vue', 'pinia'],
      },
    },
  },
  runtimeConfig: {
    cookieName: process.env.COOKIE_NAME || '__session',
    cookieSecret: process.env.COOKIE_SECRET || 'secret',
    cookieExpires: parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || '86400000',
      10
    ), // 1 day
    cookieRememberMeExpires: parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || '86400000',
      10
    ), // 7 days
  },
  nitro: {
    compressPublicAssets: true,
  },
  store: false,
  telemetry: false,
  image: {
    dir: 'assets/images',
    presets: {
      image: {
        modifiers: {
          format: 'webp',
          loading: 'lazy',
        },
      },
    },
  },
})
