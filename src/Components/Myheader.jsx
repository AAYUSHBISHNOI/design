import React from "react";
import nav_logo from "../assets/img/nav_logo.svg";

const Myheader = () => {
  return (
    <div>
      <nav>
        <div className=" container  max-w-[1144px] mx-auto px-3 ">
          <div className=" flex justify-between items-center">
            <div className=" flex items-center gap-[171px] ">
              <img src={nav_logo} alt="img" />
              <ul className=" flex items-center gap-[40px]">
                <li>
                  <a href="#Home"></a>Home
                </li>
                <li>
                  <a href="#AboutUs"></a>About Us
                </li>
                <li>
                  <a href="#Portfolio"></a>Portfolio
                </li>
                <li>
                  <a href="#Services"></a>Services
                </li>
                <li>
                  <a href="#ContactUs"></a>Contact Us
                </li>
              </ul>
            </div>
            <div>
              <button>Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Myheader;
