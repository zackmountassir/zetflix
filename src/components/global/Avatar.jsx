import React from 'react';
import Login from '../../views/Login';

function Avatar(props) {
  return (
    <div className="avatar d-flex flex-row align-items-center "
      style={{ backgroundImage: `url(${props.image})` }}>
    </div>
  );
}

export default Avatar;

