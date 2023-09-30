import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./navbar.css";
import { useState } from "react";

function NavBar() {
    const [isScrolled,setIsScrolled]= useState(false);
        window.onscroll=()=>{
          setIsScrolled(window.scrollY===0?false:true);
            return null;
        }


  return (
    <div className={isScrolled?"navbar-scrolled":"navbar"}>
      <div className="container">
        <div className="left">
          <img
            className="logo"
            src="/StreamIt.png"
            alt="Netflix-logo"
          />
          <span>Home</span>
          <span>Movies</span>
          <span>Series</span>
          <span>Newly Added</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img className="prof-img"
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
            alt="Profile-Image"/>
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
