import React from "react";
import Icon, { Massage, Materials } from "./Icon";

export const LoremIpsum = () => {
  return (
    <div id="Services" className="xl:py-[150px] py-[45px] md:py-[60px] lg:py-[85px]">
      <div className="container  max-w-[1144px] mx-auto px-3 md:px-[20px]" >
        <h2 className="xl:text-[48px] lg:text-[44px] text-[30px] sm:text-[40px] ff_semi_bold font-semibold text-center leading-[90%] md:leading-[105%] lg:leading-[119%]" data-aos="zoom-in-down">
          Lorem ipsum dolor amet{" "}
          <span className="block massa_clr">consectetur</span>
        </h2>
        <div className="flex flex-wrap lg:justify-between justify-center items-center lg:mt-[55px] mt-[30px]">
          <div className="lg:w-[32%] md:w-[45%] sm:w-[100%] cursor-pointer  flex justify-center" data-aos="zoom-out">
            <div className="md:w-[92%] w-[100%] lg:w-[100%] max-w-[364px] card_border_gradient py-[30px] px-[30px] xl:py-[44px] xl:px-[22px] rounded-[16px]">
              <Icon />
              <p className="text-[24px] font-semibold ff_semi_bold text-black leading-[normal] mt-[35px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="text-[16px] font-normal ff_inter text-[#5c5c5c] mt-[16px]">
                Lorem ipsum dolor sit amet consectetur. Interdum neque arcu
                massa eleifend. Vulputate nisl est mollis bibendum .
              </p>
            </div>
          </div>
          <div className=" lg:w-[32%] md:w-[45%] sm:w-[100%] cursor-pointer flex justify-center mt-[30px] md:mt-0"  data-aos="zoom-out-up">
            <div className="md:w-[92%] w-[100%] lg:w-[100%] max-w-[364px] card_border_gradient py-[30px] px-[30px] xl:py-[44px] xl:px-[22px] rounded-[16px]">
              <Materials />
              <p className="text-[24px] font-semibold ff_semi_bold text-black leading-[normal] mt-[35px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="text-[16px] font-normal ff_inter text-[#5c5c5c] mt-[16px]">
                Lorem ipsum dolor sit amet consectetur. Interdum neque arcu
                massa eleifend. Vulputate nisl est mollis bibendum .
              </p>
            </div>
          </div>
          <div className="lg:w-[32%] md:w-[45%] sm:w-[100%] cursor-pointer flex justify-center md:mt-[25px] mt-[30px] lg:mt-0" data-aos="zoom-out-down">
            <div className="md:w-[93%] w-[100%] lg:w-[100%] max-w-[364px] card_border_gradient py-[30px] px-[30px] xl:py-[44px] xl:px-[22px] rounded-[16px]">
              <Massage />
              <p className="text-[24px] font-semibold ff_semi_bold text-black leading-[normal] mt-[35px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="text-[16px] font-normal ff_inter text-[#5c5c5c] mt-[16px]">
                Lorem ipsum dolor sit amet consectetur. Interdum neque arcu
                massa eleifend. Vulputate nisl est mollis bibendum .
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="login_btn rounded-[5px] py-[12px] px-[24px] text-[16px] font-semibold ff_inter text-white leading-[150%] mt-[40px]">
            Get in touch with us
          </button>
        </div>
      </div>
    </div>
  );
};
