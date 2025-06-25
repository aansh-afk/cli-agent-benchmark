# CLI Agent Coder Benchmark

## Project Setup
You'll be working with a multi-file Express.js REST API for a todo application. The codebase is distributed across multiple files with several intentional issues and missing features. You'll need to explore the codebase, understand its structure, and make improvements.

## Initial Codebase Structure
```
todo-api/
├── src/
│   ├── index.js
│   ├── routes/
│   │   └── todos.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── utils/
│   │   └── validators.js
│   └── config/
│       └── database.js
├── tests/
│   └── todos.test.js (empty)
├── docs/
│   └── README.md (outdated)
├── package.json
├── .env.example
└── .gitignore
```

### `/src/index.js`
```javascript
const express = require('express');
const todoRoutes = require('./routes/todos');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### `/src/routes/todos.js`
```javascript
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
```

### `/src/config/database.js`
```javascript
// In-memory database
let todos = [
  { id: 1, title: 'Learn Node.js', completed: false },
  { id: 2, title: 'Build API', completed: true }
];

module.exports = { todos };
```

### `/src/middleware/errorHandler.js`
```javascript
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};
```

### `/src/utils/validators.js`
```javascript
// TODO: Implement validation functions
```

### `/package.json`
```json
{
  "name": "todo-api",
  "version": "1.0.0",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "dotenv": "^16.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}
```

### `/.env.example`
```
PORT=3000
API_KEY=your-api-key-here
NODE_ENV=development
```

### `/docs/README.md`
```markdown
# Todo API

This is a simple todo API built with Express.js.

## Endpoints

- GET /todos - Get all todos
- POST /todos - Create a new todo

(This documentation is outdated and incomplete)
```

### `/.gitignore`
```
node_modules/
.env
*.log
.DS_Store
```

## Additional Context

1. **Hidden Bug**: There's a critical bug in the database module that causes data loss when the server restarts. You'll need to find and fix it.

2. **Missing Files**: Some files referenced in the code don't exist yet and need to be created.

3. **Performance Issue**: There's a performance bottleneck when dealing with large datasets (simulate with 10,000 todos).

4. **Security Vulnerability**: The API has several security issues including SQL injection-like vulnerabilities (even though it's using in-memory storage).

## Tasks

### Task 0: Codebase Exploration (Tool Testing - 15 points)
1. **File Discovery**: Find all JavaScript files in the project
2. **Pattern Search**: Search for all TODO comments across the codebase
3. **Dependency Analysis**: Identify all npm packages used and check for missing dependencies
4. **Code Analysis**: Find potential security vulnerabilities (e.g., eval, unvalidated inputs)
5. **Documentation Check**: Verify which documented endpoints actually exist in the code

### Task 1: Bug Fixes & Error Handling (20 points)
1. Fix the ID generation bug in POST /todos (hint: what happens when todos are deleted?)
2. Add proper error handling for GET /todos/:id when todo not found
3. Fix the crash in PUT /todos/:id when todo doesn't exist
4. Fix the database persistence issue (data loss on restart)
5. Implement the missing validation functions in validators.js

### Task 2: Multi-File Refactoring (20 points)
1. Create a proper data access layer (models/todo.js)
2. Implement a service layer (services/todoService.js)
3. Add environment variable support using dotenv
4. Create custom error classes (utils/errors.js)
5. Implement async error handling middleware

### Task 3: Advanced Features (25 points)
1. Add pagination with metadata (total, pages, current page)
2. Implement sorting (by created date, title, completion)
3. Add field filtering (select specific fields to return)
4. Create a batch update endpoint (PATCH /todos/batch)
5. Add soft delete functionality with a "deleted" flag
6. Implement todo categories/tags with filtering

### Task 4: Testing & Quality (15 points)
1. Set up Jest with proper configuration
2. Create unit tests for service layer
3. Add integration tests for API endpoints
4. Implement test data generators
5. Add code coverage reporting
6. Create a GitHub Actions workflow file

### Task 5: Performance & Security (20 points)
1. Implement caching for GET requests
2. Add database indexing simulation for performance
3. Create rate limiting per API key
4. Add request validation middleware
5. Implement API versioning (/api/v1/todos)
6. Add request/response compression
7. Create a health check endpoint

### Task 6: Documentation & Tooling (15 points)
1. Generate OpenAPI/Swagger documentation
2. Create a Postman collection
3. Add JSDoc comments to all functions
4. Create a CONTRIBUTING.md file
5. Set up ESLint and Prettier configs
6. Create npm scripts for common tasks

## Tool Usage Scenarios to Test

### Concurrent Operations
- Read multiple files in parallel
- Search for patterns while reading files
- Run multiple bash commands simultaneously

### Complex File Manipulation
- Create new directories and files
- Move/rename files
- Update multiple files in sequence
- Handle file conflicts

### Search and Analysis
- Use grep with complex regex patterns
- Find files by extension across nested directories
- Search and replace across multiple files
- Analyze code patterns

### Error Recovery
- Handle missing files gracefully
- Recover from failed commands
- Deal with permission issues
- Manage conflicting changes

### Context Management
- Track changes across multiple files
- Remember previous findings
- Build upon earlier discoveries
- Maintain consistency across edits

## Constraints
- Use only npm packages (no yarn/pnpm)
- Maintain backwards compatibility for existing endpoints
- All new files must follow the existing structure
- Handle all errors gracefully
- Use ES6+ features appropriately
- Total time limit: 45 minutes

## Expected Tool Usage
Agents should demonstrate proficiency with:
- File system navigation (ls, glob)
- Content search (grep with regex)
- File reading (handling multiple files)
- File editing (single and batch edits)
- File creation (new modules and tests)
- Command execution (npm install, test runs)
- Error handling and recovery
- Parallel operations for efficiency

## Bonus Challenges (Optional)
1. **Memory Leak**: Find and fix the memory leak in the current implementation
2. **Race Condition**: Identify and fix the race condition in concurrent updates
3. **Performance**: Optimize the search functionality for 100k+ todos
4. **Security**: Implement proper input sanitization to prevent XSS-like attacks
5. **Architecture**: Propose and implement a plugin system for extending functionality