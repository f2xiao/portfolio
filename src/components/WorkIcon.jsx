import React from "react";

const WorkIcon = ({ iconUrl }) => {
  return (
    <div>
      <img
        style={{ width: "2.5rem", borderRadius: "50%" }}
        src={iconUrl}
        alt="icon"
      />
    </div>
  );
};

export default WorkIcon;
