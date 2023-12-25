// src/routes/todoRouter.ts
import express from 'express';
import * as todoController from '../controllers/todo-controller';

const router = express.Router();

// GET a specific todo by ID for a user
router.get('/:userId/:todoId', todoController.getToDoById);

// POST - Create a new todo for a user
router.post('/:userId', todoController.createToDo);

// PUT - Update a todo for a user
router.put('/:userId/:todoId', todoController.updateToDo);

// // DELETE - Delete a todo for a user
router.delete('/:userId/:todoId', todoController.deleteToDo);

export default router;
