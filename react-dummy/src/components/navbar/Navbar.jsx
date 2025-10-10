import React from "react";
import "../navbar/nav.css";
import menuicon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import profile from "../../assets/jack.png";
import { Link } from "react-router-dom";
const Navbar = ({setSidebar}) => {
  return (
    <nav className="navv flexdiv">
      <div className="felxdivleft flexdiv">
        <img src={menuicon} className="menu-icon" alt=""  onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
     <Link to='/'>
     <img src={logo} className="logo" alt="" />
     </Link>
      </div>
      <div className="searchnav flexdiv">
        <div className="search-box  flexdiv">
          
        <input type="text" placeholder="Search" className="inputx" />
        <img src={search} alt="" className="imgg" />
        </div>
      </div>
      <div className="navright flexdiv">
        <img src={upload} alt="" />
        <img src={more} alt="" />
        <img src={notification} alt="" />
        <img src={profile} alt="" className="profile" />
      </div>
    </nav>
  );
};

export default Navbar;
