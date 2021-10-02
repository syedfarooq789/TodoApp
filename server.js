const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const todoRouter = require("./todo/todo.routes");

app.use(cors())
app.use(express.json())

app.use("/todo", todoRouter);


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = app;
