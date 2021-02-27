require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', () => {
  console.log('error')
});
db.once('open', () => {
  console.log(`Mongoose successfully connected`);
})