// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Footer from  "./components/footer";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Test from './pages/test';

import Resume from "./pages/resume";


  const App = () => (
    <BrowserRouter basename="/personal-website">
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/test" element={<Test/>} />


        
      </Routes>
      <Footer/>
      </div>
     
    </BrowserRouter>
  );

export default App;
