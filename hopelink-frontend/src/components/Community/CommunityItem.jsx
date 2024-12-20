import { Avatar } from "@mui/material";
import React from "react";

export default function CommunityItem({ community, onSelect }) {
  const styles = {
    listItem: {
      display: "flex",
      alignItems: "center",
      padding: "10px",
      boxShadow: "0 .5px 0 rgba(225, 225, 225)",
      justifyContent: "flex-start",
    },
    profileImage: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      marginRight: "15px",
    },
    listItemText: {
      display: "flex",
      flexDirection: "column",
    },
    listItemName: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#fff",
    },
    listItemDescription: {
      fontSize: ".75rem",
      color: "#ddd",
    },
  };

  console.log("first" + community);

  return (
    <div className="list-item" onClick={onSelect} style={styles.listItem}>
      <Avatar
        src="https://via.placeholder.com/40"
        alt="Profile"
        style={styles.profileImage}
      />
      <div className="list-item-text" style={styles.listItemText}>
        <span className="list-item-name" style={styles.listItemName}>
          {community.ngoName}
        </span>
      </div>
    </div>
  );
}
