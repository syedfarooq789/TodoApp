var express = require('express');
var router = express.Router();
var TodoController = require('./todo.controller');

/* GET all todos. */
router.get('/todos', TodoController.getTodos);
/* Update a todo. */
router.put('/:todoId', TodoController.updateTodo);

module.exports = router;
