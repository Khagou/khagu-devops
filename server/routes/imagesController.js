const express = require("express");
const router = express.Router();

const ImageModel = require("../models/imagesModel");

router.get("/", (req, res) => {
  ImageModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error to get images" + err);
  });
});

router.post("/", (req, res) => {
  const newImage = new ImageModel({
    name: req.body.name,
    caption: req.body.caption,
    chemin: req.body.chemin,
  });
  newImage.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error creating image :" + err);
  });
});

module.exports = router;
