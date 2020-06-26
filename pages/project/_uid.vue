<template>
  <section>
    <!-- Slices block component -->
    <slices-block :slices="slices" />
  </section>
</template>

<script>
// Imports for Prismic Slice components

export default {
  name: 'project',
  data() {
    return {
        URL: process.env.URL
    }
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID('project', params.uid))
        .data;

      return {
        // Set slices as variable
        meta: document.metadata,
        slices: document.page_content,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  head() {
    return {
        title: this.meta[0].meta_title[0].text
//       link: [
//         {
//           rel: 'canonical',
//           href: `${URL}${this.$prismic.linkResolver(this.document)}`,
//         },
//       ],
//       meta: [
//         {
//           hid: 'description',
//           name: 'description',
//           content: this.$prismic.asText(this.document.data.meta_description),
//         },
//       ],
    };
  },
}
</script>
