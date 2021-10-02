import { useState, useEffect, Fragment } from "react";
import {
    getTodos,
    updateTodo,
} from "../models/todoApi";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { todo } from "../interfaces/todo.interface"
import { todoState } from "../enums/todo.state.enum"
import { Button, IconButton, Snackbar, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

const Todos = () => {
    const [todo, setTodo] = useState<todo[]>([]);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    useEffect(() => {
        getTodoList();
    }, []);

    async function getTodoList() {
        (async () => {
            try {
                const todos = await getTodos() as todo[];
                if (todos.length != 0)
                    setTodo(todos);
            } catch (err) {
                console.log("get todos error in todos.tsx" + err);
                setOpenSnackBar(true);
            }
        })();
    }

    const handleStatusChange = async (todoItem: todo) => {
        try {
            let updatedTodo = await updateTodo(todoItem) as todo;
            const updatedTodoList = todo.map((mTodo: todo) => {
                if (mTodo.id === updatedTodo.id) {
                    mTodo = updatedTodo;
                    return mTodo;
                } else return mTodo;
            });
            setTodo(updatedTodoList);
        } catch (err) {
            console.log("update todos error in todos.tsx" + err);
            setOpenSnackBar(true);
        }

    }

    const handleClose = () => {
        setOpenSnackBar(false);
    };
    
    const action = (
        <Fragment>
            <Button color="secondary" size="small" onClick={() => handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
            ></IconButton>
            <CloseIcon fontSize="small" onClick={handleClose} />
        </Fragment>
    );



    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell width="30%">Todos</TableCell>
                            <TableCell>Status&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todo.map((row: todo) => (
                            <TableRow
                                key={row.id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                {row.status === todoState.Pending ? (
                                    <TableCell component="th" scope="row" width="30%">
                                        {row.text}
                                    </TableCell>
                                ) : (
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{ textDecorationLine: "line-through" }}
                                    >
                                        {row.text}
                                    </TableCell>
                                )}
                                <TableCell onClick={() => handleStatusChange(row)}>
                                    {row.status}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Error from the server"
                action={action}
            />
        </div>

    )
}

export default Todos;