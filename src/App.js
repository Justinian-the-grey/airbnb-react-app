import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
import CardData from './data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card data={CardData} />
    </div>
  );
}

export default App;
