const {Schema, model} = require('mongoose');

const schema = new Schema({
  name: {type: String, required: true},
  price: {type: Number},
  description: {type: String},
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  images: [{type: String}],
  color: [{type: String}],
  size: [{type: String}],
  composition: [{type: String}],
  modelParams: {type: String},
  sale: {type: Number},
  favorite: {type: Boolean},
  status: {type: String},
}, {
  timestamps: true,
});

module.exports = model('Item', schema);
