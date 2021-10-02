import axios from "axios";
import { todo } from "../interfaces/todo.interface"

const GET_TODO_URL = "http://localhost:5000/todo/todos";
const UPDATE_TODO_URL = `http://localhost:5000/api/update/todoItem/`

export const getTodos = async () => {
    try {
        const todoList = await axios.get(GET_TODO_URL);
        return todoList.data as todo[];
    } catch (err) {
        console.log("get todo error:", err);
    }
}


export const updateTodo = async (todo: todo) => {
    try {
        const item = { ...todo, status: todo.status === "Pending" ? "Done" : "Pending" }
        const updateTodo = await axios.put(
            UPDATE_TODO_URL + `${todo.id}`,
            item
        );
        return updateTodo.data as todo;
    } catch (err) {
        console.log("update todo error:", err);
    }
}
