<script setup>
    import { watch } from 'vue' //Watch para observar cambios en el idioma
    import { useRouter, useRoute } from 'vue-router' //Importa useRouter y useRoute
    import { useI18n } from 'vue-i18n' //Importa useI18n para traducir
    const router = useRouter() //Instancia del router
    const route = useRoute() //Instancia de la ruta actual
    const { locale } = useI18n() //Instancia de i18n

    // Observa cambios en el idioma
    watch(locale, (newLang) => {
        // Reconstruye la ruta con el nuevo idioma
        const newPath = route.fullPath.replace(/^\/(es|en)/, `/${newLang}`)
        router.push(newPath)
    })
</script>

<template>

    <!-- Navbar -->
    <header class="flex justify-between items-center px-8 py-6">

        <!-- Logo -->
        <div>
            <!--Cambia el color del logo dependiendo de la ruta-->
            <a v-if="route.path === '/es' || route.path === '/en'" :title="$t('header.home')" :href="'/' + $i18n.locale">
                <img src="/src/assets/images/logo-principal.svg" alt="Logo Azul" class="w-10 h-10 md:w-10 md:h-10">
            </a>
            <a v-else :title="$t('header.home')" :href="'/' + $i18n.locale">
                <img src="/src/assets/images/logo-general.svg" alt="Logo Blanco" class="w-10 h-10 md:w-10 md:h-10">
            </a>
        </div>

        <!-- Contenedor de menú e idioma -->
        <div class="flex items-center space-x-20">

            <!-- Menú -->
            <nav class="hidden md:flex space-x-20 links">
                <a :href="'/' + $i18n.locale + '/experience'" class="hover-underline-animation left">{{ $t('header.experience') }}</a>
                <a :href="'/' + $i18n.locale + '/projects'" :title="$t('header.projects')" class="hover-underline-animation left">{{ $t('header.projects') }}</a>
                <a href="#contacto" :title="$t('header.contact')" class="hover-underline-animation left">{{ $t('header.contact') }}</a>
            </nav>

            <!-- Idioma -->
            <div class="text-lg flex items-center space-x-1 mt-1">
                <span><i class="fa-solid fa-earth-europe fa-xs"></i></span>
                <span class="text-[20px]">
                    <select v-model="$i18n.locale">
                        <option
                            v-for="(lang, index) in ['es', 'en']"
                            :key="index"
                            :value="lang"
                        >
                            {{ lang.toUpperCase() }}
                        </option>
                    </select>
                </span>
            </div>

        </div>

    </header>
</template>