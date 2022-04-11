import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
// import zaferesImage from './assets/images/zaferes.png';
import CardData from './data';

function App() {
  // const cardData = {
  //   image: zaferesImage,
  //   rating: 5.0,
  //   reviewCount: 6,
  //   country: 'USA',
  //   title: 'Life lessons with Katie Zaferes',
  //   price: 136,
  // };
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card data={CardData} />
    </div>
  );
}

export default App;
