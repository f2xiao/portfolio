import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experiences.css";

const Experiences = () => {
  const experiences = [
    {
      time: "June 2024 - Present",
      title: "Freelancer",
      subtitle: "Full Stack Developer",
      details: [
        "Desgined and created websites for small bussinesses. Currently working on the offical website of mobility service company. ",
        "Led client meetings and served as the primary point of contact, effectively communicating project progress, requirements, and updates, ensuring client satisfaction and alignment with their goals",
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
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          margin: "0 auto",
          width: "90%",
        }}
      >
        <hr style={{ width: "33.3%" }} />
        <h2 style={{ textAlign: "center", padding: "3rem 0", width: "33.3%" }}>
          Experiences
        </h2>
        <hr style={{ width: "33.3%" }} />
      </div>
      <VerticalTimeline lineColor="#c3c3c3">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={styleObj}
          contentArrowStyle={{
            borderRight: `7px solid ${bgColor}`,
          }}
          date="2011 - present"
          iconStyle={styleObj}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
            eligendi eum neque labore iste, voluptas odio quos vitae in commodi
            cumque iusto perspiciatis ex nostrum eveniet, fuga exercitationem
            cum earum?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={styleObj}
          contentArrowStyle={{
            borderRight: `7px solid ${bgColor}`,
          }}
          date="2011 - present"
          iconStyle={styleObj}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
            eligendi eum neque labore iste, voluptas odio quos vitae in commodi
            cumque iusto perspiciatis ex nostrum eveniet, fuga exercitationem
            cum earum?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={styleObj}
          contentArrowStyle={{
            borderRight: `7px solid ${bgColor}`,
          }}
          date="2011 - present"
          iconStyle={styleObj}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
            eligendi eum neque labore iste, voluptas odio quos vitae in commodi
            cumque iusto perspiciatis ex nostrum eveniet, fuga exercitationem
            cum earum?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={styleObj}
          contentArrowStyle={{
            borderRight: `7px solid ${bgColor}`,
          }}
          date="2011 - present"
          iconStyle={styleObj}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
            eligendi eum neque labore iste, voluptas odio quos vitae in commodi
            cumque iusto perspiciatis ex nostrum eveniet, fuga exercitationem
            cum earum?
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experiences;
