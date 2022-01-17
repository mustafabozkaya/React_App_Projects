import React from "react";
import Navbar from "./Components/Navbar2";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import img from "./images/index";
import data from "./Components/data";

// console.log(data);
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  // <Hero />
  const cards = data.map((item, index) => {
    return (
      <Card
        key={index}
        // item={item}
        {...item}
      />
    );
  });

  return (
    <div>
      <Navbar img={img.airbnb2} />
      <Hero img={img.heroimg} />
      <div className="cardlist">{cards}</div>
    </div>
  );
}
