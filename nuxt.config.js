/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-24 15:04:39
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-30 16:30:30
 */
export default {
  ssr: true,
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Crud Project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/sweetalert.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'cookie-universal-nuxt',
    'vue-sweetalert2/nuxt',
  ],

  //Axios module configuration
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.USER_BACKEND_ENDPOINT
  },

  //sweetalert module configuration
  sweetalert: {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-EN', name: 'English', file: 'en.json'},
      { code: 'tr', iso: 'tr-TR', name: 'Türkçe', file: 'tr.json'},
      { code: 'fr', iso: 'fr-FR', name: 'Français ', file: 'fr.json'},
    ],
    defaultLocale: process.env.VUE_APP_I18N_LOCALE || 'tr',
    langDir: '~/locales/',
    vueI18n: {
      fallbackLocale: process.env.VUE_APP_I18N_LOCALE || 'tr',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
