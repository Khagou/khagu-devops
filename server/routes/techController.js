const express = require("express");
const router = express.Router();

const TechModel = require("../models/techModel");

router.get("/", async (req, res) => {
  try {
    const docs = await TechModel.find();
    res.send(docs);
  } catch (err) {
    console.log("error retriving data :" + err);
  }
});

router.post("/", async (req, res) => {
  const newRecord = new TechModel({
    techName: req.body.techName,
    image: req.body.image,
    techType: req.body.techType,
  });
  try {
    const docs = await newRecord.save();
    res.send(docs);
  } catch (err) {
    console.log("error inserting data :" + err);
  }
});

module.exports = router;
