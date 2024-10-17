import React from "react";
import Nav from "./components/navbar/Nav";
import Hero from "./components/navbar/Hero";
import Cart from "./components/navbar/Cart";
import Style from "./components/navbar/Style";
import Transparent from "./components/navbar/Transparent";
import "./App.css";
import Brand from "./components/navbar/Brand";
import ShopnowSection from "./components/navbar/ShopnowSection";
import Bibacart from "./components/navbar/Bibacart";

function App() {
  return (
    <>
      <div>
        <Nav />

        <Hero />

        <Cart />
        <Style />
        <Transparent />
        <Brand />
        <ShopnowSection />
        <Bibacart />
      </div>
    </>
  );
}

export default App;
