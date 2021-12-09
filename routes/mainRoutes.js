const express = require('express');
const date = require('../getDate.js')
const router = express.Router();


router.get('/', (request, response) =>{
    response.render('index');
})

router.get('/getdate',(request, response) => {
    let today = date.getDate();
    response.send(today)
})

router.get('/getdate',(request, response) => {
    let today = date.getDate();
    response.send(today)
})

router.get('/weekday',(request, response) => {
    let weekday = date.getWeekDay();
    response.send(weekday)
})


module.exports = router;