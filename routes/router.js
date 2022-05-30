const express = require('express');
const router = express.Router();


router.use('/router', (req, res) => {
    console.log('router');
    res.json({result:'hello'})
})

module.exports = router;