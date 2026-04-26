/**
 * Definición de tipos permitidos para las razas del juego.
 */
export type Race = 'Humano' | 'Elfo' | 'Orco' | 'Enano';

/**
 * Atributos estadisticos que influyen en el combate.
 */
export interface Stats {
    fuerza: number;
    agilidad: number;
    magia: number;
    conocimiento: number;
}

/**
 * Representación principal de un Personaje.
 */
export interface Character {
    id: string;
    nombre: string;
    colorPiel: string;
    raza: Race;
    stats: Stats;
}

/**
 * Estructura de respuesta detallada para el simulador de batalla.
 */
export interface BattleResult {
    ganador: string;
    puntajes: {
        [key: string]: number;
    };
    resumen: string;
}