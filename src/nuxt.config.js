/* eslint-disable */
module.exports = {
  ssr: true,
  ssrLog: true,
  dev: process.env.NODE_ENV !== 'production',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ap-nuxt-firebase-ssr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://github.com/nuxt-community/eslint-module#readme
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // @nuxtjs/eslint-module configuration (https://eslint.org/docs/2.13.1/user-guide/configuring)
  eslint: {
    /* module options */
    "env": {
      "browser": true,
      "node": false
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  buildDir: '.nuxt',
  build: {
    extractCSS: true,
    publicPath: '/assets/',
    //https://github.com/nuxt/nuxt.js/issues/3828#issuecomment-508428611
    filenames: {
      app: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js'
    },
    babel: {
      presets({ isServer }) {
        let targets = isServer ? { node: '10' } : { ie: '11' }
        return [
          [ require.resolve('@nuxt/babel-preset-app'), 
            { 
              // targets
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            } 
          ]
        ]
      },
      'env': {
        'production': {
          'plugins': []
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  }
}
