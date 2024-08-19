import React from "react";
import SectionTitle from "./SectionTitle";
import { Container, Row, Col } from "react-bootstrap";

const Work = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <SectionTitle title="my work" />
      <p style={{ textAlign: "center" }}>
        A collection of my recent projects. Contains front-end, back-end and
        full-stack projects.
      </p>
      <Container
        fluid
        style={{
          width: "80%",
          paddingTop: "4rem",
        }}
      >
        <Row style={{ marginBottom: "4rem" }}>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      backgroundColor: "pink",
                    }}
                  >
                    pic
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <h3>Title</h3>
                <p>
                  A next-to-watch list management web application with NoSQL
                  database!
                </p>
                <p>Role</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      backgroundColor: "pink",
                    }}
                  >
                    pic
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <h3>Title</h3>
                <p>
                  A next-to-watch list management web application with NoSQL
                  database!
                </p>
                <p>Role</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Work;
