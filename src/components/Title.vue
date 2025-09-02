<script setup>
    import { useRoute } from 'vue-router' //Importa useRouter y useRoute
    const route = useRoute() //Instancia de la ruta actual
    const section = route.path.split('/').pop() //Obtiene la sección de la ruta sin el idioma
</script>

<template>
  <h1 id="title" class="ml-25 mb-4 pb-4">
    <!-- Muestra el título basado en la sección actual -->
    {{ $t(`title.${['projects', 'experience', 'contact'].includes(section) ? section : 'projects'}`) }}
  </h1>
</template>