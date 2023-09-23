const {Schema, model} = require('mongoose');

const schema = new Schema({
  name: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String, unique: true},
  phoneNumber: {type: String},
  deliveryAddress: {type: Object},
  novaPoshtaAddress: {type: Object},
  favorite: [{type: Schema.Types.ObjectId, ref: 'Item'}],
}, {
  timestamps: true,
});

module.exports = model('User', schema);
