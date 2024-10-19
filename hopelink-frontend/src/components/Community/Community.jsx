import React, { useState } from "react";
import CommunityList from "./CommunityList";
import ChatContainer from "./ChatContainer";

export default function Community() {
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  const handleSelectCommunity = (userId) => {
    setSelectedCommunity(userId);
  };

  const styles = {
    communityContainerStyle: {
      display: "grid",
      gridTemplateColumns: "25% 75%",
      margin: "10px",
      color: "#2d3e54",
      height: "85vh",
      boxSizing: "border-box",
      overflow: "hidden",
    },
  };

  return (
    <div className="community-container" style={styles.communityContainerStyle}>
      <CommunityList onSelectCommunity={handleSelectCommunity} />
      <ChatContainer
        community={selectedCommunity}
        isOpen={!!selectedCommunity}
      />
    </div>
  );
}
