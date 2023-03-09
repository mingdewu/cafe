export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  lintOnSave:false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate(title) {
      return (title ? `${title} | ` : '') + process.env.npm_package_name
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_name|| '', },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'notFound',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue'),
      })
    },
  },
  generate: {
    fallback: true,
  }
}
