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
    if (window.location.hash) {
      // Remove the hash
      window.history.replaceState(
        null,
        null,
        window.location.href.split("#")[0]
      );
    }
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
          backgroundColor: "#c3c3c3", // Custom green background
          color: "black", // White text
          border: "none",
          zIndex: "99",
        }}
      >
        Back to Top
      </Button>
    )
  );
};

export default BackToTop;
