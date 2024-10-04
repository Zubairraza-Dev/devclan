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
    portfolio? : any[]
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
  portfolio
}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const selectedData =  portfolio?.slice(currentIndex, currentIndex + itemsToShow)

  const handleNext = () => {
    if (
      containerRef.current &&
      currentIndex + itemsToShow < caseStudies.length
    ) {
      setCurrentIndex((prev) => prev + itemsToShow);
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (containerRef.current && currentIndex - itemsToShow >= 0) {
      setCurrentIndex((prev) => prev - itemsToShow);
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='sm:w-full w-[93%] mx-auto'>

      {/* hero section  */}
        <div className="flex justify-between items-center w-full mb-36 mt-5">
          <div className="text-customDark w-[40%] flex flex-col gap-8 h-[464px]">
            <div className="text-[58px] tracking-tighter leading-[76px] font-bold">
            {title}
            </div>
            <div className="text-[24px] leading-[36px] tracking-tighter">
              {description}
            </div>
            
            <div className="flex flex-col gap-1.5 ">
              {
                detailPoints?.map( (e, i) => (
                  <div key={i} className='flex gap-4 items-center '>
                     <div className='bg-customBlue h-[10px] w-[10px] rounded-full'></div>
                    <div className='tracking-tighter'>{e}</div>
                  </div>
                ))
              }
            </div>
            <div className="w-[141px] sm:h-[60px] h-[50px] tracking-tighter sm:rounded-[10px] rounded-[8px] bg-customBlue flex justify-center text-white font-bold text-[16px] items-center ">
            Get in Touch
            </div>
          </div>
            <Image alt="ai image" src={image}  className='w-[40%]'/>
        </div>


        {/* services section  */}
        <div>
          <div className='tracking-tighter text-[48px] leading-[48px] font-bold'>
            {serviceTitle}
          </div>
          <div className='flex flex-wrap 2xl:gap-20 xl:gap-12 sm:gap-10 text-customDark tracking-tighter mt-12'>
            {
              detailServices?.map( (e) => (
                <div key={e.id} className='sm:w-[424px] sm:h-[352px] relative group'>
                   <div className='absolute right-0 left-0 mt-3 group-hover:scale-50 transition duration-700 ease-in-out origin-top-right'>
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

        {/* tools used  */}
        {
          title !== "Future Ready AI Development Services" && (
            <div className='my-24'>
          <div className='tracking-tighter text-[48px] leading-[48px] font-bold'> Tools Used </div>
          <div className='w-full flex justify-between items-center my-14'>
            {
              icons?.map( (e) => (
                <div className='shadow-[0_4px_15px_rgba(0,0,0,0.5)] flex justify-center items-center w-[23%] h-[174px] rounded-[10px]'>
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
            <div className='my-36'>
            <div className='tracking-tighter text-[48px] leading-[48px] font-bold'> AI Development Phases </div>
              <div className='flex flex-wrap justify-between mt-16'>
            {developmentPhase?.map((e) => (
              <div
                key={e.id}
                className={`bg-[#D6D6D640] bg-opacity-25 rounded-[30px] h-[322px] mt-5 ${(e.id === 2 || e.id === 3) ? 'w-[60%]' : 'w-[38%]'}`}
              >
                 <div className='w-[93%] mx-auto  flex gap-4 flex-col h-full justify-center tracking-tighter'>
                 <div className='text-[16px] leading-[34px]'>
                        {e.smallHeading}
                      </div>
                      <div className='text-[24px] font-bold text-customBlue'>
                        {e.title}
                      </div>
                      <div className='text-[16px] leading-[34px]'>
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
         <div className="sm:container w-[93%] mx-auto py-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="sm:text-4xl text-[24px] font-bold">Our Projects</h1>
              <div className="sm:flex items-center gap-2  hidden">
                <Link href="/case-studies">
                  <button className="rounded-3xl border p-2">View All</button>
                </Link>
                <button
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
                </button>
              </div>
            </div>
            <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {
          portfolio?.slice(currentIndex, currentIndex + itemsToShow)
            .map((e) => (
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