const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', (req, res)=>{
    res.render('index.ejs')
});

router.post('/add', (req, res) =>{
    console.group(new Task(req.body));
   
    res.send('received')
});

module.exports = router;