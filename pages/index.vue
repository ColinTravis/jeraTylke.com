<template>
  <div class="bg-black h-screen font-stolzl">
    <div class="container mx-auto h-full flex justify-center items-center">
      <div class="w-auto md:w-2/3 px-4">
        <div class="border-white border-2 p-4 mb-6 rounded-lg shadow-xl">
          <h1 class="text-center mb-4 xs:mb-8 text-white font-jura font-thin tracking-widest text-3xl md:text-5xl">Jeralise Tylke</h1>
          <logo class="mx-auto block w-1/3 text-white" />
          <div class="my-4 xs:my-8">
            <h2 class="text-white font-semibold font-sans text-center">{{emailAddress}}</h2>
          </div>
          <div class="flex flex-row items-center justify-center space-x-6 md:space-x-16 my-4">
            <a href="https://www.instagram.com/jera_tylkz/" target="_blank" aria-label="Instagram Link" title="Instagram" rel="noopener">
              <Icon-Instagram class="transition-colors duration-300 ease-in-out text-center w-8 text-white hover:text-purple-500" />
            </a>
            <a href="https://www.artstation.com/jera_tylke" target="_blank" aria-label="Artstation Link" title="Artstation" rel="noopener">
              <Icon-Art-Station class="transition-colors duration-300 ease-in-out text-center w-16 text-white hover:text-purple-500" />
            </a>
            <a href="https://vimeo.com/user67450948" target="_blank" aria-label="Vimeo Link" title="Vimeo" rel="noopener">
              <Icon-Vimeo class="transition-colors duration-300 ease-in-out text-center w-8 text-white hover:text-purple-500"  />
            </a>
            <a href="https://jtylke.wixsite.com/jeratylke" target="_blank" aria-label="Wix Link" title="Wix (Old Site)" rel="noopener">
              <Icon-Wix class="transition-colors duration-300 ease-in-out text-center w-12 text-white hover:text-purple-500"  />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import { IconArtStation, IconVimeo, IconWix, IconInstagram } from '~/components/icons';
export default {
  data() {
    return {
      emailAddress: process.env.emailAddress
    }
  },
  components: {
    Logo,
    IconArtStation,
    IconVimeo,
    IconWix,
    IconInstagram
  }
};
</script>

<style lang="postcss">
h1 {
  @apply font-bold;
  font-variant: small-caps;
}
</style>