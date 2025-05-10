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
import Safari_Packages from './Pages/Safari Packages/Safari_Packages';
import Themed_Holidays from './Pages/Themed Holidays/Themed_Holidays';
import Local_Packages from './Pages/Local Packages/Local_Packages';
import DestinationsP from './Pages/Destinations/DestinationsP';

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
        <Route path='/destinations' element={<DestinationsP/>}/>
        <Route path='/safari_packages' element={<Safari_Packages/>}/>
        <Route path='/themed_holidays' element={<Themed_Holidays/>}/>
        <Route path='/local_packages' element={<Local_Packages/>}/>
        <Route path="/contact" element={<><Form /> <ContactPlace/></>} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
