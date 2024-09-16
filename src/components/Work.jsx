import React from "react";
import SectionTitle from "./SectionTitle";
import { Container, Row, Col } from "react-bootstrap";
import "./Work.css";
import icon from "../assets/icons/coding.gif";

const Work = () => {
  const workArrays = [
    [
      {
        name: "Nextwatch",
        description:
          "A next-to-watch list management web application with NoSQL database!",
        role: "Full Stack Developer",
        url: "https://github.com/user-attachments/assets/88101e09-4703-4a95-b217-170a431d9ffe",
        repo: "https://github.com/f2xiao/next-watch",
        website: "https://next-watch.onrender.com",
      },
      {
        name: "Instock",
        description:
          "An inventories management web application with SQL database!",
        role: "Full Stack Developer",
        url: "https://github.com/user-attachments/assets/61b332a3-da11-40dd-968c-91ff0dd8535a",
        repo: "https://github.com/f2xiao/instock-frontend",
        website: "https://instock-frontend-0kc1.onrender.com",
      },
    ],
    [
      {
        name: "Brainflix",
        description: "A video streaming platform with JSON storage!",
        role: "Frontend Developer",
        url: "https://private-user-images.githubusercontent.com/25191617/361159634-0a460969-d18e-43af-a54c-5f27a2b94566.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY1MjU5MjgsIm5iZiI6MTcyNjUyNTYyOCwicGF0aCI6Ii8yNTE5MTYxNy8zNjExNTk2MzQtMGE0NjA5NjktZDE4ZS00M2FmLWE1NGMtNWYyN2EyYjk0NTY2LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTE2VDIyMjcwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlhMTIyNWI4MjYzNWVkOTg0ZTgwZGVlODI1MzczZWJkODJhYTAwOWE4N2QyZTA2NmUwZjU4ZWU1OGM0ZDJkNGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ntAWnQP7Nre4p4AlQHrli8wuw0x7jRB2U9yZ_xM4cGc",
        repo: "https://github.com/f2xiao/brain-flix",
        website: "https://brain-flix.onrender.com",
      },
      {
        name: "BandSite",
        description: "A music band landing page with band history and venues!",
        role: "Frontend Developer",
        url: "https://github.com/user-attachments/assets/f865b4da-4a6f-465b-84ac-628ca5c35ab1",
        repo: "https://github.com/f2xiao/band-site",
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
        repo: "https://github.com/f2xiao/travel-site",
        website: "https://f2xiao.github.io/travel-site",
      },
      {
        name: "CoffeeShop",
        description: "A coffee shop landing page with products and menu!",
        role: "Frontend Developer",
        url: "https://raw.githubusercontent.com/f2xiao/coffeeshop/refs/heads/main/screenshot/Demo-work-fast.gif",
        repo: "https://github.com/f2xiao/coffeeshop",
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
        {workArrays.map((workArray, index) => (
          <Row key={index} style={{ marginBottom: "4rem" }}>
            {workArray.map((work, index) => (
              <Col key={index} md={6}>
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
                        href={work.repo}
                        rel="noreferrer"
                      >
                        Repo
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a
                        className="work__links"
                        target="_blank"
                        href={work.website}
                        rel="noreferrer"
                      >
                        Website
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
