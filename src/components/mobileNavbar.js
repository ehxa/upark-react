import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import logo from "../images/logo.svg";

function mobileNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="mobileNavbar">
            <Container>
                <Navbar.Brand href="/" className='mobileHome'><img src={logo} alt="Upark" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Button className='mobileButtons' href='/pages/parkfacilities'>PARK FACILITIES</Button>
                        <Button className='mobileButtons' href='/pages/clients'>CLIENTS</Button>
                        <Button className='mobileButtons' href='/pages/tickets'>TICKETS</Button>
                        <Button className='mobileButtons' href='/pages/sensors'>SENSORS AND DEVICES</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default mobileNavbar;