<template>
  <section>
    <!-- Slices block component -->
    <slices-block :slices="slices"/>
  </section>
</template>

<script>
// Imports for all components

export default {
  name: 'About',
  head () {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
  async asyncData({ $prismic, error }) {
    try{
      // Query to get the home page content
      const about = (await $prismic.api.getSingle('about')).data

      return {
        // Set slices as variable
        slices: about.page_content
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
