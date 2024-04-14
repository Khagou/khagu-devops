require("dotenv").config(); // this reads the .env file and sets the environment variables.
const mongoose = require("mongoose"); // this is the ODM for MongoDB

mongoose // this connects to the MongoDB database
  .connect( // the connection string is stored in the .env file
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.v8rv1aj.mongodb.net/khagu-dev?retryWrites=true&w=majority", // this is the connection string
    {
      useNewUrlParser: true, // these are some options to avoid deprecation warnings
      useUnifiedTopology: true, // these are some options to avoid deprecation warnings
    }
  )
  .then(() => console.log("connected to MongoDB")) // if the connection is successful, this message is printed
  .catch((err) => console.log("Failed to connect to MongoDB :", err)); // if the connection fails, this message is printed
