import Image from "next/image";
import animationBg from "../../assets/icons/animationBg.svg"

const Hero = () => {
  return (
    <div className="sm:container w-[93%] mx-auto py-8 bg-custom-gradient sm:h-[816px] h-[235px] rounded-lg text-white overflow-hidden relative">
      <Image alt="animation image " src={animationBg} className={`absolute ml-[192px] sm:ml-[768px] -mt-[57px] sm:-mt-[231px] animate-rotate sm:w-auto sm:h-auto w-[419px] h-[418px]`}/>
      <div className="text-white flex flex-col justify-center sm:gap-10 gap-4 h-full relative w-[91%] mx-auto">

          <div className="sm:text-[32px] text-[16px] -space-x-[5px]">We think <span className="text-[#0755E9]">Value</span></div>

          <div className=" text-[24px] sm:text-[70px] leading-[30px] sm:leading-[90px] -space-x-[5px]">Next-gen enterprise <br />
          Software development company</div>

          <div className='w-[130px] sm:h-[60px] h-[44px] sm:rounded-[10px] rounded-[8px] bg-[#0755E9] flex justify-center text-white font-bold sm:text-[18px] text-[16px] items-center sm:mt-6 mt-2 '>
                                  Get in Touch
                              </div>
      </div>
    </div>
  );
};

export default Hero;
