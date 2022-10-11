var express = require('express');
var router = express.Router();
const fs = require("fs");
var data = require('../data/data.json');

router.get('/list', async (req, res) => {
    res.send(data);
});

router.post('/add', async (req, res) => {
    const result = req.body
    data.push(result)
    fs.writeFile("./data/data.json", JSON.stringify(data), err => {
         if (err) throw err; 
        console.log("Done writing")
    })
    res.send('ok')
})

module.exports = router;
