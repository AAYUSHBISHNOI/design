import React from 'react'
import { Bulb, Line, Network, People, Twomem } from './Mysvg'

const Social = () => {
  return (
    <div className=' mb-[150px]'>
        <div className=' container max-w-[1164px] mx-auto px-3'>
          <h2 className=' text-black text-[48px] font-semibold ff_gilroy_heavy text-center line_height'>Social Proof</h2>
          <div className=' mt-[55px] flex flex-wrap justify-between items-center'>
            <div>
              <p className=' text-black text-[38px] ff_gilroy_heavy font-semibold line_height'>Have decades of experience</p>
              <p className=' text-[#4d4d4d] font-normal text-[16px] ff_inter leading-[150%] mt-[16px]'>Lorem ipsum dolor sit amet consectetur. Interdum neque arcu massa eleifend. <span className=' lg:block'> Vulputate nisl est mollis bibendum egestas diam pellentesque.</span></p>
            </div>
            <div>
              <button className=' text-white font-semibold text-[16px] ff_inter leading-[150%] py-[12px] px-[24px] border-none bg_button rounded-[5px]'>Join Us</button>
            </div>
          </div>
          <div className=' w-[100%] shadow-card flex flex-wrap py-[44px] px-[45px] bg-white justify-center items-center rounded-[16px] mt-[40px]'>
           <div className=' flex flex-col items-center  lg:mr-[76px]'>
           <Bulb/>
            <p className=' text-black text-[38px] font-semibold ff_gilroy_heavy line_height mt-[24px]'>543+</p>
            <p className=' text-black text-[24px] font-semibold ff_gilroy_heavy line_height opacity-[0.9]'>Our Clients</p>
           </div>
           {/* <Line/> */}
           <div className=' flex flex-col items-center lg:mx-[59px]'>
           <Network/>
            <p className=' text-black text-[38px] font-semibold ff_gilroy_heavy line_height mt-[24px]'>154+</p>
            <p className=' text-black text-[24px] font-semibold ff_gilroy_heavy line_height opacity-[0.9]'>Global Brands</p>
           </div>
           {/* <Line/> */}
           <div className=' flex flex-col items-center lg:mx-[31px]'>
           <People/>
            <p className=' text-black text-[38px] font-semibold ff_gilroy_heavy line_height mt-[24px]'>743+</p>
            <p className=' text-black text-[24px] font-semibold ff_gilroy_heavy line_height opacity-[0.9]'>Customer Solutions</p>
           </div>
           {/* <Line/> */}
           <div className=' flex flex-col items-center lg:ml-[28px]'>
           <Twomem/>
            <p className=' text-black text-[38px] font-semibold ff_gilroy_heavy line_height mt-[24px]'>343+</p>
            <p className=' text-black text-[24px] font-semibold ff_gilroy_heavy line_height opacity-[0.9]'>Professional Partner</p>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Social