import { createRouter, createWebHistory } from 'vue-router'
import Home from './src/Home.vue'
import Projects from './src/Projects.vue'
import { i18n } from './src/messages.js'

const routes = [
  //Redirect
  { path: '/',
    redirect: () => {
      // Detecta idioma de i18n
      const userLang = i18n.global.locale.value.startsWith('en') ? 'en' : 'es'
      return `/${userLang}`
    }
  },

  // Español
  { path: '/es', component: Home },
  { path: '/es/projects', component: Projects },

  // Inglés
  { path: '/en', component: Home },
  { path: '/en/projects', component: Projects },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router