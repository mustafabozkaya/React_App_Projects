import React from "react";
import Navbar from "./Components/Navbar2";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Images from './images/index*';
import images from "./images";

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function App() {
  // <Hero />
  return (
    <div>
      <Navbar img={images.airbnb} />
      <Card
        img={images.airbnb}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
