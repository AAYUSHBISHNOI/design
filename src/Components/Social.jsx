import React from 'react'
import { Bulb, Line, Linetwo, Network, People, Twomem } from './Mysvg'
import line from "../assets/img/svg/Line2.svg";

const Social = () => {
  return (
    <div className=' md:py-[60px] py-[45px] lg:py-[85px] xl:py-[150px]'>
        <div className=' container max-w-[1164px] mx-auto px-3 md:px-[20px]'>
          <h2 className=' text-black text-[30px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-semibold ff_gilroy_heavy text-center line_height'  data-aos="fade-left">Social Proof</h2>
          <div className=' mt-2 lg:mt-[55px] flex  flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-start' data-aos="fade-right">
            <div>
              <p className=' text-black text-[25px] md:text-[30px] lg:text-[34px] xl:text-[38px] ff_gilroy_heavy font-semibold line_height'>Have decades of experience</p>
              <p className=' text-[#4d4d4d] font-normal text-[14px] md:text-[16px] ff_inter leading-[150%] mt-1  lg:text-[15px] xl:mt-[16px]'>Lorem ipsum dolor sit amet consectetur. Interdum neque arcu massa eleifend. <span className=' md:block'> Vulputate nisl est mollis bibendum egestas diam pellentesque.</span></p>
            </div>
            <div className=' mt-2 lg:mt-0'>
              <button className=' text-white font-semibold text-[16px] ff_inter leading-[150%] py-[12px] px-[24px] border-none login_btn rounded-[5px]'>Join Us</button>
            </div>
          </div>
          <div className='w-[100%] relative shadow-card flex flex-col md:flex-row py-[30px] sm:py-[20px] md:py-[44px] px-[45px] bg-white justify-between md:justify-center items-center rounded-[16px] mt-[40px]' data-aos="fade-down">
            <div className=' flex flex-col md:flex-row justify-center items-center'>
              <div className='flex flex-col sm:flex-row'>
              <div className=' w-[150px] lg:w-[220px] px-[10px] lg:px-[48px] flex flex-col hover:scale-110 duration-700 justify-center items-center'>
            <Bulb/>
            <p className=' text-black text-[20px] lg:text-[34px] xl:text-[38px] font-semibold ff_gilroy_heavy line_height mt-2 md:mt-[24px]'>543+</p>
            <p className=' text-black text-[14px] xl:text-[24px] font-semibold ff_gilroy_heavy line_height opacity-[0.9] pt-[5px]'>Our Clients</p>
            </div>
            <div className='xsm_cardLine mt-10 w-full h-[2px] sm:hidden'></div>
            <Line/>
            <div className=' w-[150px] lg:w-[220px] px-[10px] lg:px-[31px] flex flex-col hover:scale-110 duration-700 justify-center items-center mt-7 sm:mt-0'>
            <Network/>
            <p className=' text-black text-[20px] lg:text-[34px] xl:text-[38px] font-semibold ff_gilroy_heavy line_height mt-2 md:mt-[24px]'>154+</p>
            <p className=' text-black text-[14px] xl:text-[24px] font-semibold ff_gilroy_heavy line_height opacity-[0.9] pt-[5px]'>Global Brands</p>
            </div>
            <Line/>
              </div>
              <div className='xsm_cardLine mt-10 w-full h-[2px] md:hidden'></div>
              <div className='flex flex-col sm:flex-row sm:mt-5 md:mt-0'>
              <div className=' w-[150px] lg:w-[220px] px-[3px] flex flex-col hover:scale-110 duration-700 justify-center items-center mt-7 sm:mt-0'>
            <People/>
            <p className=' text-black text-[20px] lg:text-[34px] xl:text-[38px] font-semibold ff_gilroy_heavy line_height mt-2 md:mt-[24px]'>743+</p>
            <p className=' text-black text-[14px] xl:text-[24px] font-semibold ff_gilroy_heavy line_height opacity-[0.9] pt-[5px]'>Customer Solutions</p>
            </div>
            <Line/>
            <div className='xsm_cardLine mt-10 w-full h-[2px] sm:hidden'></div>
            <div className=' w-[150px] lg:w-[220px] flex flex-col hover:scale-110 duration-700 justify-center items-center mt-7 sm:mt-0'>
            <Twomem/>
            <p className=' text-black text-[20px] lg:text-[34px] xl:text-[38px] font-semibold ff_gilroy_heavy line_height mt-2 md:mt-[24px]'>343+</p>
            <p className=' text-black text-[14px] xl:text-[24px] font-semibold ff_gilroy_heavy line_height opacity-[0.9] pt-[5px]'>Professional Partner</p>
            </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Social