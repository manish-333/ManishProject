import React from 'react';
import Nav from "./components/navbar/Nav";
import Hero from './components/navbar/Hero';
import Cart from './components/navbar/Cart';
import Style from './components/navbar/Style';
import Transparent from './components/navbar/Transparent';
import "./App.css"

function App() {
  return (
    <>
      <div>
        <Nav />
      
        <Hero />
     
        <Cart />
        <Style />
        <Transparent />
     
      </div>
    </>
  );
}

export default App;
