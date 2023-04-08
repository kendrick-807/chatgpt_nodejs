
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const path = require("path")

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
const chatRoute = require('./chatRoute');
app.use("/api",chatRoute);
const getAns = require( './chatController');


// const mysql = require('mysql');
// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'kendrick123'
// });
//
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'");
//     con.query("flush privileges;")
//     connection.query("CREATE DATABASE mydb", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
//     });
// });


app.get("/", (req, res) => {
    console.log("hello!")
});

//
app.post("/register",  (req, res) => {
    const car = req.body;  // Probably unsafe to treat the entire body as a car object, but will do for the task
    console.log(car);

});

app.get('/ans',(req, res) => {
    let answer = getAns;
    console.log("Hi!" + answer);
    res.json(answer);
})




app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});