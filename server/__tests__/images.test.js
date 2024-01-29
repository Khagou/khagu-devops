const mongoose = require("mongoose");
const ImageModel = require("../models/imagesModel"); // Remplacez par le chemin correct vers votre modèle d'articles
require("dotenv").config({ path: "./config/.env" }); // Ajoutez cette ligne en haut de votre fichier de test

describe("Image model tests", () => {
  beforeAll(async () => {
    // Connectez-vous à une base de données de test
    await mongoose.connect(
      "mongodb+srv://" +
        process.env.DB_USER_PASS +
        "@cluster0.v8rv1aj.mongodb.net/khagu-dev-test?retryWrites=true&w=majority" /* votre chaîne de connexion à la base de données de test */,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  });

  afterAll(async () => {
    // Fermez la connexion à la base de données
    await mongoose.connection.close();
  });

  test("create & save article successfully", async () => {
    const imageData = {
      name: "Test Image",
      chemin: "This is a test path",
      caption: "caption1",
    };
    const validImage = new ImageModel(imageData);
    const savedImage = await validImage.save();

    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedImage._id).toBeDefined();
    expect(savedImage.name).toBe(imageData.name);
    expect(savedImage.contenu).toBe(imageData.contenu);
  });

  // ... Vous pouvez ajouter d'autres tests pour lire, mettre à jour et supprimer des articles
});
