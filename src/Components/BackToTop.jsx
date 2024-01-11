import React, { useState, useEffect } from "react";
import FiArrowUp from "../assets/img/backto_top.svg";
import "../App.css";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section>
        <div>
          <img className="fixed w-[35px] border-[3px] bottom-[30px] md:bottom-[15px] xl:bottom-[30px] right-[30px] items-center justify-center z-[500] cursor-pointer bg-[#54e1a1] hover:bg-[#45abd5] rounded-[50%]  duration-500"  onClick={scrollTop} style={{ height: 35, display: showScroll ? "flex" : "none"}} src={FiArrowUp} alt="img" />
        </div>
      </section>
    </>
  );
};
export default BackToTop;
