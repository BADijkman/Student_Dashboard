import React from "react";
import "../CSS/sidebar.css";
import {
  Home,
  Group,
  Timeline,
  Speed,
  Quiz,
  Message,
} from "@mui/icons-material";
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
          <Link to="/StudentList" className="link">
            <li className="sidebarListItem">
              <Group className="sidebarIcon" /> Students
            </li>
          </Link>
        </ul>
        <ul className="sidebarList sibebarList_2" t>
          <Link className="link">
            <li className="sidebarListItem">
              <Speed className="sidebarIcon" /> Example
            </li>
          </Link>
          <Link className="link">
            <li className="sidebarListItem">
              <Message className="sidebarIcon" />
              Example
            </li>
          </Link>
          <Link className="link">
            <li className="sidebarListItem">
              <Quiz className="sidebarIcon" /> Example
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
