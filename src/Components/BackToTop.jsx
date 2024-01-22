import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import backtotop from "../assets/img/svg/backtotops.svg";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show/hide the button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // Scroll duration in milliseconds
      smooth: "easeInOutQuart", // Easing function
    });
  };

  return (
    <div className={`back-to-top-btn ${ isVisible ? "visible" : ""}`} onClick={scrollToTop}>
      <img src={backtotop} alt="" />
    </div>
  );
};

export default BackToTop;