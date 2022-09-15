const mongoose = require("mongoose");

const TechModel = mongoose.model(
  "khagu-dev",
  {
    techName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    techType: {
      type: String,
      required: true,
    },
  },
  "tech"
);

module.exports = { TechModel };
