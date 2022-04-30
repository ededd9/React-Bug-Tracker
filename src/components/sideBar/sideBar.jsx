import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
function sideBar() {
  return (
    <>
      <div className="sideBar-container">
        <div className="logo-container">
          <div className="name-of-logo">Ticket System</div>
          <i className="logo-icon fa-solid fa-layer-group"></i>
        </div>
        <ul className="list-container">
          <li>
            <Link to="/home" className="link">
              <i className="list-icons fa-solid fa-house"></i>
              Homepage
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="link">
              <i className="list-icons fa-solid fa-chart-simple"></i>Dashboard
            </Link>
          </li>
          <li>
            <Link to="/createTicket" className="link">
              <i className="list-icons fa-solid fa-plus"></i>Add Ticket
            </Link>
          </li>
          <li>
            <i className="list-icons fa-solid fa-user"></i>Profile
          </li>
          <li>
            <Link to="/login" className="link">
              <i className="list-icons fa-solid fa-arrow-right-from-bracket"></i>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default sideBar;
