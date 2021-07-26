import React from 'react';
// import './App.css';
import Details from '../Details/Details';
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from '../Projects/Projects'
import Footer from "../Footer/Footer";
// import Landing from "./Landing"
// import About from "./About"
// import Projects from "./Projects"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Details />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;