import React from "react";
import BannerImage from "../assets/about.jpg";
import "../styles/About.css";


function About() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Jodhpur </h1>
        <p>A DELIGHTFUL BLEND OF THE MODERN AND THE TRADITIONAL</p>
      </div>
    </div>
  );
}




export default About;
