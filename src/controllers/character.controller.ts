import { Request, Response } from 'express';
import { charactersDB, getNextId } from '../models/character.model';
import { BattleService } from '../services/battle.service';
import { Character } from '../interfaces/character.interface';

export const CharacterController = {
    getAll: (req: Request, res: Response): void => {
        res.status(200).json(charactersDB);
    },

    getById: (req: Request, res: Response): void => {
        const char = charactersDB.find(c => c.id === req.params.id);
        char ? res.status(200).json(char) : res.status(404).json({ message: "Personaje no encontrado" });
    },

    create: (req: Request, res: Response): void => {
        const newChar: Character = { id: getNextId(), ...req.body };
        charactersDB.push(newChar);
        res.status(201).json(newChar);
    },

    update: (req: Request, res: Response): void => {
        const index = charactersDB.findIndex(c => c.id === req.params.id);
        if (index === -1) {
            res.status(404).json({ message: "Personaje no existe" });
            return;
        }
        charactersDB[index] = { ...charactersDB[index], ...req.body };
        res.status(200).json(charactersDB[index]);
    },

    delete: (req: Request, res: Response): void => {
        const index = charactersDB.findIndex(c => c.id === req.params.id);
        const nombre = charactersDB[index]?.nombre || "desconocido";
        if (index === -1) {
            res.status(404).json({ message: "Personaje no encontrado" });
            return;
        }
        charactersDB.splice(index, 1);
        res.status(200).json({message: `Personaje ${nombre} eliminado` });
    },

    battle: (req: Request, res: Response): void => {
        const { id1, id2 } = req.body;
        const p1 = charactersDB.find(c => c.id === id1);
        const p2 = charactersDB.find(c => c.id === id2);

        if (!p1 || !p2) {
            res.status(404).json({ message: "IDs inválidos proporcionados" });
            return;
        }

        const result = BattleService.simulate(p1, p2);
        res.status(200).json(result);
    }
};