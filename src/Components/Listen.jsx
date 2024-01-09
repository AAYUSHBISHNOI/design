import React from 'react'
import Slider from "react-slick";
import { Arrowone, Arrowtwo, Elps, Fivestar, Fourstar, Threetar, Twostar } from './Mysvg';
import girl from "../assets/img/girl.svg";
import { slider } from '@material-tailwind/react';

const Listen = () => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className=' container max-w-[1164px] mx-auto mt-[150px] px-3'>
        <div className=' flex justify-between items-center'>
          <div>
          <p className='txt_clr ff_gilroy_heavy text-[24px] font-semibold line_height'>Testimonials</p>
        <h2 className=' text-black ff_gilroy_heavy text-[48px] font-semibold line_height mt-[16px]'>Listen to our happy clients</h2>
          </div>
         
        </div>
        {/* <div>
        <button className='img_pstn_8 z-3' onClick={() => slider.current.slickPrev()}><Arrowone/></button>
        <button className='img_pstn_9 z-3' onClick={() => slider.current.slickNext()}><Arrowtwo/></button>
        </div> */}
       {/* <Slider ref={slider} {...settings} >
       <div className=' flex'>
          <div className=' flex flex-wrap gap-[25px] mt-[55px]'>
         <div className='w-[100%] md:w-[50%] border-[#0000001a] card_shadow hover:text-white hover:border-transparent border py-[25px] px-[23px] rounded-[13px] card_bg'>
          <div className=' lg:flex items-center gap-[30px]'>
            <div className=' relative'>
            <div>
              <img src={girl} alt="" />
            </div>
            <div className=' absolute top-[-10px] left-[-10px]'>
              <Elps/>
            </div>
            </div>
            <div>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Fivestar/>
            </div>
          </div>
          </div> 
          <div className='w-[100%] md:w-[50%] border-[#0000001a] card_shadow hover:text-white hover:border-transparent border py-[25px] px-[23px] rounded-[13px] card_bg'>
          <div className=' lg:flex items-center gap-[30px]'>
            <div className=' relative'>
            <div>
              <img src={girl} alt="" />
            </div>
            <div className=' absolute top-[-10px] left-[-10px]'>
              <Elps/>
            </div>
            </div>
            <div>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Fourstar/>
            </div>
          </div>
          </div> 
          </div>
          <div className=' flex flex-wrap  gap-[25px] mt-[24px]'>
        <div className='w-[100%] md:w-[50%] border-[#0000001a] card_shadow hover:text-white hover:border-transparent border py-[25px] px-[23px] rounded-[13px] card_bg'>
          <div className=' lg:flex items-center gap-[30px]'>
            <div className=' relative'>
            <div>
              <img className=''  src={girl} alt="" />
            </div>
            <div className=' absolute top-[-10px] left-[-10px]'>
              <Elps/>
            </div>
            </div>
            <div>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Twostar/>
            </div>
          </div>
          </div> 
          <div className='w-[100%] md:w-[50%] border-[#0000001a] card_shadow hover:text-white hover:border-transparent border py-[25px] px-[23px] rounded-[13px] card_bg'>
          <div className=' lg:flex items-center gap-[30px]'>
            <div className=' relative'>
            <div>
              <img src={girl} alt="" />
            </div>
            <div className=' absolute top-[-10px] left-[-10px]'>
              <Elps/>
            </div>
            </div>
            <div>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Threetar/>
            </div>
          </div>
          </div> 
          </div>
        </div>             
       <div className=' flex flex-wrap'>
          <div className=' flex flex-wrap gap-[25px] mt-[55px]'>
         <div className='w-[100%] md:w-[50%] border-[#0000001a] card_shadow hover:text-white hover:border-transparent border py-[25px] px-[23px] rounded-[13px] card_bg'>
          <div className=' lg:flex items-center gap-[30px]'>
            <div className=' relative'>
            <div>
              <img src={girl} alt="" />
            </div>
            <div className=' absolute top-[-10px] left-[-10px]'>
              <Elps/>
            </div>
            </div>
            <div>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Fivestar/>
            </div>
          </div>
          </div> 
          <div className='w-[100%] md:w-[50%] border-[#0000001a] card_shadow hover:text-white hover:border-transparent border py-[25px] px-[23px] rounded-[13px] card_bg'>
          <div className=' lg:flex items-center gap-[30px]'>
            <div className=' relative'>
            <div>
              <img src={girl} alt="" />
            </div>
            <div className=' absolute top-[-10px] left-[-10px]'>
              <Elps/>
            </div>
            </div>
            <div>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Fourstar/>
            </div>
          </div>
          </div> 
          </div>
          <div className=' flex flex-wrap gap-[25px] mt-[24px]'>
        <div className='w-[100%] md:w-[50%] border-[#0000001a] card_shadow hover:text-white hover:border-transparent border py-[25px] px-[23px] rounded-[13px] card_bg'>
          <div className=' lg:flex items-center gap-[30px]'>
            <div className=' relative'>
            <div>
              <img src={girl} alt="" />
            </div>
            <div className=' absolute top-[-10px] left-[-10px]'>
              <Elps/>
            </div>
            </div>
            <div>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Twostar/>
            </div>
          </div>
          </div> 
          <div className='w-[100%] md:w-[50%] border-[#0000001a] card_shadow hover:text-white hover:border-transparent border py-[25px] px-[23px] rounded-[13px] card_bg'>
          <div className=' lg:flex items-center gap-[30px]'>
            <div className=' relative'>
            <div>
              <img src={girl} alt="" />
            </div>
            <div className=' absolute top-[-10px] left-[-10px]'>
              <Elps/>
            </div>
            </div>
            <div>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Threetar/>
            </div>
          </div>
          </div> 
          </div>
        </div>             
                   
       </Slider> */}
       <div className=' card_get rounded-[16px] py-[60px] lg:px-[211px] translate-y-32'>
        <div className='  text-center flex-col'>
          <p className=' text-white text-[25px] md:text-[38px] font-semibold ff_gilroy_heavy line_height'>We are always ready to help you and answer your questions.</p>
          <button className=' text-[#45ABD5] leading-[150%] text-[16px] font-semibold ff_inter py-[12px] px-[24px] bg-white rounded-[5px] mt-[20px]'>Get in Touch</button>
          </div>
       </div>
       </div>
    </div>
  )
}

export default Listen