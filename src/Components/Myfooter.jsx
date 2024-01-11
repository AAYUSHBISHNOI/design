import React from 'react'
import { Facebook, Instagram, Linkdin, Twitter } from './Mysvg'

const Myfooter = () => {
    const today = new Date();
  const year = today.getFullYear();
  return (
    <div id='ContactUs' className=' bg-black'>
        <div className=' container max-w-[1164px] mx-auto px-3'>
            <div className='pt-28 md:pt-[130px] lg:pt-44 flex flex-wrap'>
                <div className=' w-[100%] md:w-[70%] lg:w-[44%]'>
                    <p className=' text-[24px] font-semibold ff_gilroy_regular line_height text-white'>Transforma Digital</p>
                    <p className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter mt-[7px] md:mt-[16px]'>Lorem ipsum dolor sit amet consectetur. <span className=' sm:block'> Interdum neque isl est mollis bibendum</span><span className=' sm:block'> egestas diamarcu massa eleifend.</span></p>
                    <div className=' flex items-center gap-[12px] mt-[10px] md:mt-[34px]'>
                       <div>
                       <a href="https://twitter.com/i/flow/login" target='_blank'><Twitter/></a>
                       </div>
                        <div>
                        <a href="https://www.facebook.com/" target='_blank'><Facebook/></a>
                        </div>
                        <div>
                        <a href="https://www.linkedin.com/" target='_blank'><Linkdin/></a>
                        </div>
                       <div>
                       <a href="https://www.instagram.com/" target='_blank'><Instagram/></a>
                       </div>
                    </div>
                </div>
                <div className=' w-[50%] md:w-[30%] lg:w-[25%] pt-5 md:pt-0 order-2 md:order-1'>
                    <ul>
                        <li className=' text-white font-serif text-[24px] ff_gilroy_heavy line_height mb-[20px]'>Phone</li>
                        <li><a href="tel:+59 47556 81-100" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>+59 47556 81-100</a></li>
                        <li className=' mt-[16px]'><a href="tel:+59 47556 81-100" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>+59 47556 81-100</a></li>
                    </ul>
                    <ul className=' mt-[45px]'>
                        <li className=' text-white font-serif text-[24px] ff_gilroy_heavy leading-[125%] mb-[20px]'>Email</li>
                        <li><a href="mailto:12345678@gmail.com" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>12345678@gmail.com</a></li>
                    </ul>
                </div>
                <div className=' w-[50%] md:w-[70%] lg:w-[20%] pt-5 lg:pt-0 order-1 md:order-2'>
                    <ul>
                        <li className=' text-white font-serif text-[24px] ff_gilroy_heavy line_height mb-[20px]'>Main Menu</li>
                        <li><a href="#Home" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Home</a></li>
                        <li className=' mt-[16px]'><a href="#AboutUs" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>About Us</a></li>
                        <li className=' mt-[16px]'><a href="Services" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Services</a></li>
                        <li className=' mt-[16px]'><a href="#Portfolio" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Portfolio</a></li>
                        <li className=' mt-[16px]'><a href="#ContactUs" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Contact Us</a></li>
                    </ul>
                </div>
                <div className=' md:w-[30%] lg:w-[10%] order-3'>
                    <ul>
                        <li className=' mt-4 md:mt-[50px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Careers</a></li>
                        <li className=' mt-[16px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Blog</a></li>
                        <li className=' mt-[16px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Team</a></li>
                        <li className=' mt-[16px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Contacts</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bg-[#666666] w-[100%] h-[1px] opacity-[0.4] mt-[62px]'></div>
        <div className=' container max-w-[1164px] mx-auto px-3'>
            <div className=' flex flex-col md:flex-row justify-center sm:justify-between items-center py-[29px]'>
                 <div class="text-center text-white">
                 <small className=' cursor-pointer text-[#b2b2b2] text-[14px] md:text-[16px] font-normal leading-[150%] ff_inter'>{year} Transforma Digital Website, All right reserved.</small>
                </div>
               
                <div className=' flex gap-[30px]  mt-2 md:mt-0'>
                    <p className=' cursor-pointer text-[#b2b2b2] text-[14px] md:text-[16px] font-normal leading-[150%] ff_inter'>Privacy Policy</p>
                    <p className=' cursor-pointer text-[#b2b2b2] text-[14px] md:text-[16px] font-normal leading-[150%] ff_inter'>Terms of  Use</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Myfooter