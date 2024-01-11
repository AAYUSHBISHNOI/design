import React from "react";
import { Book, Hand, Thumb } from "./Icon";
import arrowone from "../assets/img/Arrowone.svg";
import arrowtwo from "../assets/img/Arrowtwo.svg";

const Consectetur = () => {
  return (
    <div id="AboutUs" className="bg-black xl:pt-[60px] md:pb-[60px] lg:pb-[200px] py-[40px]  relative overflow-hidden">
        <div className=" w-[160px] h-[160px] bg-[#54E1A1] blur-[150px] opacity-[0.9] bottom-0 right-0 absolute z-10 hidden  sm:block"></div>
        <div className=" w-[160px] h-[160px] bg-[#54E1A1] blur-[150px] opacity-[0.9] top-0 left-0 absolute z-10 hidden  sm:block"></div>
      <div className="container max-w-[1144px] mx-auto px-3" data-aos="fade-right">
        <h2 className="lg:text-[48px] text-[30px] md:text-[40px] font-semibold ff_semi_bold text-white text-center leading-[118%]">
          Lorem ipsum dolor amet{" "}
          <span className="block massa_clr">consectetur Interdum</span>
        </h2>
        <div className="flex flex-wrap xl:justify-between justify-center md:gap-7  lg:gap-0 mt-[30px] sm:mt-20 sm:pb-16 md:mt-16 lg:mt-[60px] items-center">
          <div className="lg:w-[32%] md:w-[47%] sm:w-[100%] flex justify-center relative">
            <div>
              <img
                className="absolute bottom-[-20%] xl:right-[-9%] lg:right-[-3%] hidden lg:block"
                src={arrowone}
                alt="arrowone"
              />
            </div>
            <div className="xl:max-w-[279px] lg:max-w-[240px]  px-10 sm:px-0  sm:max-w-[285px] md:max-w-[260px] cursor-pointer text-center border-[#54E1A1] border-[2px] w-[100%] card_border_gradien_1 flex h-[279px] rounded-[16px] sm:rotate-[47deg] ">
              <div className="flex flex-col justify-center items-center sm:-rotate-45 ">
                <Hand />
                <p className="lg:text-[20px] xl:text-[24px]  text-[20px] sm:text-[22px] font-semibold ff_semi_bold text-white leading-[normal] mt-[24px]">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[32%] md:w-[47%] sm:w-[100%] mt-[30px] sm:mt-[120px] md:mt-0 flex justify-center lg:translate-y-36">
            <div className="xl:max-w-[279px] lg:max-w-[240px]  px-10 sm:px-0  sm:max-w-[285px] md:max-w-[260px] cursor-pointer text-center border-[#54E1A1] card_border_gradien_1 border-[2px] w-[100%] flex h-[279px] rounded-[16px] sm:rotate-[47deg] ">
              <div className=" flex flex-col justify-center items-center sm:-rotate-45">
                <Book />
                <p className="lg:text-[20px] xl:text-[24px]  text-[20px] sm:text-[22px] font-semibold ff_semi_bold text-white leading-[normal] mt-[24px]">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[32%] md:w-[47%] sm:w-[100%] mt-[30px] sm:mt-[120px] md:mt-[-20px] flex justify-center relative">
            <div>
              <img
                className="absolute bottom-[-23%] left-[-4%] hidden lg:block"
                src={arrowtwo}
                alt="arrowtwo"
              />
            </div>
            <div className="xl:max-w-[279px] lg:max-w-[240px]  px-10 sm:px-0  sm:max-w-[285px] md:max-w-[260px] cursor-pointer text-center border-[#54E1A1] border-[2px] card_border_gradien_1 w-[100%] flex h-[279px] rounded-[16px] sm:rotate-[47deg] ">
              <div className="flex flex-col justify-center items-center sm:-rotate-45">
                <Thumb />
                <p className="lg:text-[20px] xl:text-[24px]  text-[20px] sm:text-[22px] font-semibold ff_semi_bold text-white leading-[normal] mt-[24px]">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consectetur;
