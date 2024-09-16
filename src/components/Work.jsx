import React from "react";
import SectionTitle from "./SectionTitle";
import { Container, Row, Col } from "react-bootstrap";

const Work = () => {
  const workArrays = [
    [
      {
        name: "Nextwatch",
        description:
          "A next-to-watch list management web application with NoSQL database!",
        role: "Full Stack Developer",
      },
      {
        name: "Instock",
        description:
          "An inventories management web application with SQL database!",
        role: "Full Stack Developer",
      },
    ],
    [
      {
        name: "Brainflix",
        description: "A video streaming platform with JSON storage!",
        role: "Frontend Developer",
      },
      {
        name: "BandSite",
        description: "A music band landing page with band history and venues!",
        role: "Frontend Developer",
        url: "https://github.com/user-attachments/assets/f865b4da-4a6f-465b-84ac-628ca5c35ab1",
      },
    ],
    [
      {
        name: "TravelSite",
        description:
          "A travel agency landing page with itineraries and activities!",
        role: "Frontend Developer",
      },
      {
        name: "CoffeeShop",
        description: "A coffee shop landing page with products and menu!",
        role: "Frontend Developer",
      },
    ],
  ];
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
        {workArrays.map((workArray) => (
          <Row style={{ marginBottom: "4rem" }}>
            {workArray.map((work) => (
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
                      <img
                        style={{
                          width: "200px",
                          height: "200px",
                        }}
                        src={work.url}
                        alt={`${work.name} gif`}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <h3>{work.name}</h3>
                    <p>{work.description}</p>
                    <p>{work.role}</p>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Work;
