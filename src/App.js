// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';



  const App = () => (
    <BrowserRouter basename="/personal-website">
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      
      </Routes>
      <Footer/>
      </div>
     
    </BrowserRouter>
  );

export default App;
