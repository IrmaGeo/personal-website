// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Resume from './resume';
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
