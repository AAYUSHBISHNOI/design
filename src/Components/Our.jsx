import React from 'react'
import men from "../assets/img/png/image1.png";
import mentwo from "../assets/img/png/image2.png";
import menthree from "../assets/img/png/image3.png";
import menfour from "../assets/img/png/image4.png";
import menfive from "../assets/img/png/image5.png";

const Our = () => {
  return (
    <div className=' bg-[#000]'>
        <div className=' container max-w-[1164px] mx-auto py-[40px] md:py-[61px] px-3'>
           <div className=' flex flex-wrap text-center lg:text-start justify-center lg:justify-between items-center mb-10 md:mb-[69px]'>
            <div>
                <p className='txt_clr ff_gilroy_heavy font-semibold text-[24px] line_height'>Our Work</p>
                <h2 className=' text-white mt-1 md:mt-[16px] ff_gilroy_heavy font-semibold text-[34px] md:text-[48px] line_height'>Take a look our work</h2>
                <p className=' text-[#e5e5e5] leading-[150%] mt-1 lg:mt-[16px] ff_inter text-[14px] md:text-[16px] font-normal opacity-[0.9]'>Lorem ipsum dolor sit amet consectetur. Interdum neque arcu massa eleifend. <span className=' lg:block'> Vulputate nisl est mollis bibendum egestas diam pellentesque felis.</span></p>
            </div>
            <div className=' mt-3 lg:mt-0'>
                <button className=' py-[12px] px-[24px] leading-[150%] text-[16px] text-white ff_inter rounded-[5px] bttn_view bttn_view'>View More</button>
            </div>
           </div>
           <div className='grid gap-[23px] md:grid-cols-2 grid-rows-1'>
            <img className=' rounded-[16px] img_border w-[100%]' src={men} alt="grid_img_1" />
            <img className=' rounded-[16px] img_border w-[100%]' src={mentwo} alt="grid_img_2" />
           </div>
           <div className='grid gap-[23px] mt-[24px] md:grid-cols-3 grid-rows-1'>
            <img className=' rounded-[16px] img_border w-[100%]' src={menthree} alt="grid_img_3" />
            <img className=' rounded-[16px] img_border w-[100%]' src={menfour} alt="grid_im_4" />
            <img className=' rounded-[16px] img_border w-[100%]' src={menfive} alt="grid_img_5" />
           </div>
        </div>
    </div>
  )
}

export default Our