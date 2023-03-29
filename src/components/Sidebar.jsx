import React from "react";
import "../CSS/sidebar.css";
import { Home, Group, Timeline } from "@mui/icons-material";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarTitle"> Menu</div>

        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon"/> Home
          </li>
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon"/> Analytics
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/> Students
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
