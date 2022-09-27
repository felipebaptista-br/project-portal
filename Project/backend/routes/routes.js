var express = require('express');
var router = express.Router();
var data = require('../data/data.json');

router.get('/list', async (req, res) => {
    res.send(data);
});

module.exports = router;
