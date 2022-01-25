import React from 'react';
import Avatar from "../global/Avatar";

function ProfileGate(props) {
  let profile = props.profile;
  return (
    <div className="m-3 profile_gate">
      <Avatar image={profile.avatar}/>
      <div>
        <p className="profile_name">{profile.name}</p>
      </div>
    </div>
  
  
  );
}

export default ProfileGate;