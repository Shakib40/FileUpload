const express = require("express");

const userController = require("./controllers/user.controller");
const studentController = require("./controllers/student.controller");
const evalController = require("./controllers/eval.controller");
const topicController = require("./controllers/topic.controller");


const app = express();

app.use(express.json());


app.use("/users",userController);
app.use("/student",studentController);
app.use("/eval",evalController);
app.use("/topic",topicController);

module.exports = app;

