import React, { useEffect, useState } from "react";

import { FiArrowUpCircle } from "react-icons/fi";

import '../styles/ScrollToTop.css'

const ScrollToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-container">
      {backToTopButton && (
        <FiArrowUpCircle
          className="Scroll"
          onClick={scrollUp}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
