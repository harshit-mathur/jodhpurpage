import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/JDH.jpg";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome to </h1>
        <p> The Blue City of India</p>
        <Link to="/gallery">
          <button> Explore here </button>
        </Link>
        
      </div>
    </div>
  );
}




export default Home;
