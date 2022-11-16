import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/homepka.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Desi Daru Theka </h1>
        <p> DARU EK BURI CHEEZ HAI AO MIL KR ISSE KHTM KRE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
