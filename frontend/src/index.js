import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
