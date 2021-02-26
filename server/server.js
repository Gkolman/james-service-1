const express = require('express');
const app = express();
const router = require('./routes.js');
const cors = require('cors');

app.use('/', (req, res, next) => {
  console.log(req.originalUrl, req.method);
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
app.use('/', router);

app.use(express.static(__dirname + '/../client/dist'))

const port = 3001;
app.listen(port, () => {
  console.log('Service 1 Listening on ' + port);
})
