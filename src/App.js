import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Navbar from '../src/Components/Navbar'
import '../src/Css/style.css'
import '../src/dist/aos.css'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/Services' element={<Services />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>

    </>
  );
}

export default App;
