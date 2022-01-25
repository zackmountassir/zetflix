import React from 'react';
import {FaInfoCircle, FaPlay} from "react-icons/fa";
import {Link} from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="hero w-100">
        <video autoPlay muted loop id="myVideo" className="w-100">
          <source className="w-100"
                  src="https://res.cloudinary.com/dtoe1qn3j/video/upload/v1642550432/Breaking_Bad_-_Walt___Heisenberg_Say_My_Name_HD_720p_ac2jee.mp4"
                  type="video/mp4"/>
        </video>
      </div>
      <div className="hero_content">
        <img alt="show logo" className="show_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1280px-Breaking_Bad_logo.svg.png"/>
        <p className="show_desc">A high school chemistry teacher diagnosed with inoperable lung cancer turns to
          manufacturing and selling methamphetamine in order to secure his family's future.</p>
        <div className="d-flex">
          <Link to="/play" className="white button d-flex align-items-center">
            <FaPlay/> <span className="ml-1">Play</span>
          </Link>
          <a href="void()" className="black button d-flex align-items-center">
            <FaInfoCircle/> <span className="ml-1">More Info</span>
          </a>
        </div>
      
      </div>
    </div>
  );
}

export default Hero;