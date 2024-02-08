import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import Work from './components/work/Work';
// import Qualification from './components/quallification/Qualification';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        {/* <Work /> */}
        <Contact />
        <Footer />
        {/* <Qualification/> */}
      </main>
    </>
  );
}

export default App
