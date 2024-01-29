const mongoose = require("mongoose");
const TechModel = require("../models/techModel"); // Remplacez par le chemin correct vers votre modèle d'articles
require("dotenv").config({ path: "./config/.env" }); // Ajoutez cette ligne en haut de votre fichier de test

describe("Tech model tests", () => {
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

  test("create & save tech successfully", async () => {
    const TechData = {
      techName: "Test Tech",
      image: "This is a test",
      techType: "tech type",
    };
    const validTech = new TechModel(TechData);
    const savedTech = await validTech.save();

    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedTech._id).toBeDefined();
    expect(savedTech.name).toBe(TechData.name);
    expect(savedTech.contenu).toBe(TechData.contenu);
  });

  // ... Vous pouvez ajouter d'autres tests pour lire, mettre à jour et supprimer des articles
});
