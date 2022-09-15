const mongoose = require("mongoose");

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
