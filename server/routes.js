const express = require('express');
const router = express.Router();
const path = require('path');
const access = require('../database/controllers.js');
const fs = require('fs');
const test = require('../client/dist/fakeData.js');

router.get('/fake_data/:productId', async (req, res, next) => {
  const productId = req.params.productId;
  const result = await access.getAll(productId);
  let newObject = {};
  let featureArr = [];
  let features = result['dataValues'].product_feature['dataValues']

  for (let key in features) {
    if (key.match(/feature/gm)) {
      featureArr.push(features[key]);
    }
  }

  let descriptors = result['dataValues'].product_description['dataValues'];
  let descriptorArr = [[], []];
  for (let key in descriptors) {
    if (key !== `id` && !key.match(/atedAt/gm)) {
      if (key === 'product_description') {
        descriptorArr[0].push({ [key]: descriptors[key] })
      } else {
        descriptorArr[1].push({ [key]: descriptors[key] });
      }
    }
  }

  let materialSpecs = result[`dataValues`].material_specification[`dataValues`];
  const materialArr = [];
  for (let key in materialSpecs) {
    if (key !== `id` && !key.match(/atedAt/)) {
      materialArr.push({ [key]: materialSpecs[key] });
    }
  }

  let technicalDetails = result[`dataValues`].technical_detail[`dataValues`];

  let indicator = false;
  let technicalArr = [[], []];
  for (let key in technicalDetails) {
    if (key !== `id` && !key.match(/atedAt/)) {
      if (key === `model_size`) {
        indicator = true;
        technicalArr[0].push({ [key]: technicalDetails[key] });
      } else if (indicator === false) {
        technicalArr[0].push({ [key]: technicalDetails[key] });
      } else {
        technicalArr[1].push({ [key]: technicalDetails[key] });
      }
    }
  }
  let careDetails = result[`dataValues`].care_instruction['dataValues'];
  let careArr = [[], []];

  for (let key in careDetails) {
    if (key !== `id` && !key.match(/atedAt/)) {
      if (key === `additional_care_instructions`) {
        careArr[1].push({[key]: careDetails[key]});
      } else {
        careArr[0].push({[key]: careDetails[key]});
      }
    }
  }

  newObject['product_details'] = result['dataValues'].product_details;
  newObject['product_features'] = featureArr;
  newObject['product_description'] = descriptorArr;
  newObject[`material_specification`] = materialArr;
  newObject[`technical_details`] = technicalArr;
  newObject[`care_instructions`] = careArr;

  res.status(200).json(newObject);
});

router.get('/info', () => {
  res.status(200).send('info working')
})

router.post('/products', () => {
});



module.exports = router;