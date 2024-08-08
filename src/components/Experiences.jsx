import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Experiences = () => {
  return (
    <div>
      <h2>Experiences</h2>
      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
            boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.5)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgba(0, 0, 0, 0.5)" }}
          date="2011 - present"
          iconStyle={{ background: "rgba(0, 0, 0, 0.5)", color: "black" }}
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
