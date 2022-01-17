import React from "react";

export default function Navbar(props) {
  const src = props.img;

  return (
    <nav>
      <img src={src} className="nav--logo" />
      <h3 className="nav--logo_text">
        Air House <i className="fa fa-home" aria-hidden="true"></i>
      </h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
