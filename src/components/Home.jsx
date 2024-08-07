import React, { useEffect, useState } from "react";
import Typical from "react-typical";
import SubHeading from "./SubHeading";

const Home = () => {
  return (
    <main>
      <div
        style={{
          paddingTop: "5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <Typical
          steps={["Hello", 2000, "Hello I am Fangfang!", 5000]}
          loop={1}
          wrapper="h1"
        />
        <SubHeading />
      </div>
    </main>
  );
};

export default Home;
