export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: [
    '@/assets/style/style.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/vars.scss";',
        }
      }
    }
  },
  modules: [
    '@pinia/nuxt',
  ]
});
