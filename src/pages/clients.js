import React, { useState, useEffect } from "react";
import "../App.scss";
import Navbar from '../components/navbar';
import MobileNavbar from '../components/mobileNavbar';
import { Row, Col, Button, Card } from "react-bootstrap";
import lightdark from "../images/lightdark.svg";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Clients = () => {
    const [theme, setTheme] = useState('dark');
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();

    const handleClientClick = (clientName) => {
        navigate(`/pages/cliente/${clientName}`);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.body.className = `${savedTheme}-mode`;

        const fetchClients = async () => {
            try {
                const response = await axios.get('https://upark-knpbe.run-us-west2.goorm.site/data/clients');
                setClients(response.data);
            } catch (error) {
                console.error('Error fetching clients', error);
            }
        };

        fetchClients();
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
                        <h2 className="cardsTitle">Clients</h2>
                        {clients.map(client => (
                            <Col key={client.iduser} sm={4} className="card-col">
                                <Card className="clientCards">
                                    <Card.Header as="h5">{client.username}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <p><strong>Name:</strong> {client.first_name} {client.surname}</p>
                                            <p><strong>Email:</strong> {client.email}</p>
                                            <p><strong>Phone:</strong> {client.phone}</p>
                                            <p><strong>Age:</strong> {client.age}</p>
                                            <p><strong>Country:</strong> {client.country}</p>
                                        </Card.Text>
                                        <Button className="modeButton" onClick={() => handleClientClick(client.iduser)} >See more</Button>
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

export default Clients;