import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Stats from './components/Stats';
import Story from './components/Story';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Hero />
      <Brands />
      <Stats />
      <Story />
      <Timeline />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
