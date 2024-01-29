const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticleModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contenu: {
      type: String,
      required: true,
    },
  },
  { strictQuery: false }
);

module.exports = mongoose.model("article", ArticleModel);
