import "./header.css";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PeopleIcon from "@mui/icons-material/People";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="header">
      <header>
        <div className="logo">
          <img src={logo} alt="" className="logoimg" />
          <span className="org-name">HOPE</span>
        </div>
        <div className="search">
          <SearchIcon className="icon" />
          <input type="text" className="searchbar" placeholder="Search" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink className="navlink" to="">
                <div className="icons">
                  <CropOriginalIcon className="icon" />
                  <span className="icon">Feed</span>
                </div>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="navlink" to="post">
                <div className="icons">
                  <AddCircleOutlineIcon className="icon" />
                  <span className="icon">Post</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="community">
                <div className="icons">
                  <PeopleIcon className="icon" />
                  <span className="icon">Community</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="profile">
                <div className="icons">
                  <ManageAccountsIcon className="icon" />
                  <span className="icon">Profile</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
