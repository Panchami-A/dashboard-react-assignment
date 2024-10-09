import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import lightIcon from "../assets/images/header-icon-light.svg";
import darkIcon from "../assets/images/header-icon-dark.svg";
import darkFavouriteIcon from "../assets/images/header-favourite-light.svg";
import lightFavouriteIcon from "../assets/images/header-favourite-dark.svg";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import TimerIcon from "@mui/icons-material/AvTimer";

const Topbar = () => {
  const darkMode = useSelector((state) => state.dashboard.darkMode);

  return (
    <AppBar position="static" elevation={1} color="inherit">
      <Toolbar>
        <img
          src={darkMode ? darkIcon : lightIcon}
          alt="Header Icon"
          style={{ width: "28px", height: "28px", marginRight: "8px" }}
        />
        <img
          src={darkMode ? darkFavouriteIcon : lightFavouriteIcon}
          alt="Header Icon"
          style={{ width: "28px", height: "28px", marginRight: "8px" }}
        />
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, marginRight: "8px" }}
          className="header-text"
        >
          Dashboard
        </Typography>
        <IconButton color="inherit" sx={{ mr: 1, p: 0 }}>
          <NotificationsNoneIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton color="inherit" sx={{ mr: 1, p: 0 }}>
          <WbSunnyOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton color="inherit" sx={{ mr: 1, p: 0 }}>
          <TimerIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton color="inherit" sx={{ mr: 1, p: 0 }}>
          <img
            src={darkMode ? darkIcon : lightIcon}
            alt="Header Icon"
            style={{ width: "28px", height: "28px" }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
