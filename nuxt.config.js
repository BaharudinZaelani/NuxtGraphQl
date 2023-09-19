export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testgraph',
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

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  apollo: {
    // Sets up the apollo client endpoints
    clientConfigs: {
      default: {
        httpEndpoint: 'http://beta.pokeapi.co',
        browserHttpEndpoint: '/graphql/v1beta',
        httpLinkOptions: {
          credentials: 'same-origin'
        },
        // tokenName: 'apollo-token',
        persisting: false,
        websocketsOnly: false
      },
    },
    
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    authenticationType: 'Bearer', 
    tokenName: 'apollo-token',
    includeNodeModules: true,
    // cookieAttributes: {
    //   expires: 7,
    //   path: '/',
    //   domain: 'example.com',
    //   secure: false,
    // },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
