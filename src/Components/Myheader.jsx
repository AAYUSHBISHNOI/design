import React, { useState } from "react";
import nav_logo from "../assets/img/nav_logo.svg";
import menu from "../assets/img/menu.svg";
import close from "../assets/img/close.svg";
import hero_img from "../assets/img/hero_img.png";
const Myheader = () => {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //       once: true,
  //     });
  //   }, []);
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  //   const Movement = () => {
  //     setshow(false);
  //   };
  return (
    <div className="xl:min-h-screen xl:flex xl:flex-col">
      <nav>
        <div className="container  max-w-[1164px] mx-auto px-3 ">
          <div className="flex justify-between items-center py-[26px]">
            <div className="flex items-center gap-[171px] ">
              <img src={nav_logo} alt="nav_logo" />
              <ul
                className={`${
                  show ? "end-0" : "right-[-100%]"
                }  flex  gap-[40px] flex-col z-[4] min-h-screen fixed lg:min-h-fit lg:static w-full lg:w-auto items-center justify-center
              top-0 bg-[#fff] lg:bg-[unset] lg:flex-row right-0 ps-0 duration-[350ms] transition-all ease-linear`}
              >
                <li>
                  <a
                    href="#Home"
                    className="text-[16px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#AboutUs"
                    className="text-[16px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#Portfolio"
                    className="text-[16px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#Services"
                    className="text-[16px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#ContactUs"
                    className="text-[16px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button className="login_btn rounded-[5px] py-[12px] px-[24px] text-[16px] font-semibold ff_inter text-white leading-[150%]">
                Login
              </button>
            </div>
            <div
              className="position-relative z-30 lg:hidden  "
              onClick={() => {
                setshow(!show);
              }}
            >
              {show ? <img src={close} alt="#" /> : <img src={menu} alt="#" />}
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-black xl:flex xl:flex-grow xl:justify-center xl:items-center pb-[40px]  xl:pb-0 ">
        <div className="container max-w-[1164px] mx-auto px-3">
          <div className="flex flex-wrap items-center  lg:justify-between justify-center lg:pt-[85px] xl:pt-0 md:pt-[50px] pt-[40px]">
            <div className="lg:w-[47%] w-[100%] text-center lg:text-start  ">
              <h1 className=" text-white xl:text-[60px] lg:text-[57px] text-[40px] md:text-[45px] font-bold ff_gilroy_bold leading-[100%]">
                Lorem ipsum dolo amet consectetur Interdum{" "}
                <span className="massa_clr">massa</span>.
              </h1>
              <p className="text-[#cccccc] sm:text-[16px] text-[14px] font-normal ff_inter leading-[150%] mt-[16px]">
                Lorem ipsum dolor sit amet consectetur. Interdum neque{" "}
                <span className="sm:block">
                  arcu massa eleifend. Vulputate nisl est mollis bibendum
                </span>{" "}
                egestas diam pellentesque felis.
              </p>
              <button className="login_btn rounded-[5px] py-[12px]  px-[24px] text-[16px] font-semibold ff_inter text-white leading-[150%] mt-[40px]">
                Get started
              </button>
            </div>
            <div className="lg:w-[50%] w-[100%] mt-[50px] lg:mt-0 flex justify-center ">
              <img
                className="lg:w-[100%] md:w-[60%] sm:w-[70%]"
                src={hero_img}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myheader;
