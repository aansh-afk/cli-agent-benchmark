# Internet & Documentation Research Test Examples

## Example Test Scenarios

### 1. Express.js Error Handling Research
**Task**: "The current error handling is basic. Research the latest Express.js best practices for error handling and implement a production-ready solution."

**Expected Agent Behavior**:
- Use WebSearch to find "Express.js error handling best practices 2024"
- Use WebFetch to access official Express.js documentation
- Compare multiple sources (official docs, popular blogs, Stack Overflow)
- Implement async error handling middleware
- Add custom error classes
- Include error logging

**Good Response**:
```javascript
// Agent should find and implement patterns like:
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

// Async error wrapper from current best practices
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
```

### 2. OWASP Security Audit
**Task**: "Perform a security audit based on OWASP Top 10 2023. Find and fix any vulnerabilities."

**Expected Agent Behavior**:
- WebSearch for "OWASP Top 10 2023 Node.js Express"
- Research each vulnerability category
- Identify applicable vulnerabilities in the codebase
- Implement fixes with source citations

**Example Findings**:
- SQL Injection (even with in-memory DB, principle applies)
- Missing input validation
- No rate limiting
- Missing security headers
- No authentication

### 3. JWT Authentication Research
**Task**: "Research current JWT best practices and implement secure authentication."

**Expected Agent Behavior**:
- Search for "JWT best practices 2024"
- Find refresh token patterns
- Research JWT security vulnerabilities
- Implement with proper secret management

### 4. Database Migration Research
**Task**: "The in-memory database isn't suitable for production. Research and recommend a database solution with implementation plan."

**Expected Agent Behavior**:
- Compare PostgreSQL vs MongoDB for the use case
- Find official documentation for chosen database
- Research Node.js drivers and ORMs
- Provide migration strategy

### 5. Performance Optimization Research
**Task**: "Research Node.js performance best practices and implement optimizations."

**Expected Agent Behavior**:
- Search for "Node.js performance optimization 2024"
- Research clustering vs worker threads
- Find benchmarking tools
- Implement based on findings

## Evaluation Criteria

### Excellent (Full Points)
- Uses multiple research sources
- Cites sources in comments or documentation
- Implements current best practices (not outdated ones)
- Cross-references information for accuracy
- Explains why certain approaches were chosen

### Good (Partial Points)
- Researches but uses single source
- Implements working solution but not latest practices
- Some citation of sources

### Poor (Low/No Points)
- No research performed
- Implements without checking current practices
- Uses outdated patterns
- No source attribution

## Sample WebSearch Queries to Expect

1. "Express.js error handling best practices 2024"
2. "OWASP Top 10 2023 Node.js"
3. "JWT refresh token implementation Node.js"
4. "PostgreSQL vs MongoDB for REST API"
5. "Node.js clustering vs worker threads performance"
6. "Express.js rate limiting DDoS protection"
7. "Node.js APM tools comparison"
8. "REST API vs GraphQL 2024"

## Sample WebFetch URLs to Expect

1. https://expressjs.com/en/guide/error-handling.html
2. https://owasp.org/www-project-top-ten/
3. https://jwt.io/introduction
4. https://www.postgresql.org/docs/current/
5. https://nodejs.org/api/cluster.html
6. https://github.com/nfriedly/express-rate-limit

## Common Pitfalls to Avoid

1. **Using outdated information**: Agent should check publication dates
2. **Single source dependency**: Should cross-reference multiple sources
3. **Copy-paste without understanding**: Should adapt code to project context
4. **Missing attribution**: Should cite sources for implemented solutions
5. **Not verifying compatibility**: Should check package versions

## Integration with Existing Tasks

These research tasks should complement the coding tasks:
- Research findings should be implemented in the code
- Documentation should reference sources
- Comments should explain why certain patterns were chosen
- README should include links to relevant documentation