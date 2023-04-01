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
          <Link to="/" className="link">
            <li className="sidebarListItem">
              <Home className="sidebarIcon" /> Home
            </li>
          </Link>

          <Link to="/Analytics" className="link">
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon" /> Analytics
          </li>
          </Link>

          

          <Link to="/Students" className="link">
            <li className="sidebarListItem">
              <Group className="sidebarIcon" /> Students
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
