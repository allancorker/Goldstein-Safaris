import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Topnav from './Components/Topnav/Topnav';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Hero from './Components/Hero/Hero';
import Bhero from './Components/Bhero/Bhero';
import Why from './Components/Why/Why';
import Destinations from './Components/Destinations/Destinations';
import Testimonials from './Components/Testimonials/Testimonials';
import Form from './Components/Form/Form';
import ContactPlace from './Components/ContactPlace/ContactPlace';

const Home = () => (
  <>
    <Hero />
    <Bhero />
    <Why />
    <Destinations />
    <Testimonials />
    <Form />
    <ContactPlace />
  </>
);

export const App = () => {
  return (
    <Router>
      <Topnav />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Form />} />
        <Route path="/locations" element={<ContactPlace />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
