import * as FontAwesome from './build/fontawesome'
export default {
  
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'karute',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyDPeg9J4uFdpXRPeX9LsWibXVda4lstWQk",
          authDomain: "karute-81f3c.firebaseapp.com",
          projectId: "karute-81f3c",
          storageBucket: "karute-81f3c.appspot.com",
          messagingSenderId: "369985687952",
          appId: "1:369985687952:web:c94ff519f492f40436a315",
          measurementId: "G-3ND3M4QHY7"
        },
        services: {
          auth: true,
          firestore: {
            enablePersistence: true
          }
        }
      }
    ],
    [
      'cookie-universal-nuxt',
       { 
         parseJSON: false 
        }
      ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  buildModules: [
    ['@nuxtjs/fontawesome', { component: 'fontAwesome', suffix: true }]
  ],
  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands
    }
  }
}
