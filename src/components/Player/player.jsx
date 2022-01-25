import React from 'react';
import {useEffect,useState,useRef} from "react";
import Control from "./Control";
function Player(){
  const [volume, setVolume] = useState(0.50);
  const [mouseMoved, setMouseMoved] = useState(0.50);
  const vidRef = useRef(null);
  
  useEffect(()=>{
      vidRef.current.volume=volume;
  });
  
  function pause(){
    vidRef.current.pause();
  }
  
  function play(){
   vidRef.current.play();
  }
  function forward(){
   vidRef.currentTime=vidRef.currentTime+10
  }
  
  function backward(){
    if(vidRef.currentTime-10>0){
      vidRef.currentTime=vidRef.currentTime-10
    }else{
      vidRef.currentTime=0;
    }
  }
  
  function fullScreen(){
    vidRef.current.requestFullscreen();
  }
  function getVolume(){
    return volume;
  }
  
  function changeVolume(volume){
    vidRef.current.volume=volume;
    setVolume({volume:volume})
  }
  
  function mouseMove(){
    setMouseMoved(true)
    
    setTimeout(() => {
      setMouseMoved(false)
      
    }, 10000);
    
  }
  
  return(
    <div className="player_container d-flex justify-content-end flex-column"
         onMouseMove={mouseMove}>
      <video  id="myVideo"
             ref={el => { vidRef.current = el }}>
             <source className="w-100"
                src="https://res.cloudinary.com/dtoe1qn3j/video/upload/v1642578061/Breaking_Bad_-_I_am_the_Danger_Scene_S4_E6_1080p_xsvxd6.mp4"
                type="video/mp4" />
      </video>
      <Control
        pause={pause}
        play={play}
        forward={forward}
        backward={backward}
        fullScreen={fullScreen}
        volume={getVolume()}
        setVolume={changeVolume}
        mouseMoved={mouseMoved}
      />
    </div>
  )
}

export default Player;