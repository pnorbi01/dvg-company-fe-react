import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import About from './components/About';
import Parallax from './components/Parallax';
import Distribution from './components/Distribution';
import Cooperation from './components/Cooperation';
import Products from './components/Products';
import Brands from './components/Brands';
import Footer from './components/Footer';
import Popup from './components/Popup';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Slideshow />
        <About />
        <Parallax />
        <Distribution />
        <Cooperation />
        <Products />
        <Brands />
        <Footer />
        <Popup />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
