import React from 'react'
import men from "../assets/img/image1.png";
import mentwo from "../assets/img/image2.png";
import menthree from "../assets/img/image3.png";
import menfour from "../assets/img/image4.png";
import menfive from "../assets/img/image5.png";

const Our = () => {
  return (
    <div className=' bg-[#000]'>
        <div className=' container max-w-[1164px] mx-auto pt-[61px] pb-[60px] px-3'>
           <div className=' flex justify-between items-center mb-[69px]'>
            <div>
                <p className='txt_clr ff_gilroy_heavy font-semibold text-[24px] line_height'>Our Work</p>
                <h2 className=' text-white mt-[16px] ff_gilroy_heavy font-semibold text-[48px] line_height'>Take a look our work</h2>
                <p className=' text-[#e5e5e5] leading-[150%] mt-[16px] ff_inter text-[16px] font-normal opacity-[0.9]'>Lorem ipsum dolor sit amet consectetur. Interdum neque arcu massa eleifend. <span className=' lg:block'> Vulputate nisl est mollis bibendum egestas diam pellentesque felis.</span></p>
            </div>
            <div>
                <button className=' py-[12px] px-[24px] leading-[150%] text-[16px] text-white ff_inter rounded-[5px] bttn_view bttn_view'>View More</button>
            </div>
           </div>
           <div className='grid gap-[23px] grid-cols-2 grid-rows-1'>
            <img className=' rounded-[16px] img_border' src={men} alt="" />
            <img className=' rounded-[16px] img_border' src={mentwo} alt="" />
           </div>
           <div className='grid gap-[23px] mt-[24px] grid-cols-3 grid-rows-1'>
            <img className=' rounded-[16px] img_border' src={menthree} alt="" />
            <img className=' rounded-[16px] img_border' src={menfour} alt="" />
            <img className=' rounded-[16px] img_border' src={menfive} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Our