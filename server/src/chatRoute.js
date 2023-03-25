const  express = require("express");
const router = express.Router();
const chatController = require("./chatController");
router.post("/getAnswer", (req, res) => {
    let z = req.body.question;
    let q = JSON.parse(JSON.stringify(req.body.question));
    console.log(z);
    chatController.getAnswer(q).then(data => res.json(data)).catch(err => res.send(err))
});


module.exports = router;