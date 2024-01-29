const express = require("express");
const router = express.Router();

const ImageModel = require("../models/imagesModel");

router.get("/", async (req, res) => {
  try {
    const docs = await ImageModel.find();
    res.send(docs);
  } catch (err) {
    console.log("error retriving data :" + err);
  }
});

router.post("/", async (req, res) => {
  const newImage = new ImageModel({
    name: req.body.name,
    caption: req.body.caption,
    chemin: req.body.chemin,
  });
  try {
    const docs = await newImage.save();
    res.send(docs);
  } catch (err) {
    console.log("error inserting data :" + err);
  }
});

module.exports = router;
