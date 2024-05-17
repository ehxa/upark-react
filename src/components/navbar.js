import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import logo from "../images/logo.svg";
import parks from "../images/parks.svg";
import clients from "../images/clients.svg";
import tickets from "../images/tickets.svg";
import sensors from "../images/sensors.svg";


function mainNavbar() {
  return (
    <div className='mainNavbar'>
      <div className='home'>
        <Button className='navHome' href='/'><img src={logo} alt="Upark" /></Button>
      </div>
      <div className='pages'>
        <Button className='navButtons' href='/pages/parkfacilities'><img src={parks} alt="" />PARK FACILITIES</Button>
        <Button className='navButtons' href='/pages/clients'><img src={clients} alt="" />CLIENTS</Button>
        <Button className='navButtons' href='/pages/tickets'><img src={tickets} alt="" />TICKETS</Button>
        <Button className='navButtons' href='/pages/sensors'><img src={sensors} alt="" />SENSORS AND DEVICES</Button>
      </div>
    </div>
  );
}

export default mainNavbar;