"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modules = void 0;
// Con esto podemos habilitar o deshabilitar modulos de la API
exports.modules = {
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
//# sourceMappingURL=config.js.map