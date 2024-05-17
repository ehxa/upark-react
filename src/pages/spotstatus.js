import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ParkingStatus() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://upark-knpbe.run-us-west2.goorm.site/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Parking Status</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>Timestamp: {item.timestamp}</h2>
          {Object.keys(item).map(key => (
            key !== 'timestamp' && <p key={key}>{key}: {item[key]}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ParkingStatus;
