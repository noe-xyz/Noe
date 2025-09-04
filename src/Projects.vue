<template>

  <div class="min-h-screen">

    <!-- Header -->
    <Header />

    <!-- Título -->
    <Title />

    <!-- Main -->
    <section class="min-h-screen flex justify-center items-start mt-4">
      <main class="space-y-12">
        <template v-for="(project, index) in projects" :key="index">

          <div class="flex flex-col md:flex-row items-start gap-8">

            <!-- Imagen con overlay -->
            <!-- <div class="flex-shrink-0 relative group rounded-2xl overflow-hidden"> -->

              <!-- Imagen -->
              <img :src="project.image" :alt="project.title"
                class="object-cover rounded-[35px] transition-transform duration-300 group-hover:scale-105 project-image" />

              <!-- Capa traslúcida -->
              <!-- <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 
              transition-opacity duration-300 flex items-center justify-center 
              rounded-2xl group-hover:opacity-100" style="max-width: 6070px; max-height: 365px; min-width: 500px;"> -->

              <!-- Botón GitHub -->
              <!-- <a href="#" target="_blank" class="px-4 py-2 bg-white text-black font-semibold rounded-xl shadow-lg 
              hover:bg-gray-200 transition">
                  Ver en GitHub <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
                </a>
              </div> 
            </div> -->

            <!-- Descripción -->
            <div class="flex flex-col justify-center">
              <h2 class="project-title">
                {{ project.title }}
                <em class="text-gray-500 project-subtitle ml-2">{{ project.year }}</em>
              </h2>
              <p class="text-gray-600 text-base leading-relaxed max-w-xl project-description">
                {{ project.description }}
              </p>
            </div>

          </div>

        </template>
      </main>
    </section>


  </div>

</template>

<script>
import Header from './components/Header.vue'
import Title from './components/Title.vue'

export default {
  name: 'Projects',
  components: {
    Header, Title
  },
  computed: {
    projects() {
      return [
        {
          title: this.$t('projects.p1_title'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, est at venenatis gravida, ipsum sem euismod nunc, et posuere est metus nec dui. Nulla et massa in urna hendrerit facilisis a et risus. Cras vulputate in sapien quis tincidunt. Integer nec gravida tortor.',
          year: '2025',
          image: 'https://placehold.co/470x265'
        },
        {
          title: this.$t('projects.p2_title'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, est at venenatis gravida, ipsum sem euismod nunc, et posuere est metus nec dui. Nulla et massa in urna hendrerit facilisis a et risus. Cras vulputate in sapien quis tincidunt. Integer nec gravida tortor.',
          year: '2025',
          image: 'https://placehold.co/470x265'
        }
      ]
    }
  }
}
</script>