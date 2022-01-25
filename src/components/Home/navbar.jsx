import React, {useState} from 'react';
import Logo from "../../assets/images/netflix.png"
import Nav from 'react-bootstrap/Nav';
import SettingsDropDdown from "../global/SettingsDropDdown";
import {FaSearch, FaBell, FaCaretDown} from 'react-icons/fa';
function NavBar(){
  const [showSettingDropDown, setShowSettingDropDown] = useState(true);
  function handleSettingDropDownClick (){
    let state=(showSettingDropDown)?false:true;
    setShowSettingDropDown(state);
  }
  return (
    <div>
      <div className="row NavBar d-flex">
        <Nav
          className="align-items-center"
          activeKey="/home"
        >
          <div className="brand">
            <img src={Logo} alt="logo"/>
          </div>
          <Nav.Item className="nav_item">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav_item">
            <Nav.Link eventKey="link-1">Tv Shows</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav_item">
            <Nav.Link eventKey="link-2">Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav_item">
            <Nav.Link eventKey="link-2">New & Popular</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="control d-flex align-items-center">
          <FaSearch size="20" color="#fff" className="icon"/>
          <FaBell size="20" color="#fff" className="icon"/>
          <div onClick={handleSettingDropDownClick}>
            <img src="https://i.imgur.com/ih6xvXa.png" className="nav_bar_avatar" alt="avatar"/>
            <FaCaretDown className="avatar_caret" />
          </div>
        </div>
      </div>
      <div className={`${showSettingDropDown ? "d-none" : "d-block"}`}>
        <SettingsDropDdown />
      </div>
    </div>
  )
}

export default NavBar;