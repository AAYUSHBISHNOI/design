import React from 'react'
import { Bulb, Line, Network, People, Twomem } from './Mysvg'

const Social = () => {
  return (
    <div className=' my-10 lg:my-24 xl:my-[150px]'>
        <div className=' container max-w-[1164px] mx-auto px-3'>
          <h2 className=' text-black text-[36px] md:text-[48px] font-semibold ff_gilroy_heavy text-center line_height'  data-aos="fade-left">Social Proof</h2>
          <div className=' mt-2 lg:mt-[55px] flex flex-wrap justify-center lg:justify-between items-center text-center lg:text-start' data-aos="fade-right">
            <div>
              <p className=' text-black text-[25px] md:text-[38px] ff_gilroy_heavy font-semibold line_height'>Have decades of experience</p>
              <p className=' text-[#4d4d4d] font-normal text-[14px] md:text-[16px] ff_inter leading-[150%] mt-1 lg:mt-[16px]'>Lorem ipsum dolor sit amet consectetur. Interdum neque arcu massa eleifend. <span className=' lg:block'> Vulputate nisl est mollis bibendum egestas diam pellentesque.</span></p>
            </div>
            <div className=' mt-2 lg:mt-0'>
              <button className=' text-white font-semibold text-[16px] ff_inter leading-[150%] py-[12px] px-[24px] border-none login_btn rounded-[5px]'>Join Us</button>
            </div>
          </div>
          <div className=' w-[100%] shadow-card flex flex-col sm:flex-row py-[30px] md:py-[44px] px-[45px] bg-white justify-between xl:justify-center items-center rounded-[16px] mt-[40px]' data-aos="fade-down">
            <div className='lg:px-[40px] flex flex-col justify-center items-center'>
            <Bulb/>
            <p className=' text-black text-[34px] xl:text-[38px] font-semibold ff_gilroy_heavy line_height mt-2 md:mt-[24px]'>543+</p>
            <p className=' text-black text-[14px] xl:text-[24px] font-semibold ff_gilroy_heavy line_height opacity-[0.9]'>Our Clients</p>
            </div>
            <Line/>
            <div className='lg:px-[50px] flex flex-col justify-center items-center mt-7 sm:mt-0'>
            <Network/>
            <p className=' text-black text-[34px] xl:text-[38px] font-semibold ff_gilroy_heavy line_height mt-2 md:mt-[24px]'>154+</p>
            <p className=' text-black text-[14px] xl:text-[24px] font-semibold ff_gilroy_heavy line_height opacity-[0.9]'>Global Brands</p>
            </div>
            <Line/>
            <div className='lg:px-[30px] flex flex-col justify-center items-center mt-7 sm:mt-0'>
            <People/>
            <p className=' text-black text-[34px] xl:text-[38px] font-semibold ff_gilroy_heavy line_height mt-2 md:mt-[24px]'>743+</p>
            <p className=' text-black text-[14px] xl:text-[24px] font-semibold ff_gilroy_heavy line_height opacity-[0.9]'>Customer Solutions</p>
            </div>
            <Line/>
            <div className='lg:px-[20px] flex flex-col justify-center items-center mt-7 sm:mt-0'>
            <Twomem/>
            <p className=' text-black text-[34px] xl:text-[38px] font-semibold ff_gilroy_heavy line_height mt-2 md:mt-[24px]'>343+</p>
            <p className=' text-black text-[14px] xl:text-[24px] font-semibold ff_gilroy_heavy line_height opacity-[0.9]'>Professional Partner</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Social