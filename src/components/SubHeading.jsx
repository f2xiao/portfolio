import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
// import Typical from "react-typical";

const SubHeading = () => {
  const [isHeadingMounted, setIsHeadingMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeadingMounted(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isHeadingMounted && (
        <TypeAnimation
          sequence={[
            "A Full Stack developer based in Waterloo, ON", // Types
            1000, // Waits 1 second
          ]}
          wrapper="h1"
          cursor={false}
          repeat={0}
          style={{ fontSize: "1.5rem" }}
        />
      )}
    </>
  );
};

export default SubHeading;
