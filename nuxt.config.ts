export default defineNuxtConfig({
  css: ['~/assets/style/index.scss'],
  modules: ['@nuxtjs/tailwindcss'],
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
})
