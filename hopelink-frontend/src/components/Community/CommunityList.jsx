import React, { useEffect, useState } from "react";
import { Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./CommunityList.css";
import axios from "axios";
import CommunityItem from "./CommunityItem";

export default function CommunityList({ onSelectCommunity }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [communityList, setCommunityList] = useState([]); // State to store fetched pods
  //   const [loading, setLoading] = useState(true); // For handling loading state
  const userId = localStorage.getItem("user_id");

  const styles = {
    listContainer: {
      padding: "20px",
      background: "#2d3e54",
      textAlign: "left",
      minWidth: "0",
      paddingLeft: "30px",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      // backdropFilter: "blur(10px)",
    },
    heading: {
      marginBottom: "15px",
      fontSize: "1.4rem",
      fontWeight: "500",
      color: "white",
    },
    inputContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    input: {
      width: "100%",
      padding: "6px 20px 6px 15px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      outline: "none",
      fontSize: ".75rem",
    },
    list: {
      marginTop: "20px",
      maxHeight: "430px",
      overflowY: "auto",
      flex: "1",
      cursor: "pointer",
    },
    noCommunityMessage: {
      textAlign: "center",
      fontSize: "1rem",
      color: "#ccc",
    },
  };

  useEffect(() => {
    const fetchUserCommunity = async () => {
      axios
        .get("http://localhost:3000/login/getallusers")
        .then((response) => {
          setCommunityList(response.data);
          console.log(response.data); // Logs all users from the database
        })
        .catch((error) => {
          console.error("Error fetching all users:", error);
        });
    };
    fetchUserCommunity();
  }, [userId]);

  // Filtered list based on search query with added checks
  const filteredCommunityList = searchQuery
    ? communityList.filter(
        (community) =>
          community &&
          community.username &&
          community.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : communityList;

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* Show the menu icon and drawer only on small screens */}
      {isSmallScreen && (
        <>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
              "& .MuiDrawer-paper": {
                width: "250px",
                padding: "20px",
              },
            }}
          >
            <h4 style={styles.heading}>NGOs</h4>
            <div className="input-container" style={styles.inputContainer}>
              <input
                type="text"
                placeholder="Search"
                style={styles.input}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="community-list" style={styles.list}>
              {filteredCommunityList.length > 0 ? (
                filteredCommunityList.map((community, index) => (
                  <CommunityItem
                    key={index}
                    community={community}
                    onSelect={() => onSelectCommunity(community)}
                  />
                ))
              ) : (
                <p style={styles.noCommunityMessage}>
                  {searchQuery ? "No pods found" : "No pods available"}
                </p>
              )}
            </div>
          </Drawer>
        </>
      )}

      {/* Show the list container only on larger screens */}
      {!isSmallScreen && (
        <div className="list-container" style={styles.listContainer}>
          <h4 style={styles.heading}>NGOs</h4>
          <div className="input-container" style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Search"
              style={styles.input}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="community-list" style={styles.list}>
            {filteredCommunityList.length > 0 ? (
              filteredCommunityList.map((community, index) => (
                <CommunityItem
                  key={index}
                  community={community}
                  onSelect={() => onSelectCommunity(community)}
                />
              ))
            ) : (
              <p style={styles.noCommunityMessage}>
                {searchQuery
                  ? "No community's found"
                  : "No community's available"}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}