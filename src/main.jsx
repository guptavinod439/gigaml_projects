// main.jsx is the entry point that connects React to the HTML page.
// It finds the root <div> in index.html and renders the App component inside it.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component.
import App from './App.jsx';

// Create a root and render the App component.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
