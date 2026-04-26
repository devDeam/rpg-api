import { Router } from 'express';
import { CharacterController } from '../controllers/character.controller';

const router = Router();

router.get('/', CharacterController.getAll);
router.get('/:id', CharacterController.getById);
router.post('/', CharacterController.create);
router.put('/:id', CharacterController.update);
router.delete('/:id', CharacterController.delete);

// Ruta para la batalla entre dos personajes
router.post('/battle', CharacterController.battle);

export default router;