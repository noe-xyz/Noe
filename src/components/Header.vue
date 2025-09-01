<script setup>
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const router = useRouter()
const route = useRoute()
const { locale } = useI18n()

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
            <a v-if="route.path === '/es' || route.path === '/en'" :title="$t('header.home')" :href="'/' + $i18n.locale">
                <img src="/src/assets/images/logo-principal.svg" alt="Logo Azul" class="w-10 h-10 md:w-10 md:h-10">
            </a>
            <a v-else>
                <img src="/src/assets/images/logo-general.svg" alt="Logo Blanco" class="w-10 h-10 md:w-10 md:h-10">
            </a>
        </div>

        <!-- Contenedor de menú e idioma -->
        <div class="flex items-center space-x-20">

            <!-- Menú -->
            <nav class="hidden md:flex space-x-20 links">
                <a href="#experiencia" :title="$t('header.experience')">{{ $t('header.experience') }}</a>
                <a :href="'/' + $i18n.locale + '/projects'" :title="$t('header.projects')">{{ $t('header.projects') }}</a>
                <a href="#contacto" :title="$t('header.contact')">{{ $t('header.contact') }}</a>
            </nav>

            <!-- Idioma -->
            <div class="text-lg flex items-center space-x-1 mt-1">
                <span><i class="fa-solid fa-earth-europe fa-xs"></i></span>
                <span class="text-[20px]">
                    <select v-model="$i18n.locale" class="bg-transparent border-0 text-white focus:ring-0">
                        <option value="es">ES</option>
                        <option value="en">EN</option>
                    </select>
                </span>
            </div>

        </div>

    </header>
</template>