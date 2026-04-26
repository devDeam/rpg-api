import { Character } from '../interfaces/character.interface';

// Simulacion de una base de datos en memoria para almacenar los personajes

export const charactersDB: Character[] = [
    {
        id: "0",
        nombre: "Aragorn",
        colorPiel: "Bronceado",
        raza: "Humano",
        stats: {
            fuerza: 85,
            agilidad: 75,
            magia: 20,
            conocimiento: 90
        }
    },
    {
        id: "1",
        nombre: "Legolas",
        colorPiel: "Pálido",
        raza: "Elfo",
        stats: {
            fuerza: 60,
            agilidad: 95,
            magia: 40,
            conocimiento: 85
        }
    },
    {
        id: "2",
        nombre: "Gimli",
        colorPiel: "Robusto",
        raza: "Enano",
        stats: {
            fuerza: 90,
            agilidad: 30,
            magia: 5,
            conocimiento: 70
        }
    },
    {
        id: "3",
        nombre: "Thrall",
        colorPiel: "Verde",
        raza: "Orco",
        stats: {
            fuerza: 80,
            agilidad: 50,
            magia: 95,
            conocimiento: 88
        }
    }
];


// Contador global para IDs autoincrementales inicia en 4 porque ya tenemos 4 personajes predefinidos (0, 1, 2, 3).
// Cada vez que se crea un nuevo personaje, se incrementa este contador para asignar un ID único.
export let lastId = 4;

// Función auxiliar para obtener el siguiente ID
// y aumentar el contador.

export const getNextId = (): string => {
    const currentId = lastId.toString();
    lastId++;
    return currentId;
};