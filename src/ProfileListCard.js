import React, { useState } from "react";
import "./ProfileListCard.css";
import { ProfileData } from "./data/ProfileApi";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";

import Image1 from "./images/profile-pic-02.jpg";
import Image2 from "./images/profile-pic-03.jpg";
import Image3 from "./images/profile-pic-04.jpg";

const ProfileListCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [count, setCount] = useState(3);
  const handleVisible = () => {
    setCount(0);
  };

  return (
    <>
      <div className="profileList">
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Notifications">
            <IconButton
              onClick={handleClick}
              size="small"
              //   sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Badge badgeContent={count} color="success">
                <ion-icon
                  id="ion-icon"
                  name="notifications-outline"
                  onClick={handleVisible}
                ></ion-icon>
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {ProfileData.map((item, index) =>
          {
            return(
            <MenuItem key={`id`}>
              <Avatar
                alt="Remy Sharp"
                src={item.image}
                style={{ width: "40px", height: "40px" }}
              />
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#000",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline", fontSize: "10px" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.subHeading}
                    </Typography>
                  </React.Fragment>
                }
              />
              <ListItemText
                style={{ display: "flex", justifyContent: "flex-end" }}
                inset
              >
                {item.time}
              </ListItemText>
            </MenuItem>
          )
          })}
          <Divider />
          <MenuItem
            style={{
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#3B86FF",
            }}
          >
            Show More
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default ProfileListCard;
