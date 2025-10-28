import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateId, validateTask } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:id', validateId, taskController.getTaskByIdHandler);
router.post('/', validateTask, taskController.createTask);

export default router;
