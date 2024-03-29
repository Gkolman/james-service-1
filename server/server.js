require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes.js');
const cors = require('cors');

app.use(cors());

app.use('/', express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl !== '/disable_hmr_logs.js' && req.originalUrl !== '/proxy' && req.originalUrl !== '/') {
    console.log(req.method, req.originalUrl);
  }
  if (req.originalUrl === '/') {
    console.info('~Serving Client~')
  }
  next();
});

app.use((req, res, next) => {
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  res.header(`Cross-Origin-Resource-Policy`, 'cross-origin');
  next();
})

app.use(express.static(__dirname + '/../client/dist'));

app.use('/', router);

const port = 3001;
app.listen(port, () => {
  console.log('Service 1 Listening on ' + port);
})
