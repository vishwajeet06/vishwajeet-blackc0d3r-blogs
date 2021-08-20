import React from "react";
import "./sideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://cdn.pixabay.com/photo/2021/06/06/12/23/landscape-6315249__340.jpg"
          alt="vishwa"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          molestias sint numquam provident corporis.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Chess</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Gossipe</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
