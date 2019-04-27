import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Contact from './components/Contact/Contact'
import ThankYou from './components/ThankYou/ThankYou'
import Portfolio from './components/Portfolio/Portfolio'
import Payments from './components/Payments/Payments'
import InfoBox from './components/InfoBox/InfoBox'
import Footer from './components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Content />
      <Contact />
      <ThankYou />
      <Portfolio />
      <Payments />
      <InfoBox />
      <Footer />
    </div>
  );
}

export default App;
