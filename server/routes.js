const express = require('express');
const router = express.Router();
const path = require('path');
const access = require('../database/controllers.js');
const fs = require('fs');
const test = require('../client/dist/fakeData.js');

router.get('/fake_data', (req, res, next) => {
  res.status(200).json(test);
});

router.get('/info', () => {
  res.status(200).send('info working')
})

router.post('/products', () => {

});



module.exports = router;