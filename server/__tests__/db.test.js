require("dotenv").config({ path: "./config/.env" }); // Ajoutez cette ligne en haut de votre fichier de test

const mongoose = require("mongoose");

// jest.useFakeTimers();

describe("Test MongoDB Connection", () => {
  beforeAll(async () => {
    await mongoose.connect(
      "mongodb+srv://" +
        process.env.DB_USER_PASS +
        "@cluster0.v8rv1aj.mongodb.net/khagu-dev-test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }, 10000);

  afterAll(async () => {
    await mongoose.connection.close();
  }, 10000);

  it("should be able to connect to the database", async () => {
    const isConnected = mongoose.connection.readyState;
    expect(isConnected).toBe(1);
  });
});
