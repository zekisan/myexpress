var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next()
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/:id', function (req, res, next) {
    res.render('index', { title: 'You requested id: ' + req.params['id'] })
});

module.exports = router;
