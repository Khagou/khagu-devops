const mongoose = require("mongoose");
const { Schema } = mongoose;

const TechModel = new Schema(
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
  { strictQuery: false }
);

module.exports = mongoose.model("tech", TechModel, "tech");
