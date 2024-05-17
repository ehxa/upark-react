import React, { useState, useEffect } from "react";
import "./App.scss";
import Navbar from './components/navbar';
import MobileNavbar from './components/mobileNavbar';
import Central from './components/central';
import Reminders from "./components/reminders";
import Notifications from "./components/notifications";
import { Row, Col } from "react-bootstrap";

const App = () => {
  const [theme, setTheme] = useState('dark-mode');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <Row style={{ margin: 0 }}>
        <Col sm={2}>
          <Navbar />
          <MobileNavbar />
        </Col>
        <Col>
          <Central />
        </Col>
        <Col sm={2} className="widgets-main">
          <Col>
            <Notifications />
          </Col>
          <Col>
            <Reminders />
          </Col>
          <Col>
            <button onClick={toggleTheme} className="modeButton">
              {theme === 'dark-mode' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default App;
