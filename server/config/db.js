const { config } = require("dotenv");
const mongoose = require("mongoose");
// const MongoError = require("mongodb");

function callback(err) {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Succesfully Connected!");
  }
}

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.v8rv1aj.mongodb.net/khagu-dev?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB :", err));
