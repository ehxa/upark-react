import React, { useState, useEffect } from "react";
import "../App.scss";
import Navbar from '../components/navbar';
import MobileNavbar from '../components/mobileNavbar';
import Central from '../components/central';
import Reminders from "../components/reminders";
import Notifications from "../components/notifications";
import { Row, Col, Button } from "react-bootstrap";
import park1 from "../images/parque1.png";
import park2 from "../images/parque2.jpg";
import park3 from "../images/parque3.png";
import park4 from "../images/parque4.png";
import lightdark from "../images/lightdark.svg"
import { useNavigate } from 'react-router-dom';

const ParkFacilites = () => {
  const [theme, setTheme] = useState('dark');
  const navigate = useNavigate();

  const handleParkClick = (parkName) => {
    navigate(`/pages/spotstatus/${parkName}`);
  };


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.className = `${savedTheme}-mode`;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = `${newTheme}-mode`;
  };

  return (
    <>
      <Row style={{ margin: 0 }}>
        <Col sm={2}>
          <Navbar />
          <MobileNavbar />
        </Col>
        <Col className="parks">
          <Button onClick={() => handleParkClick('Plaza Center')} className='parksButtons'><img src={park1} alt="Plaza Center" />Plaza Center</Button>
          <Button onClick={() => handleParkClick('Almirante Reis')} className='parksButtons'><img src={park2} alt="Almirante Reis" />Almirante Reis</Button>
          <Button onClick={() => handleParkClick('Tecnoparque')} className='parksButtons'><img src={park3} alt="Tecnoparque" />Tecnoparque</Button>
          <Button onClick={() => handleParkClick('Frentemar Lido')} className='parksButtons'><img src={park4} alt="Frentemar Lido" />Lido</Button>
        </Col>
        <Col sm={1}>
        <button className="modeButton" onClick={toggleTheme}>
          <img src={lightdark} alt="" />
        </button>
        </Col>
      </Row>
    </>
  );
};

export default ParkFacilites;
