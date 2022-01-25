import React from 'react';
import Avatar from "./Avatar";
import {Link} from "react-router-dom";

function SettingsDropDdown() {
  return (
    <div className="profile_drop_down">
      <div className="d-flex align-items-center pb-2">
        <Avatar image="https://i.imgur.com/ih6xvXa.png"/>
        <span>Zakaria</span>
      </div>
      <div className="d-flex align-items-center pb-2 pt-1">
        <Avatar image="https://i.imgur.com/ih6xvXa.png"/>
        <span>Zakaria</span>
      </div>
      <div className="d-flex align-items-center pb-2 pt-1">
        <Avatar image="https://i.imgur.com/ih6xvXa.png"/>
        <span>Zakaria</span>
      </div>
      <hr/>
      <div className="pb-1"><Link to="/profiles"><span>Manage Profiles</span></Link></div>
      <div className="pb-1"><span>Account</span></div>
      <div className="pb-1"><span>Help Center</span></div>
      <div className="pb-1"><span>Sign out</span></div>
    </div>
  );
}

export default SettingsDropDdown;