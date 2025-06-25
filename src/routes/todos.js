const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all todos
router.get('/', (req, res) => {
  res.json(db.todos);
});

// Get single todo
router.get('/:id', (req, res) => {
  const todo = db.todos.find(t => t.id == req.params.id);
  res.json(todo);
});

// Create todo
router.post('/', (req, res) => {
  const newTodo = {
    id: db.todos.length + 1,
    title: req.body.title,
    completed: false
  };
  db.todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update todo
router.put('/:id', (req, res) => {
  const todo = db.todos.find(t => t.id == req.params.id);
  todo.title = req.body.title;
  todo.completed = req.body.completed;
  res.json(todo);
});

// Delete todo
router.delete('/:id', (req, res) => {
  db.todos = db.todos.filter(t => t.id != req.params.id);
  res.status(204).send();
});

module.exports = router;
