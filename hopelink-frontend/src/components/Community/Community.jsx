import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Community = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from server
    axios.get('http://localhost:3000/explore')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Data from Server</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.role} - {item.email}-{item.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Community;
