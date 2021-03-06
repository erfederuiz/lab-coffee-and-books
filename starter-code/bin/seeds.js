require('dotenv').config();
const mongoose = require('mongoose');
const Place = require('../models/place');

const dbName = `${process.env.DATABASE}`;

mongoose
  .connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const places = [
  {name: "Cafeteria 1",
  type : 'coffee shop',
  lat:40.4159053,
  lng:-3.7039018},
  {name: "Librería 1",
  type : 'bookstore',
  lat:40.4233828,
  lng:-3.7121647}
];


Place.create(places)
.then(placeInserted => {
  console.log(`Created ${placeInserted.length} places`);
  mongoose.connection.close();
})
.catch(err => {
  console.log(err)
}) 