<template>
  <div class="min-h-screen text-white home">

    <!-- Header -->
    <Header class="white-links" />

    <!-- Main -->
    <main class="flex flex-col justify-center items-start px-12 md:px-24 lg:px-40 py-24">
      <h1 class="text-7xl mb-4" id="welcome">{{ $t('home.welcome') }}</h1>
      <p class="text-4xl mt-2" id="welcomeSubtitle">
        {{ $t('home.welcomeSubtitle') }}
      </p>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style scoped>
  .home {
    background-color: #1A6ECE;
    color: white;
  }

  .hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1.5px;
    bottom: 0;
    left: 0;
    background-color: white;
    transition: transform 0.25s ease-out;
  }

</style>
