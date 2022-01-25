import React, {useState} from "react";
import {FaArrowLeft, FaExpand, FaPause, FaPlay, FaRedo, FaUndo, FaVolumeMute, FaVolumeUp} from "react-icons/fa";
import {Link} from "react-router-dom";



function Control(props){
  const [isPlay, setIsPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(false);
  const [lastVolume, setLastVolume] = useState(false);
  
  function getPlay(){
    return (isPlay)?<FaPause className="icon" onClick={handlePause}/>:<FaPlay onClick={handlePlay} className="icon"/>
  }
  
  function getVolumeState(){
    return (isMuted)
      ?<FaVolumeMute className="icon volume_icon" onClick={handleUnMute}/>
      :<FaVolumeUp className="icon volume_icon"  onClick={handleMute} />
  }
  function handleMute(){
    let lastVolume=volume;
    setVolume(0);
    setLastVolume(lastVolume);
    setIsMuted(true)
    props.setVolume(0)
    
  }
  function handleUnMute(){
    setIsMuted(false);
    setVolume(lastVolume);
    props.setVolume(lastVolume/100)
    
  }
  function handlePause(){
    setIsPlay(false)
    props.pause();
  }
  
  function handlePlay(){
    setIsPlay(true)
    props.play();
  }
  function handleForward(){
    props.forward();
  }
  function handleBackward(){
    props.backward();
  }
  function handleFullScreen(){
    props.fullScreen();
  }
  function handleVolume(volume){
    props.setVolume(volume/100)
    setVolume(volume)
  }
  
  return(
    <div className={`control flex-column justify-content-between h-100 ${props.mouseMoved ? "d-flex" : "d-none"}`}>
      <Link to="/"><FaArrowLeft className="icon" /></Link>
      <div className="d-flex justify-content-between align-items-end">
        <div className="d-flex align-items-end">
          {getPlay()}
          <FaUndo className="icon" onClick={handleBackward}/>
          <FaRedo className="icon" onClick={handleForward}/>
          <div className="volume d-flex align-items-center justify-content-center flex-column">
            <div id="volume_control" className="d-none">
              <input type="range" id="volume-slider" max="100" defaultValue={volume} orient="vertical"
                     onClick={(event)=>handleVolume(event.target.value)} />
            </div>
            {getVolumeState()}
          </div>
          <span className="showName icon">Breaking Bad Ep 3 Seaason 4</span>
        </div>
        <div>
          <FaExpand className="icon" onClick={handleFullScreen}/>
        </div>
      </div>
    </div>

  )
}

export default Control;