import React, { useRef } from "react";
import Typical from "react-typical";
import SubHeading from "./SubHeading";
import Skills from "./Skills";
import Experiences from "./Experiences";
import { useInView } from "framer-motion";
import { useLocation } from "react-router";
import "./Home.css";

function Section({ id, children }) {
  let location = useLocation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id={id}
      ref={ref}
      style={
        location.hash.slice(1) !== id
          ? {
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.75, 0.47, 0.55, 1) 0.5s",
            }
          : {}
      }
    >
      {children}
    </section>
  );
}

const Home = () => {
  return (
    <main
      style={{
        paddingTop: "5rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        textAlign: "center",
      }}
    >
      <section
        style={{
          display: "flex",
          alignContent: "space-between",
          flexDirection: "column",
          height: "95vh",
        }}
      >
        <div style={{ flexBasis: "25%" }}>
          <Typical
            steps={[
              "Hello",
              500,
              "Hello I am",
              1000,
              "Hello I am Fangfang!",
              1500,
            ]}
            loop={1}
            wrapper="h1"
          />
          <p style={{ paddingTop: "1rem" }}></p>
          <SubHeading />
        </div>
        <Skills />
      </section>
      <Section id="experience">
        <Experiences />
      </Section>
      <Section id="contact">
        <div>
          <h2>Contact</h2>
        </div>
      </Section>
    </main>
  );
};

export default Home;
