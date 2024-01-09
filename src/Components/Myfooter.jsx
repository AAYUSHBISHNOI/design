import React from 'react'
import { Facebook, Instagram, Linkdin, Twitter } from './Mysvg'

const Myfooter = () => {
  return (
    <div className=' bg-black'>
        <div className=' container max-w-[1164px] mx-auto px-3'>
            <div className=' pt-48 flex flex-wrap'>
                <div className=' md:w-[44%]'>
                    <p className=' text-[24px] font-semibold ff_gilroy_heavy line_height text-white'>Transforma Digital</p>
                    <p className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter mt-[7px] md:mt-[16px]'>Lorem ipsum dolor sit amet consectetur. <span className=' lg:block'> Interdum neque isl est mollis bibendum</span><span className=' lg:block'> egestas diamarcu massa eleifend.</span></p>
                    <div className=' flex items-center gap-[12px] mt-[10px] md:mt-[34px]'>
                        <a href="https://twitter.com/i/flow/login" target='_blank'><Twitter/></a>
                        <a href="https://www.facebook.com/" target='_blank'><Facebook/></a>
                        <a href="https://www.linkedin.com/" target='_blank'><Linkdin/></a>
                        <a href="https://www.instagram.com/" target='_blank'><Instagram/></a>
                    </div>
                </div>
                <div className=' w-[64%] md:w-[25%] pt-5'>
                    <ul>
                        <li className=' text-white font-serif text-[24px] ff_gilroy_heavy line_height mb-[20px]'>Phone</li>
                        <li><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>+59 47556 81-100</a></li>
                        <li className=' mt-[16px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>+59 47556 81-100</a></li>
                    </ul>
                    <ul className=' mt-[45px]'>
                        <li className=' text-white font-serif text-[24px] ff_gilroy_heavy leading-[125%] mb-[20px]'>Email</li>
                        <li><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>12345678@gmail.com</a></li>
                    </ul>
                </div>
                <div className=' w-[35%] md:w-[20%] pt-5'>
                    <ul>
                        <li className=' text-white font-serif text-[24px] ff_gilroy_heavy line_height mb-[20px]'>Main Menu</li>
                        <li><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Home</a></li>
                        <li className=' mt-[16px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>About Us</a></li>
                        <li className=' mt-[16px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Services</a></li>
                        <li className=' mt-[16px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Portfolio</a></li>
                        <li className=' mt-[16px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Contact Us</a></li>
                    </ul>
                </div>
                <div className=' md:w-[10%]'>
                    <ul>
                        <li className=' mt-[50px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Careers</a></li>
                        <li className=' mt-[16px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Blog</a></li>
                        <li className=' mt-[16px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Team</a></li>
                        <li className=' mt-[16px]'><a href="" className=' text-[#b2b2b2] text-[16px] font-normal leading-[150%] ff_inter'>Contacts</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bg-[#666666] w-[100%] h-[1px] opacity-[0.4] mt-[62px] mb-[29px]'></div>
        <div className=' container max-w-[1164px] mx-auto px-3'>
            <div className=' flex flex-wrap justify-center md:justify-between items-center pb-[29px]'>
                <div>
                    <p className=' text-[#b2b2b2] text-[14px] md:text-[16px] font-normal leading-[150%] ff_inter'>2023 Transforma Digital Website, All right reserved.</p>
                </div>
                <div className=' flex gap-[30px]'>
                    <p className=' cursor-pointer text-[#b2b2b2] text-[14px] md:text-[16px] font-normal leading-[150%] ff_inter'>Privacy Policy</p>
                    <p className=' cursor-pointer text-[#b2b2b2] text-[14px] md:text-[16px] font-normal leading-[150%] ff_inter'>Terms of  Use</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Myfooter