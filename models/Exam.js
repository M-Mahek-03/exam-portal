const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  duration: { type: Number, required: true }, // in minutes
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: String
    }
  ]
});

module.exports = mongoose.model('Exam', ExamSchema);
