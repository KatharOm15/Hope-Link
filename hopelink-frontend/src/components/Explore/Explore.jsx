import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';

function Explore() {

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
            <Header/>
         
          <ul>
            {
            data.map((item) => (
              <li key={item.id}>
                {item.email}<br></br>{item.username}
              </li>
            ))}
          </ul>
        </div>
      );
     
}

export default Explore