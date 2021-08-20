import React from "react";
import "./topBar.css";

function TopBar() {
  return (
    //   Nav Bar
    <div className="top">
      {/* socials */}
      <div className="topleft">
        <i className="topicon fab fa-facebook-square"></i>
        <i className="topicon fab fa-twitter-square"></i>
        <i className="topicon fab fa-instagram-square"></i>
      </div>
      <div className="topcenter">
        {/* Nav Items */}
        <ul className="navlist">
          <li className="navitem">Home</li>
          <li className="navitem">About</li>
          <li className="navitem">Contact</li>
          <li className="navitem">Logout</li>
        </ul>
      </div>
      <div className="topright">
        {/* profile */}
        <img
          className="topimage"
          src="https://lh3.googleusercontent.com/ogw/ADea4I6EE_SSK87UfQHxS9KLWz7_nBvsMZ9CC-HtVv2YPA=s32-c-mo"
          alt="vishwajeet"
        />
        <i className="topsearch fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
