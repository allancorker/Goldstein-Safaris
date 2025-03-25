import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Topnav from './Components/Topnav/Topnav';
import Hero from './Components/Hero/Hero';
import Bhero from './Components/Bhero/Bhero';
import Why from './Components/Why/Why';
import Destinations from './Components/Destinations/Destinations';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';

export const App = () => {
  return (
    <div>
      <Topnav />

      <Navbar />
      <Hero/>
      <Bhero/>
      <Why/>
      <Destinations/>
      <Testimonials/>
      <Footer/>

    </div>
  )
}
export default App;
