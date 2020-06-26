<template>
    <div class="container">
        <!-- Slice section template -->
        <section v-for="(slice, index) in slices" :key="'slice-' + index">
            <!-- Text slice component -->
            <template v-if="slice.slice_type === 'text_section'">
                <TextSlice :slice="slice"/>
            </template>
            <!-- Quote slice component -->
            <template v-else-if="slice.slice_type === 'quote'">
                <QuoteSlice :slice="slice"/>
            </template>
            <!-- Full Width Image slice component -->
            <template v-else-if="slice.slice_type === 'full_width_image'">
                <FullWidthImage :slice="slice"/>
            </template>
            <!-- Image Gallery slice component -->
            <template v-else-if="slice.slice_type === 'image_gallery'">
                <ImageGallery :slice="slice"/>
            </template>
            <!-- Image Highlight slice component -->
            <template v-else-if="slice.slice_type === 'image_highlight'">
                <ImageHighlight :slice="slice"/>
            </template>
        </section>
    </div>
</template>

<script>

export default {
  props: ['slices'],
  name: 'slices-block',
}
</script>