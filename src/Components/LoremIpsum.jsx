import React from "react";
import Icon, { Massage, Materials } from "./Icon";

export const LoremIpsum = () => {
  return (
    <div className=" lg:py-[150px] py-[50px]">
      <div className="container  max-w-[1164px] mx-auto px-3">
        <h2 className=" lg:text-[48px] text-[35px] ff_semi_bold  font-semibold text-center leading-[119%] ">
          Lorem ipsum dolor amet{" "}
          <span className=" lg:block massa_clr">consectetur</span>
        </h2>
        <div className=" flex flex-wrap lg:justify-between justify-center items-center lg:mt-[55px] mt-[30px]">
          <div className="  lg:w-[32%] md:w-[50%] sm:w-[100%]  flex justify-center ">
            <div className=" w-[100%] max-w-[364px]   card_border_gradient  py-[44px] px-[24px] rounded-[16px] ">
              <Icon />
              <p className=" text-[24px] font-semibold ff_semi_bold text-black  leading-[normal] mt-[35px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className=" text-[16px] font-normal ff_inter text-[#5c5c5c] mt-[16px]">
                Lorem ipsum dolor sit amet consectetur. Interdum neque arcu
                massa eleifend. Vulputate nisl est mollis bibendum .
              </p>
            </div>
          </div>
          <div className="  lg:w-[32%] md:w-[50%] sm:w-[100%]  flex justify-center mt-[30px] md:mt-0">
            <div className=" w-[100%] max-w-[364px]   card_border_gradient  py-[44px] px-[24px] rounded-[16px]">
              <Materials />
              <p className=" text-[24px] font-semibold ff_semi_bold text-black  leading-[normal] mt-[35px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className=" text-[16px] font-normal ff_inter text-[#5c5c5c] mt-[16px]">
                Lorem ipsum dolor sit amet consectetur. Interdum neque arcu
                massa eleifend. Vulputate nisl est mollis bibendum .
              </p>
            </div>
          </div>
          <div className="  lg:w-[32%] md:w-[50%] sm:w-[100%]  flex justify-center mt-[30px]  lg:mt-0">
            <div className=" w-[100%] max-w-[364px]   card_border_gradient  py-[44px] px-[24px] rounded-[16px]">
              <Massage />
              <p className=" text-[24px] font-semibold ff_semi_bold text-black  leading-[normal] mt-[35px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className=" text-[16px] font-normal ff_inter text-[#5c5c5c] mt-[16px]">
                Lorem ipsum dolor sit amet consectetur. Interdum neque arcu
                massa eleifend. Vulputate nisl est mollis bibendum .
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center ">
          <button className="  login_btn rounded-[5px] py-[12px]  px-[24px] text-[16px] font-semibold ff_inter text-white leading-[150%] mt-[40px]">
            Get in touch with us
          </button>
        </div>
      </div>
    </div>
  );
};
