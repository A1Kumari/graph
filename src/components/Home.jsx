import React from 'react';
import HomePage from './HomePage.jsx';
import Summary from './Summary.jsx';
import PricingPage from './PricingPage.jsx';
import NavBar from './Navbar.jsx';


function Home() {
    return (
      <div>
        <HomePage/>
        <Summary/>
        <PricingPage/>
      </div>

    );
  }
  
  export default Home;
  