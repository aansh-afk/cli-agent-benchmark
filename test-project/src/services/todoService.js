const Todo = require('../models/todo');

const getAllTodos = (options = {}) => {
  const { page = 1, limit = 10 } = options;
  const todos = Todo.getAll();

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = todos.slice(startIndex, endIndex);

  return {
    total: todos.length,
    pages: Math.ceil(todos.length / limit),
    currentPage: page,
    data: results,
  };
};

const getTodoById = (id) => {
  return Todo.findById(id);
};

const createTodo = (todo) => {
  return Todo.create(todo);
};

const updateTodo = (id, updates) => {
  return Todo.update(id, updates);
};

const deleteTodo = (id) => {
  return Todo.remove(id);
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
