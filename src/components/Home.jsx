import React, { useRef } from "react";
// import Typical from "react-typical";
import SubHeading from "./SubHeading";
import Skills from "./Skills";
import Work from "./Work";
import Experiences from "./Experiences";
import Contact from "./Contact";
import { useInView } from "framer-motion";
import { useLocation } from "react-router";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./Home.css";

function Section({ id, children }) {
  let location = useLocation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  console.log(id, isInView);
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
        padding: "0 2rem",
      }}
    >
      <section
        style={{
          display: "flex",
          alignContent: "flex-start",
          flexDirection: "column",
          textAlign: "center",
          minHeight: "80vh",
          marginBottom: "5rem",
        }}
      >
        <div style={{ flexBasis: "15%" }}>
          <TypeAnimation
            sequence={["Hello, I'm Fangfang!"]}
            wrapper="h1"
            cursor={false}
            repeat={0}
          />
          <p style={{ paddingTop: "1rem" }}></p>
          <SubHeading />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 2 }}
          style={{
            flexBasis: "10%",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            margin: "2rem 0",
          }}
        >
          <a
            href="https://www.linkedin.com/in/fangfang-xiao"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
              width="32"
              height="32"
              style={{ maxWidth: "100%" }}
              alt="linkedin-icon"
            />
          </a>
          <a
            href="https://www.github.com/f2xiao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
              width="32"
              height="32"
              style={{ maxWidth: "100%" }}
              alt="github-icon"
            />
          </a>
        </motion.div>
        <Skills />
      </section>
      <Section id="work">
        <Work />
      </Section>
      <Section id="experience">
        <Experiences />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </main>
  );
};

export default Home;
