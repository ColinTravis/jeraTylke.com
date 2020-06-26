<template>
  <div>
    <HeaderPrismic />
    <nuxt />
  </div>
</template>

<script>
export default {
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic);
  },
};
</script>
