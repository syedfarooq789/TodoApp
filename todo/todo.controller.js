const { readJsonFile } = require("./JsonFileOp");

exports.getTodos = async function (req, res) {
    try {
        const todos = await readJsonFile();
        const todoList = JSON.parse(todos);
        res.send(todoList);
    } catch (e) {
        console.log("get todos error", e);
    }
};


exports.updateTodo = async function (req, res) {
    try {
        const todoId = req.params.todoId;
        const status = JSON.parse(req.body).status;
        const item = await JsonFileOp.updateJsonFile(todoId, status);
        res.send(item);
    } catch (e) {
        console.log("update to todos error", e);
    }
};