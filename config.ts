// Con esto podemos habilitar o deshabilitar modulos de la API
export const modules = {
    auth: {
        active: true,
        path: './modules/auth/routes',
        route: '/modules/auth'
    },
    personas: {
        active: true,
        path: './modules/personas/routes',
        route: '/modules/personas'
    },
    cursos: {
        active: true,
        path: './modules/cursos/routes',
        route: '/modules/cursos'
    }
};