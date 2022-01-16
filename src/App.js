import React from "react";
import Main from "./Components/Main";
import Nav from "./Components/Navbar";
import Cart from "./Components/Carts";

export default function App() {
  return (
    <div className="container">
      <Nav />
      <Cart />
    </div>
  );
}
