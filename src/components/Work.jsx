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
              <Col md={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "pink",
                    }}
                  >
                    pic
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <h3>Title</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum, soluta veniam esse aut perspiciatis eaque.
                </p>
                <p>Role</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={4}>
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
                      width: "100px",
                      height: "100px",
                      backgroundColor: "pink",
                    }}
                  >
                    pic
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <h3>Title</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum, soluta veniam esse aut perspiciatis eaqu.
                </p>
                <p>Role</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginBottom: "4rem" }}>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "pink",
                    }}
                  >
                    pic
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <h3>Title</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum, soluta veniam esse aut perspiciatis eaque.
                </p>
                <p>Role</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={4}>
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
                      width: "100px",
                      height: "100px",
                      backgroundColor: "pink",
                    }}
                  >
                    pic
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <h3>Title</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum, soluta veniam esse aut perspiciatis eaqu.
                </p>
                <p>Role</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginBottom: "4rem" }}>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "pink",
                    }}
                  >
                    pic
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <h3>Title</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum, soluta veniam esse aut perspiciatis eaque.
                </p>
                <p>Role</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={4}>
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
                      width: "100px",
                      height: "100px",
                      backgroundColor: "pink",
                    }}
                  >
                    pic
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <h3>Title</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum, soluta veniam esse aut perspiciatis eaqu.
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
