const express = require("express");
var app = express();
const port = process.env.PORT || 5000;
app.use(express.raw({ type: "application/json" }));





// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = app;