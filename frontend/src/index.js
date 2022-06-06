import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom'
import './css/index.css';
import App from './components/App';
import Navbar from './components/Navbar.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Navbar />
    <App />
    
    
    </Router>
    
  </React.StrictMode>
);


