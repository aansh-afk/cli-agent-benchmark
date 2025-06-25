# CLI Agent Coder Grading Rubric

## Overall Scoring (130 points total)

### Task Completion (85 points)
- Task 0: Codebase Exploration (15 points)
- Task 1: Bug Fixes & Error Handling (20 points)
- Task 2: Multi-File Refactoring (20 points)  
- Task 3: Advanced Features (25 points)
- Task 4: Testing & Quality (15 points)
- Task 5: Performance & Security (20 points)
- Task 6: Documentation & Tooling (15 points)

### Tool Usage & Efficiency (45 points)
- Tool Selection & Proficiency (15 points)
- Concurrent Operations (10 points)
- Error Recovery & Adaptation (10 points)
- Context Management (10 points)

## Detailed Grading Criteria

### A. Task-Specific Scoring

#### Task 0: Codebase Exploration (15 points)
- **File Discovery (3 pts)**
  - 3: Uses glob efficiently to find all .js files
  - 2: Uses ls/find but less efficient
  - 0: Manually searches directories

- **Pattern Search (3 pts)**
  - 3: Uses grep with proper regex for TODOs
  - 2: Basic search, misses some patterns
  - 0: No systematic search performed

- **Dependency Analysis (3 pts)**
  - 3: Reads package.json, identifies missing deps
  - 2: Checks dependencies but incomplete
  - 0: Doesn't analyze dependencies

- **Security Analysis (3 pts)**
  - 3: Systematic search for vulnerabilities
  - 2: Finds some issues
  - 0: No security analysis

- **Documentation Verification (3 pts)**
  - 3: Cross-references docs with actual code
  - 2: Partial verification
  - 0: Doesn't verify documentation

#### Task 1: Bug Fixes & Error Handling (20 points)
- **ID Generation Fix (5 pts)**
  - 5: Uses proper ID generation (UUID or max+1)
  - 3: Partially fixes but edge cases remain
  - 0: Doesn't identify or fix the issue

- **404 Error Handling (5 pts)**
  - 5: Proper 404 with error message
  - 3: Returns 404 but no message
  - 0: No error handling added

- **PUT Crash Fix (5 pts)**
  - 5: Validates existence before update
  - 3: Prevents crash but poor UX
  - 0: Doesn't fix the crash

- **Input Validation (4 pts)**
  - 4: Implements validators.js properly
  - 2: Basic validation inline
  - 0: No validation added

- **Database Persistence (4 pts)**
  - 4: Fixes data loss issue completely
  - 2: Identifies issue but incomplete fix
  - 0: Doesn't address persistence

#### Task 2: Multi-File Refactoring (20 points)
- **Data Access Layer (4 pts)**
  - 4: Clean models/todo.js implementation
  - 2: Basic extraction
  - 0: No data layer created

- **Service Layer (4 pts)**
  - 4: Proper business logic separation
  - 2: Partial service implementation
  - 0: No service layer

- **Environment Variables (4 pts)**
  - 4: Dotenv integrated, .env used properly
  - 2: Basic env var usage
  - 0: No environment support

- **Error Classes (4 pts)**
  - 4: Custom error classes with proper handling
  - 2: Basic error improvements
  - 0: No custom errors

- **Async Middleware (4 pts)**
  - 4: Proper async error handling
  - 2: Partial async support
  - 0: No async improvements

#### Task 3: Advanced Features (25 points)
- **Pagination (5 pts)**
  - 5: Fully working with metadata
  - 3: Basic pagination works
  - 0: Not implemented

- **Filtering (5 pts)**
  - 5: Filters by completed status
  - 3: Attempts but has bugs
  - 0: Not implemented

- **Search (5 pts)**
  - 5: Case-insensitive title search
  - 3: Basic search works
  - 0: Not implemented

- **PATCH Endpoint (5 pts)**
  - 5: Partial updates work correctly
  - 3: Implemented but overwrites
  - 0: Not implemented

- **Batch Operations (4 pts)**
  - 4: Batch update endpoint works
  - 2: Basic implementation
  - 0: Not implemented

- **Soft Delete (4 pts)**
  - 4: Proper soft delete with filtering
  - 2: Basic delete flag
  - 0: Not implemented

- **Categories/Tags (4 pts)**
  - 4: Full tag system with filtering
  - 2: Basic tag support
  - 0: Not implemented

#### Task 4: Testing & Quality (15 points)
- **Test Setup (3 pts)**
  - 3: Framework configured properly
  - 2: Setup but not working
  - 0: No test setup

- **Test Coverage (7 pts)**
  - 7: 5+ endpoints with good tests
  - 4: 3-4 endpoints tested
  - 0: No tests written

- **Edge Cases (3 pts)**
  - 3: Tests invalid inputs/errors
  - 2: Some edge cases covered
  - 0: Only happy path tests

- **Test Scripts (2 pts)**
  - 2: npm test works, coverage reports
  - 0: No test script added

- **CI/CD (2 pts)**
  - 2: GitHub Actions workflow created
  - 0: No CI/CD setup

#### Task 5: Performance & Security (20 points)
- **Rate Limiting (3 pts)**
  - 3: Properly configured limiter
  - 2: Basic implementation
  - 0: Not implemented

- **Request Limits (3 pts)**
  - 3: Body size limits configured
  - 0: Not implemented

- **CORS (3 pts)**
  - 3: CORS properly configured
  - 2: Basic CORS added
  - 0: Not implemented

- **Authentication (3 pts)**
  - 3: API key auth works
  - 2: Basic auth attempted
  - 0: Not implemented

- **API Versioning (3 pts)**
  - 3: Proper versioning implemented
  - 0: Not implemented

- **Caching (3 pts)**
  - 3: GET request caching implemented
  - 2: Basic caching attempt
  - 0: No caching

- **Health Check (2 pts)**
  - 2: Health endpoint with status info
  - 0: Not implemented

#### Task 6: Documentation & Tooling (15 points)
- **API Documentation (4 pts)**
  - 4: All endpoints documented
  - 2: Partial documentation
  - 0: No documentation

- **Examples (3 pts)**
  - 3: Clear request/response examples
  - 2: Some examples provided
  - 0: No examples

- **Error Documentation (2 pts)**
  - 2: Error codes documented
  - 0: No error documentation

- **JSDoc Comments (3 pts)**
  - 3: Comprehensive JSDoc coverage
  - 2: Some functions documented
  - 0: No JSDoc comments

- **Tooling Setup (3 pts)**
  - 3: ESLint + Prettier configured
  - 2: One tool configured
  - 0: No tooling setup

- **NPM Scripts (2 pts)**
  - 2: Useful scripts added
  - 0: No additional scripts

- **OpenAPI/Postman (3 pts)**
  - 3: Full API spec or collection
  - 2: Basic documentation
  - 0: Not created

### B. Tool Usage & Efficiency Scoring

#### Tool Selection & Proficiency (15 points)
- **15 pts**: Always uses optimal tool for task, demonstrates mastery
- **12 pts**: Good tool selection, efficient usage
- **8 pts**: Basic tool usage, some poor choices
- **4 pts**: Struggles with tool selection
- **0 pts**: Poor tool usage throughout

#### Concurrent Operations (10 points)
- **10 pts**: Maximizes parallelism, batches operations efficiently
- **7 pts**: Good use of concurrent operations
- **4 pts**: Some parallel operations
- **0 pts**: Everything sequential, inefficient

#### Error Recovery & Adaptation (10 points)
- **10 pts**: Handles all tool errors gracefully, adapts approach
- **7 pts**: Good error recovery, alternative approaches
- **4 pts**: Basic error handling
- **0 pts**: Fails on errors, no recovery

#### Context Management (10 points)
- **10 pts**: Excellent memory of findings, builds on previous work
- **7 pts**: Good context retention
- **4 pts**: Some context loss
- **0 pts**: Constantly re-reads, poor memory

## Bonus Points (up to 10 extra)
- **Performance Optimizations**: Database indexing, caching (+3)
- **Advanced Features**: Sorting, field selection (+3)
- **Code Organization**: Clean architecture patterns (+2)
- **Extra Testing**: Integration tests, CI setup (+2)

## Tool Usage Examples to Look For

### Excellent (Full Points)
- Uses `glob` to find all .js files: `glob("**/*.js")`
- Parallel file reads: Multiple `read` calls in one message
- Efficient grep patterns: `grep("TODO|FIXME|XXX", "**/*.js")`
- Batch edits with `MultiEdit` for related changes
- Concurrent bash commands for independent operations

### Good (Partial Points)
- Uses appropriate tools but not optimally
- Some parallel operations
- Recovers from errors with alternative approaches
- Good file organization

### Poor (Low/No Points)
- Reads files one by one sequentially
- Uses bash `find` instead of glob
- No error handling
- Redundant operations
- Poor tool selection

## Grade Conversion
- **117-130+**: A+ (Exceptional)
- **104-116**: A (Excellent)
- **91-103**: B (Good)
- **78-90**: C (Satisfactory)
- **65-77**: D (Needs Improvement)
- **Below 65**: F (Unsatisfactory)

## Evaluation Tips
1. Run the code to verify functionality
2. Check for regression issues
3. Evaluate code readability and maintainability
4. Consider time efficiency (30-minute limit)
5. Note creative solutions or improvements
6. Assess how the agent handles ambiguity
7. Check if backwards compatibility is maintained
8. Evaluate commit message quality

## Common Deductions
- **Breaking existing functionality**: -5 to -10 points
- **Not following constraints**: -3 to -5 points
- **Poor code quality**: -2 to -5 points
- **Incomplete implementations**: Partial credit only
- **No error handling**: -2 to -3 points per endpoint