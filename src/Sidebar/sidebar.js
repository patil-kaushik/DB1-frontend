import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.scss";

function SideBar() {
  
  const navigate = useNavigate();

  return (
    <div
        className="d-flex position-fixed flex-column min-vh-100 flex-shrink-0 p-3 bg-main-black col-2 sidebar"
        style={{ width: "19%" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <NavLink
          className={"nav-item nav-link"}
          to={"/profile"}
          activeClassName="active"
        >
          Profile
        </NavLink>
      </ul>
    </div>
  );
}

export default SideBar;