import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experiences.css";
import SectionTitle from "./SectionTitle";
import WorkIcon from "./WorkIcon";
import codingIcon from "../assets/icons/coding.gif";
import readingIcon from "../assets/icons/reading.gif";
import engineeringIcon from "../assets/icons/engineering.gif";

const Experiences = () => {
  const experiences = [
    {
      time: "June 2024 - Present",
      title: "Freelancer",
      subtitle: "Tech Industry",
      details: [
        "Desgined and created websites for small bussinesses. Currently working on the offical website of a consulting company. \n",
        "Led client meetings and served as the primary point of contact, effectively communicating project progress, requirements, and updates, ensuring client satisfaction and alignment with their goals",
      ],
      icon: codingIcon,
    },
    {
      time: "FEB 2024 - MAY 2024",
      title: "Bootcamper",
      subtitle: "Tech Industry",
      details: [
        "After self-teaching for 1 year, I finally joined the Brainstation coding bootcamp and spent 800 hours on coding.",
      ],
      icon: codingIcon,
    },
    {
      time: "MAR 2023 - FEB 2024",
      title: "Self Learner",
      subtitle: "Tech Industry",
      details: [
        "Took online courses such as CS50 and CS61B, then various web development course on Udemy, Frontend Masters and Fullstackopen. \n",
        "Took course about linux, docker, containers on kodekloud.",
      ],
      icon: readingIcon,
    },
    {
      time: "MAR 2017 - FEB 2020",
      title: "Mechanical Engineer Candidate",
      subtitle: "Engineering Field",
      details: [
        "I worked for automotive and aerospace suppliers for 3 years and went through various positions: mechanical engineer, project engineer, metallurgist lab assistant,\nDuring this time, I accumulated a great deal of engineering experience and communication skills",
      ],
      icon: engineeringIcon,
    },
  ];
  const bgColor = "white";
  const styleObj = {
    background: bgColor,
    color: "black",
    boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <SectionTitle title="Experiences" />
      <p style={{ textAlign: "center" }}> My previous jobs and experiences</p>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <VerticalTimeline lineColor="#c3c3c3">
          {experiences.map((e, i) => (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={styleObj}
              contentArrowStyle={{
                borderRight: `7px solid ${bgColor}`,
              }}
              date={e.time}
              iconStyle={styleObj}
              icon={<WorkIcon iconUrl={e.icon} />}
            >
              <h3 className="vertical-timeline-element-title">{e.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {e.subtitle}
              </h4>
              <p>
                <span className="vertical-timeline-content">{e.details}</span>
              </p>
            </VerticalTimelineElement>
          ))}

          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={styleObj}
            contentArrowStyle={{
              borderRight: `7px solid ${bgColor}`,
            }}
            date="time"
            iconStyle={styleObj}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">title</h3>
            <h4 className="vertical-timeline-element-subtitle">subtitle</h4>
            <p>details</p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experiences;
