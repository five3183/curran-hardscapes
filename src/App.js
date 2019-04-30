import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Payments from './components/Payments/Payments'
import ReviewUs from './components/ReviewUs/ReviewUs'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component = {Content} />
            <Route exact path="/about" component = {About} />
            <Route exact path="/contact" component = {Contact} />
            <Route exact path="/portfolio" component = {Portfolio} />
            <Route exact path="/payments" component = {Payments} />
            <Route exact path="/review_us" component = {ReviewUs} />
            <Route exact path="/*" component = {NotFound} />

          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
