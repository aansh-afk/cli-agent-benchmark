const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', '..', 'todos.json');

let todos = [];

const loadTodos = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    todos = JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      // file doesn't exist, start with empty array
      todos = [];
    } else {
      throw err;
    }
  }
};

const saveTodos = () => {
  fs.writeFileSync(dbPath, JSON.stringify(todos, null, 2));
};

loadTodos();

module.exports = {
  todos,
  saveTodos
};
