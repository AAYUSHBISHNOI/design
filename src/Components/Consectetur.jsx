import React from "react";
import { Book, Hand, Thumb } from "./Icon";
import arrowone from "../assets/img/Arrowone.svg";
import arrowtwo from "../assets/img/Arrowtwo.svg";

const Consectetur = () => {
  return (
    <div className="bg-black pt-[60px] xl:pb-[325px] lg:pb-[250px] pb-[80px] sm:pb-[130px]">
      <div className="container max-w-[1164px] mx-auto px-3">
        <h2 className="lg:text-[48px] text-[30px] md:text-[40px] font-semibold ff_semi_bold text-white text-center leading-[118%]">
          Lorem ipsum dolor amet{" "}
          <span className="block massa_clr">consectetur Interdum</span>
        </h2>
        <div className="flex flex-wrap lg:justify-between justify-center mt-[50px] items-center">
          <div className="lg:w-[32%] md:w-[50%] sm:w-[100%] flex justify-center relative">
            <div>
              <img
                className="absolute bottom-[-20%] right-[-9%] hidden lg:block"
                src={arrowone}
                alt="arrowone"
              />
            </div>
            <div className="lg:max-w-[279px] px-10 sm:px-0  sm:max-w-[285px] md:max-w-[260px] cursor-pointer text-center border-[#54E1A1] border-[2px] w-[100%] card_border_gradien_1 flex h-[279px] rounded-[16px] sm:rotate-[47deg] ">
              <div className="flex flex-col justify-center items-center sm:-rotate-45 ">
                <Hand />
                <p className="lg:text-[24px]  text-[20px] sm:text-[22px] font-semibold ff_semi_bold text-white leading-[normal] mt-[24px]">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[32%] md:w-[50%] sm:w-[100%] mt-[40px] sm:mt-[120px] md:mt-0 flex justify-center lg:translate-y-36">
            <div className="lg:max-w-[279px] px-10 sm:px-0  sm:max-w-[285px] md:max-w-[260px] cursor-pointer text-center border-[#54E1A1] card_border_gradien_1 border-[2px] w-[100%] flex h-[279px] rounded-[16px] sm:rotate-[47deg] ">
              <div className=" flex flex-col justify-center items-center sm:-rotate-45">
                <Book />
                <p className="lg:text-[24px]  text-[20px] sm:text-[22px] font-semibold ff_semi_bold text-white leading-[normal] mt-[24px]">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[32%] md:w-[50%] sm:w-[100%] mt-[40px] sm:mt-[120px] md:mt-[-20px] flex justify-center relative">
            <div>
              <img
                className="absolute bottom-[-23%] left-[-4%] hidden lg:block"
                src={arrowtwo}
                alt="arrowtwo"
              />
            </div>
            <div className="lg:max-w-[279px] px-10 sm:px-0  sm:max-w-[285px] md:max-w-[260px] cursor-pointer text-center border-[#54E1A1] border-[2px] card_border_gradien_1 w-[100%] flex h-[279px] rounded-[16px] sm:rotate-[47deg] ">
              <div className="flex flex-col justify-center items-center sm:-rotate-45">
                <Thumb />
                <p className="lg:text-[24px]  text-[20px] sm:text-[22px] font-semibold ff_semi_bold text-white leading-[normal] mt-[24px]">
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
