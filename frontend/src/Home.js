import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Exam Portal</h1>
      <div className="space-x-4">
        <Link to="/form">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Fill Examination Form</button>
        </Link>
        <Link to="/dashboard">
          <button className="bg-green-500 text-white py-2 px-4 rounded">View Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
