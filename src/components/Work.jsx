import React from "react";
import SectionTitle from "./SectionTitle";
import { Container, Row, Col } from "react-bootstrap";
import "./Work.css";

const Work = () => {
  const workArrays = [
    [
      {
        name: "Nextwatch",
        description:
          "A next-to-watch list management web application with NoSQL database!",
        role: "Full Stack Developer",
        url: "https://github.com/user-attachments/assets/88101e09-4703-4a95-b217-170a431d9ffe",
        website: "https://next-watch.onrender.com",
      },
      {
        name: "Instock",
        description:
          "An inventories management web application with SQL database!",
        role: "Full Stack Developer",
        url: "https://github.com/user-attachments/assets/61b332a3-da11-40dd-968c-91ff0dd8535a",
        website: "https://instock-frontend-0kc1.onrender.com",
      },
    ],
    [
      {
        name: "Brainflix",
        description: "A video streaming platform with JSON storage!",
        role: "Frontend Developer",
        url: "https://github.com/user-attachments/assets/61b332a3-da11-40dd-968c-91ff0dd8535a",
        website: "https://brain-flix.onrender.com",
      },
      {
        name: "BandSite",
        description: "A music band landing page with band history and venues!",
        role: "Frontend Developer",
        url: "https://github.com/user-attachments/assets/f865b4da-4a6f-465b-84ac-628ca5c35ab1",
        website: "https://f2xiao.github.io/band-site",
      },
    ],
    [
      {
        name: "TravelSite",
        description:
          "A travel agency landing page with itineraries and activities!",
        role: "Frontend Developer",
        url: "https://raw.githubusercontent.com/f2xiao/travel-site/main/screenshot/Demo-work-fast.gif",
        website: "https://f2xiao.github.io/travel-site",
      },
      {
        name: "CoffeeShop",
        description: "A coffee shop landing page with products and menu!",
        role: "Frontend Developer",
        url: "https://raw.githubusercontent.com/f2xiao/coffeeshop/refs/heads/main/screenshot/Demo-work-fast.gif",
        website: "https://f2xiao.github.io/coffeeshop",
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
                    <p>
                      <a
                        className="work__links"
                        target="_blank"
                        href={work.website}
                        rel="noreferrer"
                      >
                        Check it out live
                      </a>
                    </p>
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
