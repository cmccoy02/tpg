import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Stats from '../components/Stats';
import Story from '../components/Story';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Stats />
      <Story />
      <Cards />
      <Footer />
    </>
  );
};

export default Home; 