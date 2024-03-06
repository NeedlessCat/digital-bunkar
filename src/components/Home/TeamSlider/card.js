import React from "react";
import "./SliderStyle.css";

const card = (props) => {
  return (
    <div className={`team-box ${props.id}`}>
      <div className="team-name">
        <center>
          <div className="team-content">
            <h2>Aayush Kumar</h2>
            <p>web developer</p>
            <ion-icon className="logo-facebook" name="logo-facebook"></ion-icon>
            <ion-icon
              name="logo-instagram"
              className="logo-instagram"
            ></ion-icon>
            <ion-icon name="logo-twitter" className="logo-twitter"></ion-icon>
            <ion-icon name="logo-linkedin" className="logo-linkedin"></ion-icon>
            <ion-icon name="logo-github" className="logo-github"></ion-icon>
          </div>
        </center>
      </div>
    </div>
  );
};

export default card;
