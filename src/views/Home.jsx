import React from 'react';
import Navbar from "../components/Home/navbar";
import Carousel from "../components/Home/Carousel";
import Hero from "../components/Home/Hero";

function Home() {
  
  return (
    <React.Fragment>
      <div>
        <Navbar className="NavBar"/>
        <Hero/>
      </div>
      <Carousel title="Trending Now"/>
      <Carousel title="Continue Watching"/>
      <Carousel title="Documentaries"/>
      <Carousel title="Movies From The 1990s"/>
    </React.Fragment>
  
  );
}

export default Home;