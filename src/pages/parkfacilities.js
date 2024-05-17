import React, { useState, useEffect } from "react";
import "../App.scss";
import Navbar from '../components/navbar';
import MobileNavbar from '../components/mobileNavbar';
import Central from '../components/central';
import Reminders from "../components/reminders";
import Notifications from "../components/notifications";
import { Row, Col } from "react-bootstrap";
import park1 from "../images/parque1.png";
import park2 from "../images/parque2.jpg";
import park3 from "../images/parque3.png";
import park4 from "../images/parque4.png";
import {Button} from "react-bootstrap";

const ParkFacilites = () => {

  return (
    <>
      <Row style={{ margin: 0 }}>
        <Col sm={2}>
          <Navbar></Navbar>
          <MobileNavbar></MobileNavbar>
        </Col>
        <Col className="parks">
          <Button className='parksButtons' href='/pages/parque1'><img src={park1} alt="" />Plaza Center</Button>
          <Button className='parksButtons' href='/pages/parque2'><img src={park2} alt="" />Almirante Reis</Button>
          <Button className='parksButtons' href='/pages/parque3'><img src={park3} alt="" />Tecnoparque</Button>
          <Button className='parksButtons' href='/pages/parque3'><img src={park4} alt="" />Lido</Button>
        </Col>
        <Col sm={2} className="widgets-main">
          <Col>
            <Notifications></Notifications>
          </Col>
          <Col>
            <Reminders></Reminders>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default ParkFacilites;