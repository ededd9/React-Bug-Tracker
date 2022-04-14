import React from "react";
import "./sideBar.css";
function sideBar() {
  return (
    <div className="sideBar-container">
      <div className="logo-container">
        <div className="name-of-logo">Bug Tracker</div>
        <i className="logo-icon fa-solid fa-layer-group"></i>
      </div>
      <ul className="list-container">
        <li>
          <i className="list-icons fa-solid fa-house"></i>
          Homepage
        </li>
        <li>
          <i className="list-icons fa-solid fa-chart-simple"></i>Statistics
        </li>
        <li>
          <i className="list-icons fa-solid fa-plus"></i>Add Ticket
        </li>
        <li>
          <i className="list-icons fa-solid fa-user"></i>Profile
        </li>
        <li>
          <i className="list-icons fa-solid fa-arrow-right-from-bracket"></i>
          Logout
        </li>
      </ul>
    </div>
  );
}

export default sideBar;
