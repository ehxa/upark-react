import React, { useState, useEffect } from "react";
import "../../App.scss";
import Navbar from '../../components/navbar';
import MobileNavbar from '../../components/mobileNavbar';
import Central from '../../components/central';
import Reminders from "../../components/reminders";
import Notifications from "../../components/notifications";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import parkingLotImage from "./../../images/parkinglot.png"; 
import { useParams } from "react-router-dom";

const SpotStatus = () => {
  const {parkName} = useParams();
  const [theme, setTheme] = useState('dark');
  const [data, setData] = useState({
    A1: 'R',
    A2: 'R',
    A3: 'R',
    A4: 'R'
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.className = `${savedTheme}-mode`;
  }, []);

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://upark-knpbe.run-us-west2.goorm.site/data/spots')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case 'O': return 'occupied';
      case 'L': return 'free';
      case 'R': return 'reserved';
      default: return '';
    }
  };

  return (
    <>
      <Row style={{ margin: 0 }}>
        <Col sm={2}>
          <Navbar />
          <MobileNavbar />
        </Col>
        <Col className="parks cards">
          <h2 className="parkTitle">{parkName}</h2>
          <Row className="parksRow">
          <div className="parking-lot">
            <img src={parkingLotImage} alt="Parking Lot" className="parking-lot-image" />
            <div className={`spot ${getStatusClass(data.A1)}`} style={{ top: '33%', left: '37.5%' }}></div>
            <div className={`spot ${getStatusClass(data.A2)}`} style={{ top: '33%', left: '67.6%' }}></div>
            <div className={`spot ${getStatusClass(data.A3)}`} style={{ top: '57%', left: '37.5%' }}></div>
            <div className={`spot ${getStatusClass(data.A4)}`} style={{ top: '57%', left: '67.6%' }}></div>
          </div>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SpotStatus;
