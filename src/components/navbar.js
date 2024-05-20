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
import avatar from "../images/avatar.svg";


function mainNavbar() {
  return (
    <div className='mainNavbar'>
      <div className='home'>
        <Button className='navHome' href='/pages/parkfacilities'><img src={logo} alt="Upark" /></Button>
      </div>
      <div className='pages'>
        <Button className='navButtons' href='/pages/parkfacilities'><img src={parks} alt="" />&nbsp;&nbsp;&nbsp;PARK FACILITIES</Button>
        <Button className='navButtons' href='/pages/clients'><img src={clients} alt="" />&nbsp;&nbsp;&nbsp;CLIENTS</Button>
        <Button className='navButtons' href='/pages/tickets'><img src={tickets} alt="" />&nbsp;&nbsp;&nbsp;TICKETS</Button>
        <Button className='navButtons' href='/'><img src={avatar} alt="" />&nbsp;&nbsp;&nbsp;UAdmin</Button>
      </div>
    </div>
  );
}

export default mainNavbar;