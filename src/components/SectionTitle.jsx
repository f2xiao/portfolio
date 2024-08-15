import React from "react";

const SectionTitle = ({ title }) => {
  return (
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
      <hr style={{ width: "30%" }} />
      <h2
        style={{
          textAlign: "center",
          padding: "3rem 0",
          width: "30%",
          textTransform: "capitalize",
        }}
      >
        {title}
      </h2>
      <hr style={{ width: "30%" }} />
    </div>
  );
};

export default SectionTitle;
