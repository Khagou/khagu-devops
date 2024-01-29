const express = require("express");
const router = express.Router();

const ArticleModel = require("../models/articleModel");

router.get("/", async (req, res) => {
  try {
    const docs = await ArticleModel.find();
    res.send(docs);
  } catch (err) {
    console.log("error retriving data :" + err);
  }
});

router.post("/", async (req, res) => {
  const newArticle = new ArticleModel({
    name: req.body.name,
    contenu: req.body.contenu,
  });
  try {
    const docs = await newArticle.save();
    res.send(docs);
  } catch (err) {
    console.log("error inserting data :" + err);
  }
});

module.exports = router;
