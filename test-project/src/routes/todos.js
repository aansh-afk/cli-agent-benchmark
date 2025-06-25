const express = require('express');
const router = express.Router();
const todoService = require('../services/todoService');
const { validateTodo } = require('../utils/validators');
const { NotFoundError } = require('../utils/errors');

// Get all todos
router.get('/', (req, res) => {
  const { page, limit } = req.query;
  const todos = todoService.getAllTodos({ page, limit });
  res.json(todos);
});

// Get single todo
router.get('/:id', (req, res, next) => {
  try {
    const todo = todoService.getTodoById(req.params.id);
    if (!todo) {
      throw new NotFoundError('Todo not found');
    }
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

// Create todo
router.post('/', validateTodo, (req, res) => {
  const newTodo = todoService.createTodo(req.body);
  res.status(201).json(newTodo);
});

// Update todo
router.put('/:id', validateTodo, (req, res, next) => {
  try {
    const todo = todoService.updateTodo(req.params.id, req.body);
    if (!todo) {
      throw new NotFoundError('Todo not found');
    }
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

// Delete todo
router.delete('/:id', (req, res, next) => {
  try {
    const deleted = todoService.deleteTodo(req.params.id);
    if (!deleted) {
      throw new NotFoundError('Todo not found');
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;