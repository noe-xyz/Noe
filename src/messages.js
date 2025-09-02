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
        },
        projects: {
            p1_title: 'Proyecto 1',
            p1_description: 'Descripción 1',
            p2_title: 'Proyecto 2',
            p2_description: 'Descripción 2',
        },
        title: {
            contact: 'Contacto',
            experience: 'Experiencia',
            projects: 'Proyectos',
        },
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
        },
        projects: {
            p1_title: 'Project 1',
            p1_description: 'Description 1',
            p2_title: 'Project 2',
            p2_description: 'Description 2',
        },
        title: {
            contact: 'Contact',
            experience: 'Experience',
            projects: 'Projects',
        },
    },
}

export const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    messages,
})