const express = require("express");

const router = express.Router();

const CanData = require("../models/candUser.model");
const JobData = require("../models/jobs.model");
const RecData = require("../models/recUser.model");

router.post("/post", (req, res) => {
  res.send("Post API");
});

router.post("/addCand", async (req, res) => {
  const data = new CanData({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/addRec", async (req, res) => {
  const data = new RecData({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/addJob", async (req, res) => {
  const data = new JobData({
    name: req.body.name,
    desciption: req.body.desciption,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllCand", async (req, res) => {
  try {
    const data = await CanData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getAllJobs", async (req, res) => {
  try {
    const data = await JobData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/cand/:user", async (req, res) => {
  try {
    const data = await CanData.find({ username: req.params.username });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/rec/:user", async (req, res) => {
  try {
    const data = await RecData.find({ usr: req.params.user });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/recUp/:user", async (req, res) => {
  try {
    const id = req.params.username;
    const updatedData = req.body;
    const options = { new: true };

    const result = await RecData.findOneAndUpdate(
      { username: id },
      updatedData,
      options
    );

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/canPassUp/:user", async (req, res) => {
  try {
    const id = req.params.username;
    const updatedData = req.body;

    const result = await CanData.findOneAndUpdate(
      { username: id },
      { password: updatedData }
    );

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/canDataUp/:user", async (req, res) => {
  try {
    const id = req.params.username;
    const updatedData = req.body;

    const result = await CanData.findOneAndUpdate(
      { username: id },
      { resume: updatedData.resume, profile: updatedData.profile }
    );

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
