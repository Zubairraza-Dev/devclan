"use client"

import { useState, useRef } from "react";
import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";

import Image from 'next/image';
import React from 'react'
import circle1 from "../assets/icons/Ornament 2.svg"
import circle2 from "../assets/icons/Ornament 3.svg"
import circle3 from "../assets/icons/Ornament 4.svg"
import CaseStudyCard from "./CaseStudyCard/CaseStudyCard";
import UxDesignSvg from "./UxDesignSvg/UxDesignSvg";
import LeftSvgArrow from "../components/SvgArrow/LeftSvgArrow";
import RightArrowSvg from "../components/RightArrowSvg.tsx/RightArrowSvg";




interface ServiceDetailCardProp {
    title?: string;
    description?: string;
    image?: any;
    detailPoints? : string[],
    background?: any;
    textColor?: any;
    icons?: any[];
    serviceTitle?: string;
    detailServices? : any[];
    developmentPhase? : any[];
    portfolio? : any[];
    developmentProcess? : any[];

}

const ServiceDetailCard : React.FC<ServiceDetailCardProp> = ({
  title,
  image,
  description,
  detailPoints,
  serviceTitle,
  detailServices,
  icons,
  developmentPhase,
  portfolio,
  developmentProcess
}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const selectedData =  portfolio?.slice(currentIndex, currentIndex + itemsToShow)
  const [currentStep , setCurrentStep] = useState<number | null>(0)

  const handleNext = () => {
    if (
      containerRef.current  && portfolio?.length &&
      currentIndex + itemsToShow < portfolio?.length
    ) {
      setCurrentIndex((prev) => prev + itemsToShow);
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // const handleNext = () => {
  //   if (containerRef.current) {
  //     const maxIndex = caseStudies.length - itemsToShow;
      
  //     if (currentIndex < maxIndex) {
  //       setCurrentIndex((prev) => Math.min(prev + itemsToShow, maxIndex));
        
  //       containerRef.current.scrollBy({
  //         left: containerRef.current.offsetWidth,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // };
  
  const handlePrev = () => {
    if (containerRef.current && currentIndex - itemsToShow >= 0) {
      setCurrentIndex((prev) => prev - itemsToShow);
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (i : any ) => {
    setCurrentStep(i)
  }

  return (
    <div className='sm:w-full w-[93%] mx-auto'>

      {/* hero section  */}
        <div className="flex justify-between items-center w-full sm:mb-36 mb-20 sm:mt-5 flex-wrap ">
          <div className="text-customDark w-full lg:w-[40%] flex flex-col gap-4 sm:gap-8 h-auto ">
            <div className="text-[24px] sm:text-[58px] tracking-tighter leading-[30px] sm:leading-[76px] font-bold">
            {title}
            </div>
            <div className="text-[16px] sm:text-[24px] leading-[24px] sm:leading-[36px] tracking-tighter">
              {description}
            </div>
            
            <div className="flex flex-col gap-1.5 ">
              {
                detailPoints?.map( (e, i) => (
                  <div key={i} className='flex gap-4 items-center '>
                     <div className='bg-customBlue h-[10px] w-[10px] rounded-full'></div>
                    <div className='tracking-tighter sm:text-md text-sm '>{e}</div>
                  </div>
                ))
              }
            </div>
            <div className="w-[141px] sm:h-[60px] h-[50px] tracking-tighter sm:rounded-[10px] rounded-[8px] bg-customBlue flex justify-center text-white font-bold text-[16px] items-center ">
            Get in Touch
            </div>
          </div>
            <Image alt="ai image" src={image}  className='w-full lg:w-[40%] sm:mt-0 mt-10'/>
        </div>


        {/* services section  */}
        <div>
          <div className='tracking-tighter sm:text-[48px] text-[24px] leading-[48px] font-bold'>
            {serviceTitle}
          </div>
          <div className='flex flex-wrap 2xl:gap-20 xl:gap-12 sm:gap-10 text-customDark tracking-tighter sm:mt-12 '>
            {
              detailServices?.map( (e) => (
                <div key={e.id} className='sm:w-[424px] sm:h-[352px] relative group sm:mt-0 mt-20'>
                   <div className='absolute right-0 left-0 mt-3 sm:group-hover:scale-50 transition duration-700 ease-in-out origin-top-right scale-50 sm:scale-100'>
                    <Image src={circle1} alt='circle' className='absolute mx-auto left-48 right-0'/>
                    <Image src={circle2} alt='circle' className='absolute right-0'/>
                    <Image src={circle3} alt='circle' className='absolute right-0 mt-16'/>
                  </div>
                    
                  <div className='w-[95%] mx-auto  flex gap-4 flex-col h-full justify-center'>
                      <Image alt='icon image' src={e.icon}/>
                      <div className='text-[24px] font-bold'>
                        {e.title}
                      </div>
                      <div className='text-[16px] leading-[34px]'>
                        {e.description}
                      </div>
                  </div>
                 
                </div>
              ))
            }
          </div>
        </div>

        {/* Development phase of mobile and web development  */}
        {
          (title === "Web App Development" || title === "Mobile App Development Services") && (
            <div className="sm:mt-32 my-12 sm:mb-44 flex flex-col gap-9 sm:gap-24 w-full relative overflow-hidden">
              <div className='tracking-tighter text-[24px] sm:text-[48px] leading-[48px] font-bold'>
                { (title === "Web App Development") ? "Web Development Process" : "Mobile Development Process"}
              </div>
              <div className="flex justify-between sm:gap-4 gap-20 scroll-smooth overflow-x-auto   hide-scrollbar w-full  p-3">
                {
                  developmentProcess?.map( (e, i) => (
                    <div>
                      <div className="w-full mb-6">
                        <div className="h-[2px] w-full absolute bg-[#EEEEEE] mt-[11px]">
                        </div>

                        <div className={`w-[24px] h-[24px] flex justify-center items-center border rounded-full relative ${currentStep === i ? " border-customBlue" : " border-[#EEEEEE] "}`}>
                          <div className={`w-[12px] h-[12px]${currentStep === i ? " bg-customBlue" : " bg-[#EEEEEE] "} rounded-full`}></div>
                        </div>
                      </div>

                    <div key={i} className={`h-[59px] w-auto px-5 tracking-tighter  shadow-lg sm:shadow-[0_1px_6px_rgba(0,0,0,0.5)]  font-semibold text-[16px] rounded-[10px]  flex flex-col box-border pt-2 hover:cursor-pointer text-nowrap
                      ${currentStep === i ? " bg-customBlue text-white " : " text-customDark bg-white bg-opacity-5"}`} 
                    onClick={() => handleClick(i)}>
                      <span className="text-[12px]">step {e.id}</span>
                      {e.title} 
                    </div>
                    </div>
                    
                  ))
                }
              </div>
               
              {currentStep !== null && developmentProcess?.[currentStep] && title === "Mobile App Development Services" &&(
              <div className="bg-customBlue h-auto sm:h-[306px] w-full sm:w-[632px] rounded-[30px] sm:rounded-[48px] mx-auto flex justify-center items-center shadow-2xl sm:py-0 py-2">

                <div className="w-[96%] h-[93%] rounded-[30px] sm:rounded-[48px] bg-white bg-opacity-10 flex justify-between items-center sm:py-0 py-2">
                  <div className="flex mx-auto w-[96%] items-center h-full">
                    <div className="bg-[#407CF0] rounded-[10px] w-[60px] sm:h-[80px] h-[60px] "></div>
                    <div className=" text-white p-4 h-[100%] rounded-[25px] sm:mt-12 tracking-tighter flex flex-col gap-1 sm:gap-5">
                      <Image src={developmentProcess[currentStep]?.image} alt="icons"/>
                      <div className="text-[16px] sm:text-[24px] font-semibold">
                      {developmentProcess[currentStep]?.title}
                      </div>
                      <div className="text-[12px] sm:text-[16px] ">
                      {developmentProcess[currentStep]?.description}
                      </div>
                    </div>
                  </div>
                </div>
               </div>
              )}
               {currentStep !== null && developmentProcess?.[currentStep] && title === "Web App Development" &&(
              <div className="bg-customBlue h-auto sm:h-[410px] w-full sm:w-[640px] rounded-[16px] mx-auto flex  flex-col shadow-2xl  gap-1 sm:gap-3 sm:pb-0 pb-3">
                <div className="flex gap-2 justify-start ml-4 mt-1 sm:mt-2">
                <div className="bg-[#407CF0] rounded-full w-[7px] h-[7px] sm:w-[12px] sm:h-[12px] "></div>
                <div className="bg-[#407CF0] rounded-full w-[7px] h-[7px] sm:w-[12px] sm:h-[12px] "></div>
                <div className="bg-[#407CF0] rounded-full w-[7px] h-[7px] sm:w-[12px] sm:h-[12px] "></div>

                </div>
                <div className="  h-[85.5%] bg-white sm:py-0 py-5 bg-opacity-10 flex justify-between items-center">
                  <div className="flex mx-auto w-[99%] items-center h-[90%] flex-col">
                    <div className=" text-white p-4 h-[100%] rounded-[25px] sm:mt-12 tracking-tighter flex flex-col gap-1.5 sm:gap-5">
                      <Image src={developmentProcess[currentStep]?.image} alt="icons"/>
                      <div className="text-[16px] sm:text-[24px] font-semibold">
                      {developmentProcess[currentStep]?.title}
                      </div>
                      <div className="text-[12px] sm:text-[16px] ">
                      {developmentProcess[currentStep]?.description}
                      </div>
                    </div>
                  </div>
                </div>
               </div>
              )}

               
            </div>
          )
        }

        {/* ux design process */}
        {
          title === "Top UI/UX Design Services" && (
            <UxDesignSvg/>
          )
        }
        {/* tools used  */}
        {
          title !== "Future Ready AI Development Services" && (
            <div className='my-12 sm:my-24'>
          <div className='tracking-tighter sm:text-[48px]  text-[24px] leading-[48px] font-bold'> Tools Used </div>
          <div className='w-full flex justify-between items-center my-8 sm:my-14 flex-wrap'>
            {
              icons?.map( (e) => (
                <div className='sm:shadow-[0_4px_15px_rgba(0,0,0,0.5)] shadow-[0_2px_10px_rgba(0,0,0,0.5)] flex justify-center items-center w-[48%] sm:w-[23%] h-[174px] rounded-[10px] sm:mt-0 mt-5'>
                  <Image alt='tools image' src={e}/>
                </div>
              ))
            }
          </div>
        </div>
          )
        }

        {/* ai development phase  */}
         {
          title === "Future Ready AI Development Services" && (
            <div className=' my-14 lg:my-36'>
            <div className='tracking-tighter text-[24px] sm:text-[48px] leading-[48px] font-bold '> AI Development Phases </div>
              <div className='flex flex-wrap justify-between sm:mt-16 mt-8'>
            {developmentPhase?.map((e) => (
              <div
                key={e.id}
                className={`bg-[#D6D6D640] bg-opacity-25 rounded-[30px] h-auto sm:h-[322px] sm:py-0 py-7 mt-5 ${(e.id === 2 || e.id === 3) ? 'lg:w-[60%] w-full' : 'w-full lg:w-[38%]'}`}
              >
                 <div className='w-[93%] mx-auto  flex sm:gap-4 gap-2 flex-col h-full justify-center tracking-tighter'>
                 <div className='text-[16px] leading-[34px]'>
                        {e.smallHeading}
                      </div>
                      <div className='text-[24px] font-bold text-customBlue'>
                        {e.title}
                      </div>
                      <div className='text-[16px] leading-[22px] sm:leading-[34px]'>
                        {e.description}
                      </div>
                  </div>
              </div>
            ))}
              </div>
            </div>
          )
         }

         {/* portfolio section */}
         <div className="sm:container w-full mx-auto pt-8 ">
            <div className="flex items-center justify-between mb-4">
              <h1 className="sm:text-4xl text-[24px] font-bold">Our Projects </h1>
              <div className="sm:flex items-center gap-2  hidden">
                <Link href="/case-studies">
                  {/* <button className="rounded-3xl border p-2">View All</button> */}
                  <button className="rounded-3xl border p-2 w-24 h-12 hover:bg-[#0755E9] hover:text-white">
                View All
              </button>
                </Link>
                {/* <button
                  onClick={handlePrev}
                  className={`rounded-full border h-10 w-10 hover:bg-blue-800 hover:text-white  ${
                    currentIndex === 0
                      ? "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={currentIndex === 0}
                >
                  &lt;
                </button>
                <button
                  onClick={handleNext}
                  className={`rounded-full border h-10 w-10 hover:bg-blue-800 hover:text-white ${
                    currentIndex + itemsToShow >= caseStudies.length
                      ? "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={currentIndex + itemsToShow >= caseStudies.length}
                >
                  &gt;
                </button> */}
                <button
              onClick={handlePrev}
              className={`rounded-full border h-[50px] w-[50px] hover:bg-[#0755E9] hover:text-white flex justify-center items-center   `}
              disabled={currentIndex === 0}
            >  
              <LeftSvgArrow color={currentIndex === 0 ? "#D1D1D1" : "#1B232E"} />
            </button>

            <button
              onClick={handleNext}
              className={`rounded-full border h-[50px] w-[50px] hover:bg-[#0755E9] hover:text-white flex justify-center items-center  `}
              disabled={currentIndex + itemsToShow >= caseStudies.length}
            >
            <RightArrowSvg color={currentIndex === 0 ? "#1B232E" :"#D1D1D1" }/>
            </button>
              </div>
            </div>
            <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {
          // portfolio?.slice(currentIndex, currentIndex + itemsToShow)
            selectedData?.map((e) => (
              <div key={e.id} className='w-full'>
                <CaseStudyCard 
                 title={e.title}
                 description={e.description}
                 image={e.image}
                 background={e.background}
                 />                
              </div> 
                )
              )
            }
           

        </div>

         </div>


        
    </div>
  )
}

export default ServiceDetailCard