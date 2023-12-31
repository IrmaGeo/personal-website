import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Projects from "./pages/projects";


const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
