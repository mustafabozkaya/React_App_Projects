import React from "react";

export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */

  return (
    <div className="card">
      {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.coverImg} className="card--image" />
      <section className="card-decribe">
        <div className="card--stats">
          <i className="fa fa-star" aria-hidden="true"></i>
          <span>{props.stats.rating}</span>
          <span className="gray">({props.stats.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price">
          <span className="bold">From ${props.price}</span> / person
        </p>
      </section>
    </div>
  );
}
