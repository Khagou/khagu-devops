const mongoose = require("mongoose");
const ArticleModel = require("../models/articleModel"); // Remplacez par le chemin correct vers votre modèle d'articles
require("dotenv").config({ path: "./config/.env" }); // Ajoutez cette ligne en haut de votre fichier de test

describe("Article model tests", () => {
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
    const articleData = {
      name: "Test Article",
      contenu: "This is a test article.",
    };
    const validArticle = new ArticleModel(articleData);
    const savedArticle = await validArticle.save();

    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedArticle._id).toBeDefined();
    expect(savedArticle.name).toBe(articleData.name);
    expect(savedArticle.contenu).toBe(articleData.contenu);
  });

  // ... Vous pouvez ajouter d'autres tests pour lire, mettre à jour et supprimer des articles
});
