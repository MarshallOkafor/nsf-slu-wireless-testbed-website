import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Publications from './components/pages/Publications';
import Team from './components/pages/Team';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/publications' exact element={<Publications />} />
        <Route path='/team' exact element={<Team />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
