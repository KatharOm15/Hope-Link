import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PeopleIcon from "@mui/icons-material/People";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import logo from "../../assets/logo.png";
import { Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Notification from "../Notification/Notification";
import { useState } from "react";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const userId = localStorage.getItem("user_id");
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.clear();
    alert("Successfully logged out.");
    navigate("/");
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="component-wrapper">
      <div className="header">
        <header>
          <div className="logo">
            <img
              src={logo}
              alt=""
              className="logoimg"
              onClick={() => {
                navigate("/dashboard");
              }}
            />
            <span
              className="org-name"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              HOPE
            </span>
          </div>
          {/* <div className="search">
            <SearchIcon className="search-icon" />
            <input type="text" className="searchbar" placeholder="Search" />
          </div> */}
          <nav>
            <ul>
              <li>
                <NavLink className="navlink" to="explore">
                  <div className="icons">
                    <Tooltip title="Explore">
                      <TravelExploreIcon className="icon" />
                    </Tooltip>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="feed">
                  <div className="icons">
                    <Tooltip title="Feed">
                      <CropOriginalIcon className="icon" />
                    </Tooltip>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="post">
                  <div className="icons">
                    <Tooltip title="Post">
                      <AddCircleOutlineIcon className="icon" />
                    </Tooltip>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="community">
                  <div className="icons">
                    <Tooltip title="Community">
                      <PeopleIcon className="icon" />
                    </Tooltip>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="profile">
                  <div className="icons">
                    <Tooltip title="Profile">
                      <ManageAccountsIcon className="icon" />
                    </Tooltip>
                  </div>
                </NavLink>
              </li>
              <li>
                <div className="icons" onClick={toggleNotifications}>
                  <Tooltip title="Notifications">
                    <NotificationsActiveIcon className="icon" />
                  </Tooltip>
                </div>
                {showNotifications && (
                  <Notification
                    userId={userId}
                    show={showNotifications}
                    toggle={toggleNotifications}
                  />
                )}
              </li>
              <li>
                <div className="icons">
                  <Tooltip title="Logout">
                    <LogoutIcon className="icon" onClick={handleLogout} />
                  </Tooltip>
                </div>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
