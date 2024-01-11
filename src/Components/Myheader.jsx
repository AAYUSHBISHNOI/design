import React, { useState , useEffect } from "react";
import nav_logo from "../assets/img/svg/nav_logo.svg";
import menu from "../assets/img/svg/menu.svg";
import close from "../assets/img/svg/close.svg";
import hero_img from "../assets/img/png/Objects_hero.webp";
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
    <div className="xl:min-h-screen xl:flex xl:flex-col  ">
      <nav>
        <div className="container  max-w-[1144px] mx-auto px-3 md:px-[20px]">
          <div className="flex justify-between items-center py-[26px]">
             <a href="/"> <img className=" w-[70%]  sm:w-[100%]" src={nav_logo} alt="nav_logo" /></a>
              <ul
                className={`${
                  show ? "end-0" : "right-[-100%]"
                }  flex  gap-[40px] flex-col z-[4] min-h-screen fixed lg:min-h-fit lg:static w-full lg:w-auto items-center justify-center
              top-0 bg-[#fff] lg:bg-[unset] lg:flex-row right-0 ps-0 duration-[350ms] transition-all ease-linear`}
              >
                <li>
                  <a
                    href="#Home" onClick={Movement}
                    className="lg:text-[16px] text-[20px] md:text-[22px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#AboutUs" onClick={Movement}
                    className="lg:text-[16px] text-[20px] md:text-[22px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#Portfolio" onClick={Movement}
                    className="lg:text-[16px] text-[20px] md:text-[22px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#Services" onClick={Movement}
                    className="lg:text-[16px] text-[20px] md:text-[22px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#ContactUs" onClick={Movement}
                    className="lg:text-[16px] text-[20px] md:text-[22px] font-normal ff_inter text-[#666666] leading-[150%] nav_links relative after:absolute after:bg-[#000] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Contact Us
                  </a>
                </li>
                <div>
              <button className="login_btn sm:hidden  rounded-[5px] py-[12px] px-[24px] lg:text-[16px] text-[20px] md:text-[22px] font-semibold ff_inter text-white leading-[150%]">
                Login
              </button>
            </div>
              </ul>
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
      <div id="Home" className="bg-black overflow-hidden xl:flex xl:flex-grow xl:justify-center xl:items-center   lg:py-[85px] xl:py-0 md:py-[60px] py-[45px] relative ">
        <div className=" w-[160px] h-[160px] bg-[#54E1A1] blur-[150px] opacity-[0.9] top-0 right-0 absolute hidden  sm:block "></div>
        <div className=" w-[160px] h-[160px] bg-[#54E1A1] blur-[150px] opacity-[0.9] bottom-0 left-0 absolute hidden  sm:block "></div>
        <div className="container max-w-[1144px] mx-auto px-3 md:px-[20px]">
          <div className="flex flex-wrap items-center  lg:justify-between justify-center ">
            <div className="lg:w-[47%] w-[100%] text-center lg:text-start" data-aos="fade-right">
              <h1 className=" text-white xl:text-[60px] lg:text-[50px] text-[30px] md:text-[45px] font-bold ff_gilroy_bold leading-[100%]">
                Lorem ipsum dolo amet consectetur Interdum{" "}
                <span className="massa_clr ff_gilroy_bolditlaic">massa</span>.
              </h1>
              <p className="text-[#cccccc] sm:text-[16px] text-[13px] lg:text-[14px] xl:text-[16px] font-normal ff_inter leading-[150%] mt-[16px]">
                Lorem ipsum dolor sit amet consectetur. Interdum neque{" "}
                <span className="sm:block">
                  arcu massa eleifend. Vulputate nisl est mollis bibendum
                </span>{" "}
                egestas diam pellentesque felis.
              </p>
              <button className="login_btn rounded-[5px] py-[12px]  px-[24px] text-[16px] font-semibold ff_inter text-white leading-[150%] md:mt-[40px] mt-[25px]">
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
