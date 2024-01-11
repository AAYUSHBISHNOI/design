import React from 'react'
import men from "../assets/img/png/image1.png";
import mentwo from "../assets/img/png/image2.png";
import menthree from "../assets/img/png/image3.png";
import menfour from "../assets/img/png/image4.png";
import menfive from "../assets/img/png/image5.png";

const Our = () => {
  return (
    <div id='Portfolio' className=' bg-[#000] relative overflow-hidden z-50'>
        <div className=" w-[200px] h-[200px] bg-[#54E1A1] blur-[150px] opacity-[0.9] top-0 right-0 absolute -z-10 hidden  sm:block "></div>
        <div className=" w-[160px] h-[160px] bg-[#54E1A1] blur-[150px] opacity-[0.9] bottom-0 left-0 absolute -z-10 hidden  sm:block"></div>
        <div className=' container max-w-[1164px] mx-auto pt-[45px] md:pt-[60px] xl:pt-[34px] md:pb-[60px] pb-[45px] lg:py-[85px] px-3 md:px-[20px]'>
           <div className=' flex flex-col lg:flex-row text-center lg:text-start justify-center lg:justify-between items-center ' data-aos="fade-right">
            <div>
                <p className='txt_clr ff_gilroy_heavy font-semibold text-[24px] line_height'>Our Work</p>
                <h2 className=' text-white mt-1 md:mt-[16px] ff_gilroy_heavy font-semibold text-[30px] md:text-[37px] lg:text-[44px] xl:text-[48px] line_height'>Take a look our work</h2>
                <p className=' text-[#e5e5e5] leading-[150%] mt-1 lg:mt-[16px] ff_inter text-[14px] md:text-[15px] xl:text-[16px] font-normal opacity-[0.9]'>Lorem ipsum dolor sit amet consectetur. Interdum neque arcu massa eleifend. <span className=' md:block'> Vulputate nisl est mollis bibendum egestas diam pellentesque felis.</span></p>
            </div>
            <div className=' mt-3 lg:mt-0'>
                <button className=' py-[12px] px-[24px] leading-[150%] text-[16px] text-white ff_inter rounded-[5px] bttn_view login_btn'>View More</button>
            </div>
           </div>
           <div className='grid gap-[23px] md:grid-cols-2 grid-rows-1  sm:mt-7 mt-[20px] lg:mt-[55px]'>
            <img className=' rounded-[16px] img_border w-[100%]' src={men} alt="grid_img_1"  data-aos="fade-left" />
            <img className=' rounded-[16px] img_border w-[100%]' src={mentwo} alt="grid_img_2"   data-aos="fade-right"/>
           </div>
           <div className='grid gap-[23px] mt-[24px] md:grid-cols-3 grid-rows-1'>
            <img className=' rounded-[16px] img_border w-[100%]' src={menthree} alt="grid_img_3" data-aos="fade-up"/>
            <img className=' rounded-[16px] img_border w-[100%]' src={menfour} alt="grid_im_4" data-aos="fade-down" />
            <img className=' rounded-[16px] img_border w-[100%]' src={menfive} alt="grid_img_5" data-aos="fade-right"/>
           </div>
        </div>
    </div>
  )
}

export default Our