import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experiences.css";
import SectionTitle from "./SectionTitle";
import WorkIcon from "./WorkIcon";


const Experiences = () => {
  const experiences = [
    {
      time: "June 2024 - Present",
      title: "Freelancer",
      subtitle: "Tech Industry",
      details: [
        "Desgined and created websites for small bussinesses. Currently working on the offical website of a consulting company. ",
        "Led client meetings and served as the primary point of contact, effectively communicating project progress, requirements, and updates, ensuring client satisfaction and alignment with their goals",
      ],
    },
    {
      time: "FEB 2024 - MAY 2024",
      title: "Bootcamper",
      subtitle: "Tech Industry",
      details: [
        " ",
        "",
      ],
    },
    {
      time: "MAR 2022 - FEB 2024",
      title: "Self Learner",
      subtitle: "Tech Industry",
      details: [
        " ",
        "",
      ],
    },
    {
      time: "MAR 2020 - FEB 2022",
      title: "Technical Sales",
      subtitle: "Small Business",
      details: [
        "Technical Sales by the day time, metal products selling to constructions and factories, family business ran for 20 years since 2000s",
        "Property manager by the casual time, successfully rent out apartment units within 1 week",
      ],
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
      <div style={{ width: "80%", margin: "0 auto" }}>
        <VerticalTimeline lineColor="#c3c3c3">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={styleObj}
            contentArrowStyle={{
              borderRight: `7px solid ${bgColor}`,
            }}
            date="time"
            iconStyle={styleObj}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              title
            </h3>
            <h4 className="vertical-timeline-element-subtitle">subtitle</h4>
            <p>
              details
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experiences;
