const express = require('express');
const Exam = require('../models/Exam');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get All Exams
router.get('/', authMiddleware, async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Create Exam
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, date, duration, questions } = req.body;
  try {
    const newExam = new Exam({ title, description, date, duration, questions });
    const exam = await newExam.save();
    res.json(exam);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
