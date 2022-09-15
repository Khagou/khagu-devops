const express = require("express");
const router = express.Router();

const { TechModel } = require("../models/techModel");

router.get("/", (req, res) => {
  TechModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error to get data" + err);
  });
});

router.post("/", (req, res) => {
  const newRecord = new TechModel({
    techName: req.body.techName,
    image: req.body.image,
    techType: req.body.techType,
  });
  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("error creatig new data :" + err);
  });
});

module.exports = router;
