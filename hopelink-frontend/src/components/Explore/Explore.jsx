import React, { useState, useEffect } from "react";
import axios from "axios";
import "./explore.css";

function Explore() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from server
    axios
      .get("http://localhost:3000/explore")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleClick = (e) => {
    if (e.target.value == "Water") {
    }
  };

  return (
    <div className="explore-main">
      <div className="explore-buttons">
        <button className="explore-btn" onClick={handleClick} value="Water">
          Water
        </button>
        <button className="explore-btn" onClick={handleClick} value="Education">
          Education
        </button>
        <button className="explore-btn" onClick={handleClick} value="Land">
          Land
        </button>
        <button
          className="explore-btn"
          onClick={handleClick}
          value="Child and Women"
        >
          Child and Women
        </button>
        <button className="explore-btn" onClick={handleClick} value="Animals">
          Animals
        </button>
        <button className="explore-btn" onClick={handleClick} value="Forest">
          Forest
        </button>
        <button className="explore-btn" onClick={handleClick} value="Other">
          Other
        </button>
      </div>
      <div className="explore-content">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.email}
              <br></br>
              {item.ngoName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Explore;
