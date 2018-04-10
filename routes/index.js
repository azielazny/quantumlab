var express = require('express');
var router = express.Router();
var albums = require('../albums');

router.get('/', function (req, res, next) {

    let year;
    if (req.param("year")) {
        let yearParam = req.param("year");
        (!isNaN(yearParam) && yearParam.length === 4) ? year = yearParam : res.status(404).send('404 Not found');
    } else {
        year = Math.max.apply(Math, albums.map(y => y.release));
    }

    res.render('index', {
        albums: albums.filter(x => {
            return x.release === year.toString()
        }).sort((a, b) => {
            return b.score - a.score
        }),
        year: year
    });

});

module.exports = router;
