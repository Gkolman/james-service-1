const express = require('express');
const router = express.Router();
const path = require('path');
const access = require('../database/controllers.js');

router.get('/proxy', (req, res, next) => {
  res.status(200).send('working');
});

router.get('/info', () => {
  res.status(200).send('info working')
})

router.post('/products', () => {

});



module.exports = router;