import React from "react";
import jestLogo from "../assets/logos/jest-color.svg";
import testingLogo from "../assets/logos/testinglibrary-color.svg";
import { motion } from "framer-motion";
import "./Skills.css";
const logo_img = {
  jest: jestLogo,
  testinglibrary: testingLogo,
  azure:
    "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
};

const mySkills = {
  frontend: [
    "typescript",
    "javascript",
    "react",
    "redux",
    "nextjs",
    "jquery",
    "html5",
    "css3",
    "materialui",
    "tailwindcss",
    "bootstrap",
    "vite",
    "webpack",
    "sass",
  ],
  backend: ["nodejs", "express", "mongodb", "postgresql", "mysql", "firebase"],
  other: [
    "webpack",
    "babel",
    "jest",
    "testinglibrary",
    "docker",
    "render",
    "aws",
    "azure",
    "visualstudiocode",
    "linux",
    "figma",
    "git",
  ],
};

function SkillBadge({ skill }) {
  const badge = `https://img.shields.io/badge/${skill.toUpperCase()}-white?style=flat`;
  const logo =
    logo_img[skill] ||
    `https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${skill}-colored.svg`;
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        flexBasis: "25%",
      }}
    >
      <img
        style={{
          borderRadius: ".125rem",
          width: "1.875rem",
          height: "1.875rem",
          marginBottom: "0.5rem",
        }}
        src={logo}
        alt={skill}
        className="skills_logo"
      />
      <img
        style={{
          borderRadius: "2px",
          backgroundColor: "transparent",
          marginBottom: "0.5rem",
        }}
        src={badge}
        alt={skill}
      />
    </span>
  );
}

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 2 }}
    >
      <h5 style={{ fontWeight: 300, paddingBottom: "3rem" }}>
        Welcome to my personal website! Here you can learn more about me and my
        work.
      </h5>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {Object.keys(mySkills).map((key, i) => {
          return (
            <div key={i} style={{ flexBasis: "30%" }}>
              <h4 style={{ textTransform: "uppercase", paddingBottom:"1.5rem" }}>{key + " skills"}</h4>
              <div
               className="skills_container"
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  alignContent: "center",
                  justifyContent: "center",
                  boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
                  height: "100%",
                  borderRadius: "1rem",
                }}
              >
                {mySkills[key].map((skill, j) => {
                  return <SkillBadge skill={skill} key={j} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
