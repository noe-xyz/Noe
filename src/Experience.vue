<template>

  <div class="min-h-screen">

    <!-- Header -->
    <Header />

    <!-- Título -->
    <Title />

    <!-- Main -->
    <section class="min-h-screen flex justify-center items-start mt-4">
      <main class="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 px-4 md:px-0">
        <div class="border-[#1A6ECE] border-2 rounded-[35px] p-6 max-w-md">
            h
        </div>
        <div class="border-[#1A6ECE] border-2 rounded-[35px] p-6 max-w-md">
            º
        </div>
      </main>
    </section>


  </div>

</template>

<script>
import Header from './components/Header.vue'
import Title from './components/Title.vue'

export default {
  name: 'Experience',
  components: {
    Header, Title
  },
}
</script>