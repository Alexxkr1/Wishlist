const Wish = require('../getWish')
const date = require('../getDate');

exports.getMainPage = (request, response) => {
    let today = date.getDate();
    response.render('index', ) 
}

exports-date.GetDate = (req, res) => {
    let weekday = date.GetDate()
    res.send(today);
}

exports-date.getWeekDay = (req, res) => {
    let weekday = date.getWeekDay()
    res.send(weekday);
}
exports.postWish = (req, res) => {
    console.log(red.body.userWish);
    const newWish = new Wish(red.body.userWish)
    newWish.saveWish();

    res.redirect('/');
}
