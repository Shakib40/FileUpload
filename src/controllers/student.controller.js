const express = require("express");

const Student = require("../models/student.model");

const router = express.Router();

//--------------------------Student CRUD ------------------------------

router.post("", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    return res.status(201).send(student);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const students = await Student.find().populate("evaluation").lean().exec();

    return res.send({ students });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).lean().exec();

    return res.send(student);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send(student);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.status(200).send(student);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

// fetch all students who gave a particular evaluation

router.get("/eval/:id", async (req, res) => {
  try {
    const students = await Student.find({ evaluation: req.params.id })
      .lean()
      .exec();

    return res.send({ students });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

// fetch the student with his personal details who scored the highest mark in the evaluation

router.get("/eval1/:id", async (req, res) => {
  try {
    const topper = await Student.find({ evaluation: req.params.id })
      .sort({ marks: -1 })
      .limit(1)
      .lean()
      .exec();

    return res.send({ topper });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
