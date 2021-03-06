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
    //'@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ]
  ],

  /* @nuxtjs/eslint-module configuration (https://eslint.org/docs/2.13.1/user-guide/configuring)
  // the same as in .eslintrc.js file
  eslint: {
    "env": {
      "browser": true,
      "node": true
    }
  },
  */

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  //issue: Nuxt is really slow: https://github.com/nuxt/nuxt.js/issues/6508
  vueMeta: {
    debounceWait: 250
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  buildDir: '.nuxt',
  build: {
    parallel: true,
    cache: true,
    //extractCSS: process.env.NODE_ENV === 'production',
    //optimizeCSS: process.env.NODE_ENV === 'production',
    transpile: ['vue-intersect'],
    publicPath: '/assets/',
    //https://github.com/nuxt/nuxt.js/issues/3828#issuecomment-508428611
    filenames: {
      app: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js'
    },
    babel: {
      presets({ isServer }) {
        let targets = isServer ? { node: '12' } : { ie: '11' }
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
