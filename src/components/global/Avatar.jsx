import React from 'react';

function Avatar(props) {
  return (
    <div className="avatar d-flex flex-row align-items-center "
         style={{backgroundImage: `url(${props.image})`}}>
    </div>
  );
}

export default Avatar;

