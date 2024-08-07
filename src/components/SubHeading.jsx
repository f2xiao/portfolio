import React, { useEffect, useState } from "react";
import Typical from "react-typical";

const SubHeading = () => {
  const [isHeadingMounted, setIsHeadingMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeadingMounted(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p>
      {isHeadingMounted && (
        <Typical
          steps={[
            "A",
            1000,
            "A Fullstack developer based in Waterloo, ON",
            40000,
          ]}
          loop={1}
          wrapper="h4"
        />
      )}
    </p>
  );
};

export default SubHeading;
