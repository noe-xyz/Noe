import { createI18n } from 'vue-i18n'

const messages = {
    es: {
        header: {
            contact: 'Contacto',
            experience: 'Experiencia',
            home: 'Inicio',
            projects: 'Proyectos',
        },
        home: {
            welcome: '¡Hola!',
            welcomeSubtitle: `Te doy la bienvenida a mi
            portfolio`,
        }
    },
    en: {
        header: {
            contact: 'Contact',
            experience: 'Experience',
            home: 'Home',
            projects: 'Projects',
        },
        home: {
            welcome: 'Hello!',
            welcomeSubtitle: `Let me welcome you to my 
            portfolio`,
        }
    },
}

export const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    messages,
})