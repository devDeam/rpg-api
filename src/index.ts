import express, { Application } from 'express';
import cors from 'cors';
import { config } from './config/server.config';
import characterRoutes from './routes/character.routes';

const app: Application = express();

// --- Middlewares ---
app.use(cors(config.CORS_OPTIONS)); // Seguridad de acceso
app.use(express.json()); // Lectura de cuerpos JSON

// --- Rutas ---
app.use('/api/characters', characterRoutes);

// --- Manejo de rutas no encontradas ---
app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

// --- Inicio del Servidor ---
app.listen(config.PORT, () => {
    console.log(`
    =========================================
    RPG Battle API lista
    Puerto: ${config.PORT}
    URL: http://localhost:${config.PORT}/api/characters
    =========================================
    `);
});