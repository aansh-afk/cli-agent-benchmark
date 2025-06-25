const { BadRequestError } = require('./errors');

const validateTodo = (req, res, next) => {
  if (!req.body.title || typeof req.body.title !== 'string') {
    return next(new BadRequestError('Invalid title'));
  }
  next();
};

module.exports = {
  validateTodo,
};