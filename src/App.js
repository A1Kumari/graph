import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Summary from './components/Summary';
import PricingPage from './components/PricingPage';
import NavBar from './components/Navbar';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import GraphPage from './components/GraphPage';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/profile" element={<LoginPage />} />
          <Route path="/graph" element={<GraphPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
