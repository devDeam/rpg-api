# RPG de batalla API 

Esta es una API REST profesional desarrollada con **Node.js**, **Express** y **TypeScript**. El proyecto permite la gestión de personajes de un juego de rol (RPG) y cuenta con un motor de simulación de batallas basado en atributos estratégicos.

## Características

- **Arquitectura de Capas**: Separación clara entre Rutas, Controladores, Servicios y Modelos.
- **TypeScript Estricto**: Tipado completo para interfaces y respuestas de la API.
- **CRUD Completo**: Gestión total de personajes (Crear, Leer, Actualizar, Eliminar).
- **ID Autoincremental**: Sistema de identificación automática para fácil manejo en Postman.
- **Motor de Batalla**: Lógica avanzada que pondera fuerza, magia, agilidad y conocimiento.
- **CORS Habilitado**: Configurado para permitir peticiones desde frontends externos.

---

## Tecnologías Utilizadas

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Herramientas de Dev**: `ts-node-dev` para recarga automática.

---

## Estructura del Proyecto

src/
├── config/             # Configuración del servidor (Puerto, CORS)
├── controllers/        # Controladores funcionales (Manejo de req/res)
├── interfaces/         # Contratos de datos y tipos de TypeScript
├── models/             # Base de datos en memoria y motor de IDs
├── routes/             # Definición de rutas y endpoints REST
├── services/           # Lógica de negocio (Simulador de combate)
└── index.ts            # Punto de entrada de la aplicación

---

## Instalación y Ejecución

Clonar el repositorio:

Bash
git clone <tu-url-del-repo>
cd rpg-api
Instalar dependencias:

Bash
npm install
Iniciar en modo desarrollo (con auto-recarga):

Bash
npm run dev
El servidor se activará en: http://localhost:3000

---

## Lógica de Combate

El sistema de batalla no es aleatorio; se basa en un cálculo ponderado de los atributos de los personajes:

Poder de Ataque: Se calcula multiplicando la Fuerza (daño físico) y la Magia (daño místico).

Defensa/Evasión: Se resta daño basado en la Agilidad (capacidad de esquivar) y el Conocimiento (mitigación táctica).

Bono Estratégico: Si el atacante tiene un Conocimiento mayor que el defensor, recibe un multiplicador crítico de 1.15x.

---

## Endpoints de la API

Personajes (/api/characters)
GET / - Listar todos los personajes (incluye personajes de prueba).

GET /:id - Obtener un personaje específico.

POST / - Crear un nuevo personaje (ID automático).

PUT /:id - Actualizar estadísticas o datos.

DELETE /:id - Eliminar un personaje.

Batalla (/api/characters/battle)
POST / - Simular un enfrentamiento entre dos personajes.

Body requerido: { "id1": "0", "id2": "1" }

---

## Ejemplo de Objeto JSON para Postman

Para crear un personaje o actualizarlo, usa este formato:

JSON
{
    "nombre": "Galadriel",
    "colorPiel": "Blanco",
    "raza": "Elfo",
    "stats": {
        "fuerza": 30,
        "agilidad": 85,
        "magia": 100,
        "conocimiento": 95
    }
}

---

## Autor

*Daniel Almanza Martinez🇨🇴*


---
