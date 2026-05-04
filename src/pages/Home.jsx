import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Release from '../components/Release';
import Book from '../components/Book';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Release />
      <Book />
      <FAQ />
    </>
  );
};

export default Home;
