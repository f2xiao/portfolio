import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experiences = () => {
  const experiences = [
    {
      time: "",
      title: "Freelancer",
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
      <h2 style={{ textAlign: "center", padding: "3rem 0" }}>Experiences</h2>
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
