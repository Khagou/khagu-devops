const mongoose = require("mongoose");
const { Schema } = mongoose;

const ImageModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  chemin: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("images", ImageModel);
