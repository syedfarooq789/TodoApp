const { readJsonFile, updateJsonFile } = require("./JsonFileOp");

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
        const item = await updateJsonFile(todoId, req.body.status);
        res.send(item);
    } catch (e) {
        console.log("update to todos error", e);
    }
};
