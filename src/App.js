import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import UniversityPartnership from './components/UniversityPartnership';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <Hero />
      <Services />
      <UniversityPartnership />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
