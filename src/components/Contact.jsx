import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Spinner, Alert } from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, variant: "", message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }, [alert]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = (serviceId, templateId, templateParams) => {
    window.emailjs
      .send(serviceId, templateId, formData)
      .then((response) => {
        setLoading(false);
        setAlert({
          show: true,
          variant: "success",
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
        setValidated(false);
      })
      .catch((error) => {
        setLoading(false);
        setAlert({
          show: true,
          variant: "danger",
          message: "Failed to send the message. Please try again later.",
        });
      });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    console.log(formData);
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      e.preventDefault();
      setLoading(true);
      const templateId = "contact_service";
      const serviceId = "contact_form";
      sendMessage(templateId, serviceId, formData);
    }
  };
  return (
    <div
      className="container mt-5"
      style={{ height: "100vh", paddingTop: "2rem" }}
    >
      <h2 style={{ textAlign: "center", padding: "3rem 0" }}>Contact</h2>
      {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="validationMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={4}
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            style={{ resize: "vertical" }}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a message.
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          type="submit"
          disabled={loading}
          style={{ background: "#c3c3c3", border: "none", color: "black" }}
        >
          {loading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            "Send"
          )}
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
