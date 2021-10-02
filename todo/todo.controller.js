const { readJsonFile, updateJsonFile } = require("./JsonFileOp");
const status = {
    Pending: 'Pending',
    Done: 'Done'
}

exports.getTodos = async function (req, res, next) {
    try {
        const todos = await readJsonFile();
        const todoList = JSON.parse(todos);
        res.send(todoList);
    } catch (e) {
        console.log("get todos error", e);
        next(e)
    }
};


exports.updateTodo = async function (req, res, next) {
    try {
        const todoId = req.params.todoId;
        const isStatusValid = req.body.status === status.Done || req.body.status === status.Pending ? true : false;
        if (isStatusValid) {
            const item = await updateJsonFile(todoId, req.body.status);
            res.send(item);
        } else {
            next("Invalid todo Status");
        }
    } catch (e) {
        console.log("update to todos error", e);
        next(e)
    }
};
