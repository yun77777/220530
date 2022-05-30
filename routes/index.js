const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('hello express');
    next('route'); // pass all the middleware leftovers
}, (req, res, next) => {
    res.send('next')
    next(); // not executed
}, (req, res, next) => {
    res.send('next')
    next(); // not executed
});

router.get('/', (req, res) => {
    console.log('executed');
    // res.send('hello express!')

    res
    .status(201)
    .cookie('test', 'test')
    .redirect('/user');
})


router.route('/test')
    .get((req, res) => {
        res.send('get request');
    })
    .post((req, res) => {
        res.send('post request');
    });

module.exports = router;