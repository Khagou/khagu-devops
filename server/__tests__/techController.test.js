const request = require("supertest");
const express = require("express");
const TechModel = require("../models/techModel");
const TechRouter = require("../routes/techController");

const app = express();
app.use(express.json());
app.use("/", TechRouter);

jest.mock("../models/techModel");

describe("techController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("GET / - Récupération de tous les articles", async () => {
    TechModel.find.mockResolvedValue([
      { techName: "Tech1", image: "image1", techType: "techType 1" },
    ]);
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([
      { techName: "Tech1", image: "image1", techType: "techType 1" },
    ]);
  });

  test("POST / - Création d'un nouvel article", async () => {
    const newArticle = {
      techName: "tech2",
      image: "image2",
      techType: "techType 2",
    };
    TechModel.prototype.save.mockResolvedValue(newArticle);
    const res = await request(app).post("/").send(newArticle);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(newArticle);
  });
});
