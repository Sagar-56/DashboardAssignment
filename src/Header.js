import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Image from "./images/profile-pic.jpg";
import ProfileListCard from "./ProfileListCard";
import ListChart from "./listChart";
import Profile from "./profile";
import Video from "./video";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotesIcon from "@mui/icons-material/Notes";

const Header = () => {
  const [isNav, SetIsNav] = useState(false);
  const [isSearch, SetIsSearch] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={isNav ? "sector" : "section"}>
        <div className="Dashboard">
          <h2>
            ACME{" "}
            <span onClick={() => SetIsNav(!isNav)}>
              {" "}
              <ion-icon name="close-outline"></ion-icon>
            </span>
          </h2>
          <ul>
            <li>
              <ion-icon name="home-outline"></ion-icon> Home
            </li>
            <li>
              <ion-icon name="grid-outline"></ion-icon> Dashboard
            </li>
            <li>
              <ion-icon name="chatbox-outline"></ion-icon> Inbox
            </li>
            <li>
              <ion-icon name="reader-outline"></ion-icon> Products
            </li>
            <li>
              <ion-icon name="settings-outline"></ion-icon> Admin
            </li>
          </ul>
        </div>
      </div>
      <div className="MainBody">
        <nav>
          <ul className="ul ul2">
            <li>
              <button onClick={() => SetIsNav(!isNav)}>
                {isNav ? (
                  <ion-icon name="close-outline"></ion-icon>
                ) : (
                  <NotesIcon style={{ fontSize: "30px" }} id="barIcon" />
                )}
              </button>
            </li>
            <li>
              <label>
                <ion-icon
                  name="search-outline"
                  onClick={() => SetIsSearch(!isSearch)}
                ></ion-icon>
                <input
                  className={isSearch ? "inputBox" : false}
                  type="text"
                  placeholder="Search transactions, invoices or help"
                />
                &ensp;
                <span className={isSearch ? "hide" : true} id="transaction">
                  Search transactions, invoices or help
                </span>
              </label>
            </li>
          </ul>

          {/* right side profile */}

          <ul className="ul ul3">
            <li>
              <ProfileListCard />
            </li>
            <li>
              <select>
                <option hidden>John Doe</option>
                <option>David Kames</option>
                <option>Alexa Marry</option>
                <option>Eva Maria</option>
              </select>
            </li>
            <li>
              {/* <div> */}
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Link to={`#`}>
                  <img src={Image} alt="image" className="profile-image" />
                </Link>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem className="menuitem" onClick={handleClose}>
                  <ion-icon name="person-outline"></ion-icon> My Profile
                </MenuItem>
                <MenuItem className="menuitem" onClick={handleClose}>
                  <ion-icon name="reader-outline"></ion-icon> Billing
                </MenuItem>
                <MenuItem className="menuitem" onClick={handleClose}>
                  <ion-icon name="log-out-outline"></ion-icon> Logout
                </MenuItem>
              </Menu>
            </li>
            <li></li>
          </ul>
        </nav>
        <div className="home">
          <div className="head">
            <div className="heading">
              <div className="overview">
                <h3>Overview</h3>
              </div>
              <div className="add-fund">
                <button>
                  Add Funds
                  <span>
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="chart">
            <LineChart />
          </div>
          <div className="pie-chart">
            <PieChart />
          </div>
          <div className="profile">
            <Profile />
          </div>

          <div className="list-chart">
            <ListChart />
          </div>
          <div className="video">
            <Video />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
