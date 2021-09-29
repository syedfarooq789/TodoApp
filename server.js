const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const todoRouter = require("./todo/todo.routes");
app.use(express.raw({ type: "application/json" }));


app.use("/todo", todoRouter);


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = app;
