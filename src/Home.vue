<template>
  <div class="min-h-screen text-white">

    <!-- Header -->
    <Header />

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

<!-- <script setup>
// Si usas Material Icons, añade en index.html:
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</script>

<style>
body {
  
}
</style> -->
