 import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
        <Navbar.Brand href="#home" className="text-primary fw-bold">~NGO~</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link onClick={() => setShowForm(true)}>Volunteer</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

       <section className="hero" id="home">
        <div className="container">
            <h1>Let's Make The World Better Place</h1>
            <p>Join us in our mission to create positive change in communities around the world. Your support can help transform lives.</p>
            <a href="#volunteer" className="btn" onClick={() => setShowForm(true)}>Become a Volunteer</a>
        </div>
    </section>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container className="hero-content text-white">
          <h1 className="display-4 fw-bold mb-4">Making a Difference Together</h1>
          <p className="lead mb-4">Join our team to create positive change in worldwide.</p>
          <div>
            <Button variant="primary" size="lg" className="me-3" onClick={() => setShowForm(true)}>
              Volunteer Now
            </Button>
            <Button variant="outline-dark" size="lg" href="#about">
              Learn More
            </Button>
          </div>
        </Container>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">About Our NGO</h2>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216" 
                alt="Our team" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="mb-3">Our Mission</h3>
              <p>Founded in 2025, NGO is dedicated to improving lives through education, healthcare, and sustainable community development.</p>
              <p>We believe in empowering communities by providing resources and opportunities for growth and self-sufficiency.</p>
              <p>Our programs have reached over 50,000 beneficiaries across 15 countries, creating lasting impact through:</p>
              <ul>
                <li>Education initiatives</li>
                <li>Healthcare access</li>
                <li>Community development</li>
                <li>Disaster relief</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Volunteer Form Modal */}
      <Modal show={showForm} onHide={() => setShowForm(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Volunteer Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Area of Interest</Form.Label>
              <Form.Select
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
              >
                <option value="">Select your interest</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="community">Community Development</option>
                <option value="fundraising">Fundraising</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Why do you want to volunteer with us?</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit Application
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white">
        <Container className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} ~NGO~. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;