import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Collapse,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/RadioButtonUnchecked";
import progileImage from "../assets/images/profile-image.svg";

const Sidebar = ({ onViewChange }) => {
  const theme = useTheme();
  const [openPages, setOpenPages] = useState(true);
  const [selectedItem, setSelectedItem] = useState("overview");

  const handleTogglePages = () => {
    setOpenPages(!openPages);
  };

  const handleItemClick = (view) => {
    setSelectedItem(view);
    onViewChange(view);
  };

  const isSelected = selectedItem === "overview";

  return (
    <Drawer variant="permanent" anchor="left" PaperProps={{ sx: { width: 240 } }}>
      <List
        sx={{ fontSize: 14, fontWeight: 600, lineHeight: "20px", mt: 2, ml: 2, pb: 0 }}
      >
        <ListItem sx={{ mt: 1, p: 0 }}>
          <img
            src={progileImage}
            alt="profile"
            style={{ width: "24px", height: "24px" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontSize: "14px", fontWeight: "400", margin: "0px" }}>Bye Wind</p>
          </div>
        </ListItem>
      </List>
      <List
        subheader={
          <ListSubheader
            sx={{ fontSize: 14, fontWeight: 400, lineHeight: "20px", mt: 2 }}
          >
            Favorites
          </ListSubheader>
        }
      >
        <ListItem
          button
          onClick={() => handleItemClick("overview")}
          sx={{
            cursor: "pointer",
            backgroundColor: isSelected ? theme.palette.listItem.selected : "transparent",
            "&:hover": {
              backgroundColor: theme.palette.listItem.hover,
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "10px", mr: 1 }}>
            <CircleIcon fontSize="10px" />
          </ListItemIcon>
          <ListItemText
            primary="Overview"
            primaryTypographyProps={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }}
          />
        </ListItem>
        <ListItem
          button
          onClick={() => handleItemClick("projects")}
          sx={{
            cursor: "pointer",
            backgroundColor: !isSelected
              ? theme.palette.listItem.selected
              : "transparent",
            "&:hover": {
              backgroundColor: theme.palette.listItem.hover,
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "10px", mr: 1 }}>
            <CircleIcon fontSize="10px" />
          </ListItemIcon>
          <ListItemText
            primary="Projects"
            primaryTypographyProps={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }}
          />
        </ListItem>
      </List>
      <List
        subheader={
          <ListSubheader sx={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }}>
            Dashboards
          </ListSubheader>
        }
      >
        <ListItem button sx={{ mt: 1, cursor: "pointer" }}>
          {openPages ? <ExpandLess /> : <ExpandMore />}
          <ListItemIcon sx={{ minWidth: 0, mr: 0.5, ml: 1 }}>
            <DashboardIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText
            primary="Default"
            primaryTypographyProps={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }}
          />
        </ListItem>
        <ListItem button sx={{ cursor: "pointer" }}>
          {openPages ? <ExpandLess /> : <ExpandMore />}
          <ListItemIcon sx={{ minWidth: 0, mr: 0.5, ml: 1 }}>
            <ShoppingCartIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText
            primary="eCommerce"
            primaryTypographyProps={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }}
          />
        </ListItem>
        <ListItem button sx={{ cursor: "pointer" }}>
          {openPages ? <ExpandLess /> : <ExpandMore />}
          <ListItemIcon sx={{ minWidth: 0, mr: 0.5, ml: 1 }}>
            <BusinessIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText
            primary="Projects"
            primaryTypographyProps={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }}
          />
        </ListItem>
        <ListItem button sx={{ cursor: "pointer" }}>
          {openPages ? <ExpandLess /> : <ExpandMore />}
          <ListItemIcon sx={{ minWidth: 0, mr: 0.5, ml: 1 }}>
            <SchoolIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText
            primary="Online Courses"
            primaryTypographyProps={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }}
          />
        </ListItem>
      </List>

      <List
        subheader={
          <ListSubheader sx={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }}>
            Pages
          </ListSubheader>
        }
      >
        <ListItem button onClick={handleTogglePages} sx={{ mt: 1, cursor: "pointer" }}>
          {openPages ? <ExpandLess /> : <ExpandMore />}
          <ListItemIcon sx={{ minWidth: 0, mr: 0.5, ml: 1 }}>
            <AccountCircleIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText
            primary="User Profile"
            primaryTypographyProps={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }}
          />
        </ListItem>

        <Collapse in={openPages} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 9, cursor: "pointer" }}>
              <ListItemText
                primary="Overview"
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              />
            </ListItem>
            <ListItem button sx={{ pl: 9, cursor: "pointer" }}>
              <ListItemText
                primary="Projects"
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              />
            </ListItem>
            <ListItem button sx={{ pl: 9, cursor: "pointer" }}>
              <ListItemText
                primary="Campaigns"
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              />
            </ListItem>
            <ListItem button sx={{ pl: 9, cursor: "pointer" }}>
              <ListItemText
                primary="Documents"
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              />
            </ListItem>
            <ListItem button sx={{ pl: 9, cursor: "pointer" }}>
              <ListItemText
                primary="Followers"
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button sx={{ cursor: "pointer" }}>
          {openPages ? <ExpandLess /> : <ExpandMore />}
          <ListItemIcon sx={{ minWidth: 0, mr: 0.5, ml: 1 }}>
            <SettingsIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText
            primary="Account"
            primaryTypographyProps={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }}
          />
        </ListItem>
        <ListItem button sx={{ cursor: "pointer" }}>
          {openPages ? <ExpandLess /> : <ExpandMore />}
          <ListItemIcon sx={{ minWidth: 0, mr: 0.5, ml: 1 }}>
            <PeopleIcon sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText
            primary="Corporate"
            primaryTypographyProps={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
