require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routes.js');
const cors = require('cors');

app.use('/', (req, res, next) => {
  if (req.originalUrl !== '/disable_hmr_logs.js' && req.originalUrl !== '/proxy' && req.originalUrl !== '/') {
    console.log(req.method, req.originalUrl);
  }
  if (req.originalUrl === '/') {
    console.info('~Serving Client~')
  }
  next();
});

app.use(cors({
  exposedHeaders: ['Cross-Origin-Embedder-Policy: require-corp',
    'Cross-Origin-Opener-Policy: same-origin']
}));

app.use((req, res, next) => {
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  res.header('Cross-Origin-Opener-Policy', 'same-origin')
  next();
})
app.use(express.static(__dirname + '/../client/dist'))

app.use('/', router);



const port = 3001;
app.listen(port, () => {
  console.log('Service 1 Listening on ' + port);
})
