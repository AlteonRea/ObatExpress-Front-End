import React from 'react'
import styles from '../../../styles/style'
import GetStarted from './GetStarted'
import { discount, truck } from '../../../assets/LandingPage'
const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col sm:py-24 py-6 `}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-black-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`text-white ${styles.paragraph} ml-2`}>
          <span className="text-[#33bbcf]">20%</span> Discount For{' '}
          <span className="text-[#33bbcf]">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between icon w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] text-black leading-[75px]">
          Your <br className="sm:block hidden" />{' '}
          <span className="text-black-gradient">Reliable</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className=" font-poppins font-semibold ss:text-[62px] text-[52px] ss:leading-[100px] text-black leading-[75px] w-full">
        Delivery Service.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Experience swift, efficient delivery with us. Our advanced algorithms
        and dedicated team ensure your purchases reach you as fast as possible.
        Choose MediTransit for reliable, speedy delivery.
      </p>
    </div>

    <div
      className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 ml-5 relative`}
    >
      <img src={truck} alt="billing" className="w-full relative z-[5]" />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 white__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 white__gradient" />
    </div>

    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted onClick="" />
    </div>
  </section>
)

export default Hero
