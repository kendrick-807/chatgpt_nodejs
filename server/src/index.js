
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const path = require("path")
const uuid = require('uuid-random');
const io = require('socket.io')
const { uniqueNamesGenerator, adjectives, colors, animals, names } = require('unique-names-generator');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
const chatRoute = require('./chatRoute');
app.use("/api",chatRoute);
const getAns = require( './chatController');

var chatRoomData = [];
var connectedClients = {};

app.get("/", (req, res) => {
    console.log("hello!")
});

//
// app.post('/message',  (req, res) => {
//     const car = req.body;  // Probably unsafe to treat the entire body as a car object, but will do for the task
//     console.log(car);
//
// });

app.get('/ans',(req, res) => {
    let answer = getAns;
    console.log("Hi!" + answer);
    res.json(answer);
})




app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});