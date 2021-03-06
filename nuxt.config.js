const meta = {
  title: 'Jeralise Tylke',
  description: 'Jeralise Tylke Portfolio',
  url: 'https://www.jeralisetylke.com',
  image: '/meta.jpg'
};

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: meta.title,
    htmlAttrs: {
      lang: 'en-US',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge,chrome=1' },
      { hid: 'description', name: 'description', content: meta.description },
      { name: 'theme-color', content: '#000000' },

      // Generic
      { itemprop: 'name', hid: 'name', content: meta.title },
      { itemprop: 'url', hid: 'url', content: meta.url },
      {
        itemprop: 'description',
        hid: 'description',
        content: meta.description
      },
      { itemprop: 'image', hid: 'image', content: meta.image },

      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:title', hid: 'og:title', content: meta.title },
      { property: 'og:url', hid: 'og:url', content: meta.url },
      {
        property: 'og:description',
        hid: 'og:description',
        content: meta.description
      },
      { property: 'og:image', hid: 'og:image', content: meta.image }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'alternate icon', href: '/favicon.png' },
      { rel: 'canonical', href: meta.url },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#9f7aea' },
  env: {
    emailAddress: 'jeralisetylke@gmail.com'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-webfontloader'],
  /*
   ** Web Font
   */
  webfontloader: {
    google: {
      families: ['Jura:200,400,700&display=swap'] //Loads Lato font with weights 400 and 700
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
