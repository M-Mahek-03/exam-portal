const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize App
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect('mongodb://127.0.0.1:27017/exam-portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// API Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
