import React from "react";

export default function Test(props) {
  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}

      <p>Punchline: {props.punchline}</p>
      <hr />
    </div>
  );
}