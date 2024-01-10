import React, { useState , useEffect } from "react";
import nav_logo from "../assets/img/svg/nav_logo.svg";
import menu from "../assets/img/svg/menu.svg";
import close from "../assets/img/svg/close.svg";
import hero_img from "../assets/img/png/hero_img.png";
import "aos/dist/aos.css"
import Aos from "aos"
const Myheader = () => {
    useEffect(() => {
      Aos.init({
        duration: 1000,
        once: true,
      });
    }, []);
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
    const Movement = () => {
      setshow(false);
    };
  return (
    <div className="xl:min-h-screen xl:flex xl:flex-col z-40 ">
      <nav>
        <div className="container  max-w-[1144px] mx-auto px-3 ">
          <div className="flex justify-between items-center py-[26px]">
            <div className="flex items-center gap-[171px] ">
             <a href="nav_logo"> <img className=" w-[70%]  sm:w-[100%]" src={nav_logo} alt="nav_logo" /></a>
              <ul
                className={`${
                  show ? "end-0" : "right-[-100%]"
                }  flex  gap-[40px] flex-col z-[4] min-h-screen fixed lg:min-h-fit lg:static w-full lg:w-auto items-center justify-center
              top-0 bg-[#fff] lg:bg-[unset] lg:flex-row right-0 ps-0 duration-[350ms] transition-all ease-linear`}
              >
                <li>
                  <a
                    href="#Home" onClick={Movement}
                    className="text-[16px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#AboutUs" onClick={Movement}
                    className="text-[16px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#Portfolio" onClick={Movement}
                    className="text-[16px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#Services" onClick={Movement}
                    className="text-[16px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#ContactUs" onClick={Movement}
                    className="text-[16px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Contact Us
                  </a>
                </li>
                <div>
              <button className="login_btn sm:hidden  rounded-[5px] py-[12px] px-[24px] text-[16px] font-semibold ff_inter text-white leading-[150%]">
                Login
              </button>
            </div>
              </ul>
            </div>
            <div>
              <button className="login_btn hidden sm:block rounded-[5px] py-[12px] px-[24px] text-[16px] font-semibold ff_inter text-white leading-[150%]">
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
      <div id="Home" className="bg-black xl:flex xl:flex-grow xl:justify-center xl:items-center pb-[40px]  xl:pb-0 relative ">
        <div className=" w-[160px] h-[160px] bg-[#54E1A1] blur-[150px] opacity-[0.9] top-0 right-0 absolute z-10 hidden  sm:block"></div>
        <div className=" w-[160px] h-[160px] bg-[#54E1A1] blur-[150px] opacity-[0.9] bottom-0 left-0 absolute z-10 hidden  sm:block"></div>
        <div className="container max-w-[1144px] mx-auto px-3">
          <div className="flex flex-wrap items-center  lg:justify-between justify-center lg:pt-[85px] xl:pt-0 md:pt-[50px] pt-[40px]">
            <div className="lg:w-[47%] w-[100%] text-center lg:text-start" data-aos="fade-right">
              <h1 className=" text-white xl:text-[60px] lg:text-[57px] text-[40px] md:text-[45px] font-bold ff_gilroy_bold leading-[100%]">
                Lorem ipsum dolo amet consectetur Interdum{" "}
                <span className="massa_clr ff_gilroy_bolditlaic">massa</span>.
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
            <div className="lg:w-[50%] w-[100%] mt-[50px] lg:mt-0 flex justify-center" data-aos="fade-left">
              <img
                className="lg:w-[100%] md:w-[60%] sm:w-[70%] w-[80%]"
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
