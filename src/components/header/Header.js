import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="headertitles">
        <span className="headertitlesm">BlackC0d3r</span>
        <span className="headertitlelg">Blogs</span>
      </div>
      <img
        className="topimage"
        src="https://cdn.pixabay.com/photo/2021/06/06/12/23/landscape-6315249__340.jpg"
        alt="vishwajeet"
        className="headerimage"
      />
    </div>
  );
}

export default Header;
