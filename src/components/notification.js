import React from "react";
import { Drawer, List, ListItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BugReportIcon from "@mui/icons-material/BugReport";
import progileImage from "../assets/images/profile-image.svg";
import progileImage2 from "../assets/images/profile-image-2.svg";

const Notification = () => {
  return (
    <Drawer variant="permanent" anchor="right" PaperProps={{ sx: { width: 240 } }}>
      <List
        sx={{ fontSize: 14, fontWeight: 600, lineHeight: "20px", mt: 2, ml: 2, pb: 0 }}
      >
        Notifications
        <ListItem sx={{ mt: 1, p: 0 }}>
          <AccountCircleIcon sx={{ fontSize: 24 }} />
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontSize: "14px", fontWeight: "400", margin: "0px" }}>
              New user registered
            </p>
            <p style={{ fontSize: "12px", fontWeight: "400", margin: "0px" }}>
              59 minutes ago
            </p>
          </div>
        </ListItem>
        <ListItem sx={{ p: 0, mt: 1 }}>
          <BugReportIcon sx={{ fontSize: 24 }} />
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontSize: "14px", fontWeight: "400", margin: "0px" }}>
              You have a bug that needs...
            </p>
            <p style={{ fontSize: "12px", fontWeight: "400", margin: "0px" }}>
              12 hours ago
            </p>
          </div>
        </ListItem>
      </List>

      <List sx={{ fontSize: 14, fontWeight: 600, lineHeight: "20px", mt: 1, ml: 2 }}>
        Activities
        <ListItem sx={{ mt: 1, p: 0 }}>
          <img
            src={progileImage}
            alt="profile"
            style={{ width: "24px", height: "24px" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontSize: "14px", fontWeight: "400", margin: "0px" }}>
              New user registered
            </p>
            <p style={{ fontSize: "12px", fontWeight: "400", margin: "0px" }}>
              59 minutes ago
            </p>
          </div>
        </ListItem>
        <ListItem sx={{ mt: 1, p: 0 }}>
          <img
            src={progileImage2}
            alt="secondprofile"
            style={{ width: "24px", height: "24px" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontSize: "14px", fontWeight: "400", margin: "0px" }}>
              New user registered
            </p>
            <p style={{ fontSize: "12px", fontWeight: "400", margin: "0px" }}>
              59 minutes ago
            </p>
          </div>
        </ListItem>
      </List>

      <List sx={{ fontSize: 14, fontWeight: 600, lineHeight: "20px", mt: 1, ml: 2 }}>
        Contacts
        <ListItem sx={{ mt: 1, p: 0 }}>
          <img
            src={progileImage}
            alt="profile"
            style={{ width: "24px", height: "24px" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontSize: "12px", fontWeight: "400", margin: "0px" }}>
              Andi lane
            </p>
          </div>
        </ListItem>
        <ListItem sx={{ mt: 1, p: 0 }}>
          <img
            src={progileImage2}
            alt="secondprofile"
            style={{ width: "24px", height: "24px" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontSize: "12px", fontWeight: "400", margin: "0px" }}>
              Natali Craig
            </p>
          </div>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Notification;
