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

  const sectionStyle =
    location.hash.slice(1) !== id
      ? {
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.75, 0.47, 0.55, 1) 0.5s",
        }
      : {};

  console.log(sectionStyle);
  return (
    <section id={id} ref={ref} style={sectionStyle}>
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
      <div>
        <Typical
          steps={[
            "Hello",
            500,
            "Hello I am",
            1000,
            "Hello I am Fangfang!",
            2000,
          ]}
          loop={1}
          wrapper="h1"
        />
        <SubHeading />
      </div>
      <Skills />
      <Section id="experience">
        <Experiences />
      </Section>
    </main>
  );
};

export default Home;
