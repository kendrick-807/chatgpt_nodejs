
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const chatRoute = require('./chatRoute');

app.use("/api",chatRoute);
app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});



app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});