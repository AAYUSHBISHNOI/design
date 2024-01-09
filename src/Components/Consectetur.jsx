import React from "react";
import { Book, Hand, Thumb } from "./Icon";

const Consectetur = () => {
  return (
    <div className=" bg-black pt-[60px] pb-[325px]">
      <div className="container  max-w-[1164px] mx-auto px-3">
        <h2 className=" text-[48px] font-semibold ff_semi_bold text-white text-center leading-[118%]">
          Lorem ipsum dolor amet{" "}
          <span className="block massa_clr">consectetur Interdum</span>
        </h2>
        <div className=" flex flex-wrap justify-between mt-[50px] ">
          <div className="  lg:w-[32%] md:w-[50%] sm:w-[100%]  flex justify-center items-center   ">
            <div className="  max-w-[364px] text-center border-[#54E1A1] border-[2px] w-[80%] flex  h-[279px] rounded-[16px] rotate-45 ">
              <div className=" flex  flex-col justify-center  items-center -rotate-45">
                <Hand />
                <p className=" text-[24px] font-semibold ff_semi_bold text-white  leading-[normal] mt-[24px]">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="  lg:w-[32%] md:w-[50%] sm:w-[100%]  flex justify-center items-center md:translate-y-40   ">
            <div className="  max-w-[364px] text-center border-[#54E1A1] border-[2px] w-[80%] flex  h-[279px] rounded-[16px] rotate-45 ">
              <div className=" flex  flex-col justify-center  items-center -rotate-45">
                <Book />
                <p className=" text-[24px] font-semibold ff_semi_bold text-white  leading-[normal] mt-[24px]">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="  lg:w-[32%] md:w-[50%] sm:w-[100%]  flex justify-center items-center   ">
            <div className="  max-w-[364px] text-center border-[#54E1A1] border-[2px] w-[80%] flex  h-[279px] rounded-[16px] rotate-45 ">
              <div className=" flex  flex-col justify-center  items-center -rotate-45">
                <Thumb />
                <p className=" text-[24px] font-semibold ff_semi_bold text-white  leading-[normal] mt-[24px]">
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
