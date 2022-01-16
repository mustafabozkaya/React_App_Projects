import React from "react";
export default function Contact(props) {
  return (
    <>
      <div className="contact-card">
         <img src={props.img}/>
         <h3>{props.name}</h3>
            <div className="info-group">
          <i class="fa fa-phone-square" aria-hidden="true">
            {" "}
          </i>
           <p>{props.phone}</p>
        </div>
        <div className="info-group">
          <i class="fas fa-envelope   "> </i>
          <p>{props.email}</p>
        </div>
      </div>
    </>
  );
}
