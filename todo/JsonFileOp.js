const fs = require("fs");
const JSON_FILE_NAME = "../todo.json";
const path = require("path");

module.exports = {
  updateJsonFile: async function (todoId, status) {
    try {
      const todos = await this.readJsonFile();
      const todoObj = JSON.parse(todos);
      const todoItem = todoObj.filter(item => item.id == todoId);
      todoItem[0].status = status;
      let todoJson = JSON.stringify(todoObj);
      this.writeToJsonFile(todoJson);
      return todoItem[0];
    } catch (e) {
      console.log("error update to json file", e);
    }
  },
  readJsonFile: async function () {
    try {
      const todos = await fs.readFileSync(path.resolve(__dirname, JSON_FILE_NAME), "utf8");
      return todos;
    } catch (e) {
      console.log("error reading from json file", e);
    }
  },
  writeToJsonFile: async function (todoJson) {
    try {
      await fs.writeFile(
        path.resolve(__dirname, JSON_FILE_NAME),
        todoJson,
        "utf8", function (err) {
          if (err) throw err;
          console.log('file updated');
        });
    } catch (e) {
      console.log("error writing to json file", e);
    }
  }

};
