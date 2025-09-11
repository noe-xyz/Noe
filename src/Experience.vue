<template>

    <div class="min-h-screen">

        <!-- Header -->
        <Header />

        <!-- Título -->
        <Title />

        <!-- Main -->
        <section class="flex justify-center items-start mt-4 mb-12">

            <main class="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 space-x-4 md:space-y-0 md:space-x-6 px-4 md:px-0">

                <div class="border-[#1A6ECE] border-2 rounded-[35px] p-12 max-w-md">
                    <h1 class="title flex justify-center">
                        Tecnologías
                    </h1>
                    <ul class="space-y-2">
                        <li v-for="tech in technologies" :key="tech.name" class="flex items-center techs">
                            <span class="text-xl mr-2">
                                <i v-if="tech.emoji === '3'" class="fa-regular fa-face-grin-beam"></i>
                                <i v-else-if="tech.emoji === '2'" class="fa-regular fa-face-grin"></i>
                                <i v-else class="fa-regular fa-face-smile"></i>
                            </span>
                            <span>{{ tech.name }}</span>
                            <em class="ml-auto text-sm techs" v-if="tech.emoji === '3'"> (Nivel
                                experto)</em>
                            <em class="ml-auto text-sm techs" v-else-if="tech.emoji === '2'"> (Nivel
                                intermedio)</em>
                            <em class="ml-auto text-sm techs" v-else> (Nivel básico)</em>
                        </li>
                    </ul>
                </div>

                <div class="border-[#1A6ECE] border-2 rounded-[35px] p-12 max-w-md">
                    <h1 class="title flex justify-center">
                        Experiencia
                    </h1>
                    <div class="flex flex-row items-center mt-4">
                        <h2 class="techs">
                            Desarrolladora Web
                            <em class="text-[23px] text-gray-500 project-subtitle">
                            @ Grupo Auro
                        </em>
                        </h2>
                    </div>
                    <p class="text-gray-600 leading-relaxed project-description mt-2 text-justify">
                        Mantenimiento y desarrollo de nuevas funcionalidades para la página web de gestión de la
                        empresa,
                        usando los frameworks Symfony (PHP) y Vue.js, EasyAdmin, Twig. Pequeñas pruebas con Postman
                    </p>
                </div>

            </main>

        </section>

        <!-- Footer -->
        <Footer />

    </div>

</template>

<script>
import Header from './components/Header.vue'
import Title from './components/Title.vue'
import Footer from './components/Footer.vue'

const technologies = [
    { name: 'HTML', emoji: '3' },
    { name: 'CSS', emoji: '3' },
    { name: 'JavaScript', emoji: '3' },
    { name: 'Figma', emoji: '2' },
    { name: 'Vue', emoji: '1' },
]

export default {
    name: 'Experience',
    components: {
        Header, Title, Footer
    },
    data() {
        return {
            technologies
        }
    }
}
</script>