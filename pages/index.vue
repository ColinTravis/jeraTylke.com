<template>
  <div class="bg-black h-screen font-stolzl">
    <div class="container mx-auto h-full flex justify-center items-center">
      <div class="w-auto sm:w-auto lg:w-2/3 px-4">
        <div class="border-white border-2 p-4 mb-6 rounded-lg shadow-xl">
          <h1 class="text-center mb-8 text-white font-jura font-thin uppercase tracking-wider">Jeralise Tylke</h1>
          <logo class="mx-auto block w-1/3 text-white" />
          <div class="my-8">
            <h2 class="text-white font-semibold font-sans text-center">{{emailAddress}}</h2>
          </div>
          <div class="flex flex-row items-center justify-center space-x-20 my-4">
            <a href="https://www.artstation.com/jera_tylke" target="_blank" aria-label="Artstation Link" title="Artstation" rel="noopener">
              <Icon-Art-Station class="transition-colors duration-300 ease-in-out text-center w-16 text-white hover:text-purple-500" />
            </a>
            <a href="https://vimeo.com/user67450948" target="_blank" aria-label="Vimeo Link" title="Vimeo" rel="noopener">
              <Icon-Vimeo class="transition-colors duration-300 ease-in-out text-center w-8 text-white hover:text-purple-500"  />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import { IconArtStation, IconVimeo } from '~/components/icons';
export default {
  data() {
    return {
      emailAddress: process.env.emailAddress
    }
  },
  components: {
    Logo,
    IconArtStation,
    IconVimeo
  }
};
</script>

<style lang="postcss">
h1 {
  @apply font-bold;
  @apply text-5xl;
}
</style>