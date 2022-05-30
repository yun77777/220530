const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello user');
});

router.get('/routeParams/:id', (req, res) => {
    console.log('req.params.id: ', req.params.id);
    console.log('req.query: ', req.query);
    res.send('params');
});


module.exports = router;