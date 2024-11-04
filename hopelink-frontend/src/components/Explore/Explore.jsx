import React, { useState, useEffect } from "react";
import axios from "axios";
import "./explore.css";

function Explore() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [joinedIds, setJoinedIds] = useState(new Set());

  useEffect(() => {
    axios
      .get("http://localhost:3000/ngo/get-all-ngo")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  const handleJoinToggle = async (id) => {
    try {
      const response = await axios.post("http://localhost:3000/ngo/join", {
        userId: localStorage.getItem("user_id"), // Replace with the actual user ID
        ngoId: id,
      });

      // Update joined IDs based on response status
      if (response.data.request.status === "Withdrawn") {
        setJoinedIds(
          (prevIds) => new Set([...prevIds].filter((item) => item !== id))
        );
      } else {
        setJoinedIds((prevIds) => new Set(prevIds.add(id)));
      }

      // Notify the user of the action taken
      alert(response.data.message); // Replace with a toast notification in production
    } catch (error) {
      console.error("Failed to process join request", error);
      alert("Failed to process join request");
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSearchTerm(category === "All" ? "" : category);
  };

  const filteredData = data.filter((item) =>
    item.ngoName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="explore-main">
      <div className="explore-top">
        <input
          type="text"
          className="explore-search"
          placeholder="Search NGOs..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="explore-buttons">
          {[
            "All",
            "Water",
            "Education",
            "Land",
            "Child and Women",
            "Animals",
            "Forest",
            "Other",
          ].map((category) => (
            <button
              key={category}
              className={`explore-btn ${
                searchTerm === category ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="explore-content">
        <div className="explore-card-grid">
          {filteredData.map((item) => (
            <div key={item._id} className="explore-card">
              <h3 className="card-title">{item.ngoName}</h3>
              <p className="card-detail">
                <strong>Type:</strong> {item.typeOfNGO}
              </p>
              <p className="card-detail">
                <strong>Founded:</strong>{" "}
                {new Date(item.yearOfEstablishment).toLocaleDateString()}
              </p>
              <p className="card-detail">
                <strong>Location:</strong> {item.city}, {item.state},{" "}
                {item.country}
              </p>
              <p className="card-detail">
                <strong>Contact:</strong> {item.contactNumber}
              </p>
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="ngo-website"
              >
                Visit Website
              </a>
              <button
                className={`join-btn ${
                  joinedIds.has(item._id) ? "withdraw" : "join"
                }`}
                onClick={() => handleJoinToggle(item._id)}
              >
                {joinedIds.has(item._id) ? "Withdraw" : "Join Request"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
