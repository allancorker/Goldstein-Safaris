import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Topnav from './Components/Topnav/Topnav';
import Hero from './Components/Hero/Hero';

export const App = () => {
  return (
    <div>
      <Topnav />

      <Navbar />
      <Hero/>

    </div>
  )
}
export default App;
