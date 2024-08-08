import React, { useEffect, useState } from "react";
import Typical from "react-typical";

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
        <Typical
          steps={[
            "A Fullstack",
            1000,
            "A Fullstack developer",
            1500,
            "A Fullstack developer based in",
            2000,
            "A Fullstack developer based in Waterloo, ON",
            2500,
          ]}
          loop={1}
          wrapper="h4"
        />
      )}
    </>
  );
};

export default SubHeading;
