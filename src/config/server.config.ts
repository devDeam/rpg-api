import dotenv from 'dotenv';

// Carga las variables de entorno desde un archivo .env si existe
dotenv.config();

export const config = {
    PORT: process.env.PORT || 3000,
    CORS_OPTIONS: {
        origin: '*', // Permite solicitudes desde cualquier origen
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
};