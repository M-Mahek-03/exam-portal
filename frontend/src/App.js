import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Dropzone from 'react-dropzone';

// Home Page Component
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Exam Portal</h1>
      <div className="space-x-4">
        <Link to="/form">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Register</button>
        </Link>
        <Link to="/dashboard">
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

// Form Page Component
const FormPage = () => {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [files, setFiles] = useState([]);

  const handleFileUpload = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\nName: ${name}\nBranch: ${branch}\nSemester: ${semester}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md space-y-4 w-1/3"
      >
        <h2 className="text-2xl font-bold">Student Registration Form</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />

        <Dropzone onDrop={handleFileUpload}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center cursor-pointer"
            >
              <input {...getInputProps()} />
              <p>Drag & drop files here, or click to select files</p>
            </div>
          )}
        </Dropzone>

        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false); // Toggle between student and admin view

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className="mb-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
      >
        Switch to {isAdmin ? 'Student' : 'Admin'} View
      </button>

      {isAdmin ? (
        <div>
          <h3 className="text-2xl font-bold mb-4">Admin Panel</h3>
          <p>Here are all submitted forms:</p>
          <ul className="list-disc list-inside">
            <li>Student A - Hall Ticket Ready</li>
            <li>Student B - Verification Pending</li>
          </ul>
        </div>
      ) : (
        <div>
          <h3 className="text-2xl font-bold mb-4">Student Panel</h3>
          <p>Your submitted forms:</p>
          <ul className="list-disc list-inside">
            <li>Status: Verified</li>
            <li>Hall Ticket: Ready for Download</li>
          </ul>
        </div>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

const express = require('express');
const connectDB = require('./db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // For parsing JSON

// Define routes here
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


export default App;

