import React from 'react'
import Slider from "react-slick";
import { Arrowone, Arrowtwo, Elps, Fivestar, Fourstar, Threetar, Twostar } from './Mysvg';
import girl from "../assets/img/svg/girl.svg";
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
    <div id='listen'>
      <div className=' container max-w-[1164px] mx-auto mt-10 md:mt-20 lg:mt-28 xl:mt-[150px] px-3'>
        <div className=' flex flex-col md:flex-row text-center md:text-start justify-center md:justify-between items-center' data-aos="zoom-in">
          <div>
          <p className='txt_clr ff_gilroy_heavy text-[22px] sm:text-[24px] font-semibold line_height'>Testimonials</p>
        <h2 className=' text-black ff_gilroy_heavy text-[28px] sm:text-[48px] font-semibold line_height mt-2 md:mt-[16px]'>Listen to our happy clients</h2>
          </div>
          <div className=' mt-3 md:mt-0'>
              <button className='img_pstn_8 z-3' onClick={() => slider.current.slickPrev()}><Arrowone/></button>
              <button className='img_pstn_9 z-3' onClick={() => slider.current.slickNext()}><Arrowtwo/></button>
        </div>
        </div>
       
       <Slider ref={slider} {...settings} className=' mt-[45px]'>
        <div className=''>
          <div className=' flex  gap-[25px]'>
            <div className='w-[100%] xl:w-[50%]' data-aos="zoom-in-up">
            <div className='card_shadow hover:text-white  py-[25px] px-[23px] rounded-[13px] card_radius card_bg z-50 '>
          <div className='  items-center gap-[30px] flex flex-col justify-center md:justify-start md:flex-row'>
            <div className=' relative'>
              <Elps/>
              <img className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={girl} alt="" />
            </div>
            <div className=' flex flex-col justify-center text-center items-center md:justify-start md:items-start md:text-start'>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] xl:text-[15px] xxl:text-[16px] font-normal leading-[150%] my-[10px] md:my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Fivestar/>
            </div>
          </div>
          </div> 
            </div>
            <div className='w-[100%] xl:w-[50%] hidden xl:block' data-aos="zoom-in-down">
            <div className='card_shadow hover:text-white  py-[25px] px-[23px] rounded-[13px] card_radius card_bg z-50'>
          <div className=' lg:flex items-center gap-[30px] flex flex-col justify-center md:justify-start md:flex-row'>
            <div className=' relative'>
            <Elps/>
              <img className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={girl} alt="" />
            </div>
            <div className='flex flex-col justify-center text-center items-center md:justify-start md:items-start md:text-start'>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] xl:text-[15px] xxl:text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Fourstar/>
            </div>
          </div>
          </div> 
            </div>
          </div>
          <div className=' flex  gap-[25px] mt-[24px]'>
            <div className='w-[100%] xl:w-[50%]' data-aos="zoom-out">
            <div className='card_shadow hover:text-white  py-[25px] px-[23px] rounded-[13px] card_radius card_bg z-50'>
          <div className=' flex flex-col items-center md:flex-row gap-[30px]'>
            <div className=' relative '>
            <Elps/>
              <img className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={girl} alt="" />
            </div>
            <div className=' flex flex-col justify-center text-center items-center md:justify-start md:items-start md:text-start'>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] xl:text-[15px] xxl:text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Twostar/>
            </div>
          </div>
          </div> 
            </div>
            <div className='w-[100%] xl:w-[50%] hidden xl:block'  data-aos="zoom-out-up">
            <div className='card_shadow hover:text-white  py-[25px] px-[23px] rounded-[13px] card_radius card_bg z-50'>
          <div className=' lg:flex items-center gap-[30px]'>
            <div className=' relative'>
            <Elps/>
              <img className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={girl} alt="" />
             
            </div>
            <div>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] xl:text-[15px] xxl:text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Threetar/>
            </div>
          </div>
          </div> 
            </div>
          </div>
        </div>
          <div className=' hidden xl:block'>
          <div className='flex  gap-[25px]'>
            <div className='w-[100%] xl:w-[50%]' data-aos="zoom-in">
            <div className='card_shadow hover:text-white  py-[25px] px-[23px] rounded-[13px] card_radius card_bg z-50'>
          <div className='flex flex-col md:flex-row items-center gap-[30px]'>
            <div className=' relative '>
            <Elps/>
              <img className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={girl} alt="" />
            
            </div>
            <div className=' flex flex-col justify-center items-center text-center md:text-start  md:items-start'>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] xl:text-[15px] xxl:text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Fivestar/>
            </div>
          </div>
          </div> 
            </div>
            <div className='w-[100%] xl:w-[50%] hidden xl:block' data-aos="zoom-in-up">
            <div className='card_shadow hover:text-white  py-[25px] px-[23px] rounded-[13px] card_radius card_bg z-50'>
          <div className=' lg:flex items-center gap-[30px]'>
            <div className=' relative'>
            <Elps/>
              <img className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={girl} alt="" />
             
            </div>
            <div>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] xl:text-[15px] xxl:text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Fourstar/>
            </div>
          </div>
          </div> 
            </div>
          </div>
          <div className='flex  gap-[25px] mt-[24px]'>
            <div className='w-[100%] xl:w-[50%]' data-aos="zoom-out">
            <div className='card_shadow hover:text-white  py-[25px] px-[23px] rounded-[13px] card_radius card_bg z-50'>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-[30px]'>
            <div className=' relative'>
            <Elps/>
              <img className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={girl} alt="" />
            </div>
            <div className=' flex flex-col justify-center items-center text-center md:text-start md:items-start md:justify-start'>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] xl:text-[15px] xxl:text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Twostar/>
            </div>
          </div>
          </div> 
            </div>
            <div className='w-[100%] xl:w-[50%] hidden xl:block' data-aos="zoom-out-up">
            <div className='card_shadow hover:text-white  py-[25px] px-[23px] rounded-[13px] card_radius card_bg z-50'>
          <div className=' lg:flex items-center gap-[30px]'>
            <div className=' relative'>
            <Elps/>
              <img className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={girl} alt="" />
            </div>
            <div>
              <p className='  ff_gilroy_heavy line_height font-semibold text-[24px]'>Latifa Alghanim</p>
              <p className='txt_clr_1 ff_lato text-[16px] xl:text-[15px] xxl:text-[16px] font-normal leading-[150%] my-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className=' lg:block'>elit. Cursus nibh mauris, nec turpis orci lectus. </span></p>
              <Threetar/>
            </div>
          </div>
          </div> 
            </div>
          </div>
          </div>
       </Slider>
       <div className=' card_get rounded-[16px] py-[40px] md:py-[60px] lg:px-[211px] translate-y-16 md:translate-y-32'>
        <div className='  text-center flex-col'>
          <p className=' text-white text-[25px] md:text-[38px] font-semibold ff_gilroy_heavy line_height'>We are always ready to help you and answer your questions.</p>
          <button className=' text-[#45ABD5] leading-[150%] text-[16px] font-semibold ff_inter py-[12px] px-[24px] hover:text-white duration-500 hover:bg-[#45abd5] bg-white rounded-[5px] mt-[20px]'>Get in Touch</button>
          </div>
       </div>
       </div>
    </div>
  )
}

export default Listen