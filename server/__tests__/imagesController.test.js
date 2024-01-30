const request = require("supertest");
const express = require("express");
const ImagesModel = require("../models/imagesModel");
const imagesController = require("../routes/imagesController");

const app = express();
app.use(express.json());
app.use("/", imagesController);

jest.mock("../models/imagesModel");

describe("imagesController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("GET / - Récupération de toutes les images", async () => {
    ImagesModel.find.mockResolvedValue([
      { name: "Image1", caption: "caption1", chemin: "chemin1" },
    ]);
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([
      { name: "Image1", caption: "caption1", chemin: "chemin1" },
    ]);
  });

  test("POST / - Création d'une nouvelle image", async () => {
    const newImage = {
      name: "Article2",
      caption: "caption2",
      chemin: "chemin2",
    };
    ImagesModel.prototype.save.mockResolvedValue(newImage);
    const res = await request(app).post("/").send(newImage);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(newImage);
  });
});
