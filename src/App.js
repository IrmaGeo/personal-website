// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import AboutMe from './aboutme';
{/* 
import Portfolio from './portfolio';
import Resume from './Resume';
import Resources from './Resources';
import Consultation from './Consultation';*/}



  const App = () => (
    <BrowserRouter>
      <div className="container">
      <Header />
      <Routes>
      <Route path="/" element={<AboutMe/>} />
      {/*
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/consultation" element={<Consultation />} />*/}

      </Routes>
      <Footer/>
      </div>
     
    </BrowserRouter>
  );

export default App;
