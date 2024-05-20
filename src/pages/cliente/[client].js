import React, { useState, useEffect } from "react";
import "../../App.scss";
import Navbar from '../../components/navbar';
import MobileNavbar from '../../components/mobileNavbar';
import { Row, Col, Button, Card } from "react-bootstrap";
import lightdark from "../../images/lightdark.svg";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const ClientDetails = () => {
    const { clientId } = useParams();
    const [theme, setTheme] = useState('dark');
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();

    const handleTicketClick = (ticketName) => {
        navigate(`/pages/ticket/${ticketName}`);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.body.className = `${savedTheme}-mode`;

        const fetchTickets = async () => {
            try {
                const response = await axios.get(`https://upark-knpbe.run-us-west2.goorm.site/data/clients/${clientId}`);
                setTickets(response.data);
            } catch (error) {
                console.error('Error fetching tickets', error);
            }
        };

        fetchTickets();
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
                <Col className="parks cards">
                    <Row className="client card-row">
                        <h2 className="cardsTitle">Client Tickets</h2>
                        <Button className="backButton modeButton" href="/pages/clients"><img width="64" height="64" src="https://img.icons8.com/flat-round/64/back--v1.png" alt="back--v1"/>&nbsp;&nbsp;&nbsp;Go back to clients</Button>
                        {tickets.map(ticket => (
                            <Col key={ticket.idticket} sm={6} className="card-col">
                                <Card className="clientCards">
                                    <Card.Header as="h5">{ticket.title}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <h4>Details</h4>
                                            <p><strong>Time:</strong> {ticket.time}</p>
                                            <p><strong>Description:</strong> {ticket.description}</p>

                                            <h4>Place</h4>
                                            <p><strong>Name:</strong> {ticket.name}</p>

                                            <h4>Vehicle</h4>
                                            <p><strong>Model:</strong> {ticket.model}</p>
                                            <p><strong>Plate:</strong> {ticket.plate}</p>
                                        </Card.Text>
                                        <Button className="modeButton" onClick={() => handleTicketClick(ticket.idticket)} >See more</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
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

export default ClientDetails;