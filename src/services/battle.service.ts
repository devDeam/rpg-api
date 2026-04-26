import { Character, BattleResult } from '../interfaces/character.interface';

export const BattleService = {
    /**
     * LÓGICA DE COMBATE DETALLADA:
     * 1. PODER DE ATAQUE: Se calcula sumando la Fuerza (física) y la Magia (especial).
     * 2. DEFENSA: La Agilidad actúa como evasión y el Conocimiento como reducción de daño táctico.
     * 3. SUPERIORIDAD: Si un personaje tiene más Conocimiento, encuentra puntos débiles (Bonus 1.15x).
     */
    simulate: (p1: Character, p2: Character): BattleResult => {
        
        const calculatePower = (atk: Character, def: Character): number => {
            const baseAtk = (atk.stats.fuerza * 1.5) + (atk.stats.magia * 1.2);
            const baseDef = (def.stats.agilidad * 0.8) + (def.stats.conocimiento * 0.4);
            
            // Verificación de bono por estrategia (Conocimiento superior)
            const strategyBonus = atk.stats.conocimiento > def.stats.conocimiento ? 1.15 : 1.0;

            // Daño final mitigado, mínimo 0.
            return Math.max(0, (baseAtk - baseDef) * strategyBonus);
        };

        const score1 = calculatePower(p1, p2);
        const score2 = calculatePower(p2, p1);

        let winner: string;
        let summary: string;

        if (score1 > score2) {
            winner = p1.nombre;
            summary = `${p1.nombre} superó en batalla a ${p2.nombre} gracias a sus atributos.`;
        } else if (score2 > score1) {
            winner = p2.nombre;
            summary = `${p2.nombre} logró superar en combate mediante una ejecución superior.`;
        } else {
            winner = "Empate";
            summary = "La batalla ha sido legendaria, pero ninguno de los guerreros pudo ceder terreno.";
        }

        return {
            ganador: winner,
            puntajes: {
                [p1.nombre]: Number(score1.toFixed(2)),
                [p2.nombre]: Number(score2.toFixed(2))
            },
            resumen: summary
        };
    }
};