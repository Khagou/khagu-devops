const express = require("express");
const router = express.Router();

const ArticleModel = require("../models/articleModel");

router.get("/", (req, res) => {
  ArticleModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error to get article" + err);
  });
});

router.post("/", (req, res) => {
  const newArticle = new ArticleModel({
    name: req.body.name,
    contenu: req.body.contenu,
  });
  newArticle.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error creating article :" + err);
  });
});

module.exports = router;
