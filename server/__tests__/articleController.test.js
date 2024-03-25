const request = require("supertest");
const express = require("express");
const ArticleModel = require("../models/articleModel");
const articlesRouter = require("../routes/articlesController");

const app = express();
app.use(express.json());
app.use("/", articlesRouter);

jest.mock("../models/articleModel");

describe("articlesController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("GET / - Récupération de tous les articles", async () => {
    ArticleModel.find.mockResolvedValue([
      { name: "Article1", contenu: "Contenu1" },
    ]);
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([{ name: "Article1", contenu: "Contenu1" }]);
  });

  test("POST / - Création d'un nouvel article", async () => {
    const newArticle = { name: "Article2", contenu: "Contenu2" };
    ArticleModel.prototype.save.mockResolvedValue(newArticle);
    const res = await request(app).post("/").send(newArticle);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(newArticle);
  });
});
