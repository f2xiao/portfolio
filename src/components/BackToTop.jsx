import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.hash = "";
  };
  return (
    showButton && (
      <Button
        // variant="primary"
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "3.125rem",
          right: "1.875rem",
          backgroundColor: "#28a745", // Custom green background
          color: "#fff", // White text
          borderColor: "#28a745",
        }}
      >
        Back to Top
      </Button>
    )
  );
};

export default BackToTop;
