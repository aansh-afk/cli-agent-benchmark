const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', '..', 'todos.json');

const getAll = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return [];
    }
    throw err;
  }
};

const saveAll = (todos) => {
  fs.writeFileSync(dbPath, JSON.stringify(todos, null, 2));
};

const findById = (id) => {
  const todos = getAll();
  return todos.find(t => t.id == id);
};

const create = (todo) => {
  const todos = getAll();
  const newTodo = {
    id: todos.reduce((maxId, t) => Math.max(t.id, maxId), 0) + 1,
    ...todo,
    completed: false,
  };
  todos.push(newTodo);
  saveAll(todos);
  return newTodo;
};

const update = (id, updates) => {
  const todos = getAll();
  const todo = todos.find(t => t.id == id);
  if (!todo) {
    return null;
  }
  Object.assign(todo, updates);
  saveAll(todos);
  return todo;
};

const remove = (id) => {
  let todos = getAll();
  const initialLength = todos.length;
  todos = todos.filter(t => t.id != id);
  if (todos.length === initialLength) {
    return false;
  }
  saveAll(todos);
  return true;
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  remove,
};
