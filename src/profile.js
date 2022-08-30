import React from "react";
import "./profile.css";
import Image1 from "./images/profile-pic.jpg";
import Image2 from "./images/profile-pic-02.jpg";
import Image3 from "./images/profile-pic-03.jpg";
import Image4 from "./images/profile-pic-04.jpg";
import EditIcon from "@mui/icons-material/Edit";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";

const profile = () => {
  return (
    <>
      <div className="profile-card">
        <div className="profile-head">
          <div className="profile-img">
            <a href="#">
              <img src={Image1} alt="profile-img" />{" "}
              <span className="pen">
                <EditIcon />{" "}
              </span>
            </a>
            <div>
              <h3>Nick Herasimenka</h3>
            </div>
            <div>
              <h6>United States</h6>
            </div>
            <div>
              <a href="#">
                {" "}
                <span className="tweet icon">
                  <TwitterIcon />{" "}
                </span>
              </a>
              <a href="#">
                {" "}
                <span className="feb icon">
                  <FacebookIcon />{" "}
                </span>
              </a>
              <a href="#">
                {" "}
                <span className="instagram icon">
                  <InstagramIcon />{" "}
                </span>
              </a>
              <a href="#">
                {" "}
                <span className="linkedin icon">
                  <LinkedInIcon />{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
        <Divider light />

        <div className="profile-body">
          <div className="user-heading">
            <div>
              <h6>Our Users</h6>
            </div>
            <div>
              <MoreVertIcon className="three-dot-icon" />
            </div>
          </div>
          {/* data level */}
          <div className="profile-data-2">
            <div className="profile-logo-2">
              <a href="#">
                <img src={Image2} alt="profile-image" />
              </a>
            </div>
            <div className="profile-heading-2">
              <div className="profile-heading-main">
                <h4>Drew James</h4>
              </div>
              <div className="profile-heading-sub">
                <h6>United States</h6>
              </div>
            </div>
            <div>
              <h6>Mobile : 8715674877</h6>
            </div>
          </div>


          <div className="profile-data-2">
    <div className="profile-logo-2">
      <a href="#">
        <img src={Image3} alt="profile-image" />
      </a>
    </div>
    <div className="profile-heading-2">
      <div className="profile-heading-main">
        <h4>Bavid Kames</h4>
      </div>
      <div className="profile-heading-sub">
        <h6>United States</h6>
      </div>
    </div>
    <div>
      <h6>Mobile : 8715674877</h6>
    </div>
  </div>


  <div className="profile-data-2">
    <div className="profile-logo-2">
      <a href="#">
        <img src={Image4} alt="profile-image" />
      </a>
    </div>
    <div className="profile-heading-2">
      <div className="profile-heading-main">
        <h4>Lavid Emes</h4>
      </div>
      <div className="profile-heading-sub">
        <h6>United States</h6>
      </div>
    </div>
    <div>
      <h6>Mobile : 8715674877</h6>
    </div>
  </div>
        </div>
      </div>
    </>
  );
};

export default profile;
