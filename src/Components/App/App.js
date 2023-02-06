import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from '../Layout/Layout.js';
import Home from '../Pages/Home/Home.js';
import Programming from '../Pages/Programming/Programming.js';
import Community from '../Pages/Community/Community.js';
import About from '../Pages/About/About.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
