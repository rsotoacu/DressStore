const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Instance schema object

const ProductSchema = new Schema({ //Define schema
  name: String,
  description: String,
  price: Number,
  published: Boolean,
  category: String
});

module.exports = mongoose.model('Product', ProductSchema); //Exporting the object schema
