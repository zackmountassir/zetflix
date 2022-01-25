import React, {useState,useEffect} from 'react';
import ProfileGate from "../components/Profile/ProfileGate";
import AddProfile from "../components/Profile/AddProfile";
import {Link} from "react-router-dom";


function Profiles(){
  
  const [profiles,setProfile]=useState(null)
  
  useEffect(()=>{
    setTimeout(function(){
      var profiles=[
        {
          name : "Zakaria",
          avatar : "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        },
        {
          name : "Chaimae",
          avatar : "https://i.imgur.com/ih6xvXa.png"
        },
        {
          name : "Aymen",
          avatar : "https://i.imgur.com/XSzYJIX.png"
        },
        {
          name : "Rachid",
          avatar : "https://i.imgur.com/bQYJ3j2.png"
        },
      ]
      setProfile(profiles);
  
    }, 1000);
  

  },[]);
  if(profiles){
    return (
      <div className="App h-100 profiles-container d-flex justify-content-center align-items-center flex-column h-100 ">
        <h1 className="title text-center">Who is watching?</h1>
        <div className="d-flex justify-content-center w-100 pt-4">
          {profiles.map(item => (
            <Link to="/"><ProfileGate profile={item} /></Link>
          ))}
          <AddProfile/>
        </div>
      </div>
    )
  }else{
    return(
      <div className=" d-flex align-items-center justify-content-center w-100 h-100">
        <div className="spinner-border text-secondary loading" role="status">
          <span className="sr-only"></span>
        </div>
      </div>

    )
  }

}

export default Profiles;