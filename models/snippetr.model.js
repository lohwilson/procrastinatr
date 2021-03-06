const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const snippetrSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  story: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
},
{
  timestamps: true
});

const Snippetr = mongoose.model('Snippetr', snippetrSchema);

module.exports = Snippetr
