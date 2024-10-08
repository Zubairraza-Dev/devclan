"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import InvolvementCard from "@/components/InvolvementCard";
import { involvementData } from "@/data/involvement";
import { caseStudies } from "@/data/caseStudies";
import TechsCard from "@/components/TechsCard";
import RightArrowSvg from "@/components/RightArrowSvg.tsx/RightArrowSvg";
import LeftSvgArrow from "@/components/SvgArrow/LeftSvgArrow";
import { useState } from "react";
interface CaseStudyDetailProps {
  params: any;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ params }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const { id } = params;
  const caseStudyId = parseInt(params.id, 10);
  const caseStudy = caseStudies.find(
    (caseStudy) => caseStudy.id === caseStudyId
  );

   

   
  const handleNext = () => {
    if (caseStudy?.functionalityImage) {
      setCurrentIndex((prevIndex) =>
        prevIndex >= 2 ?  (prevIndex ) :(prevIndex+ 1));
    }
  };

  const handlePrev = () => {
    if (caseStudy?.functionalityImage) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? caseStudy.functionalityImage.length - 1 : prevIndex - 1
      );
    }
  };
  const images = caseStudy?.functionalityImage || [];
  return (
    <div className="container mx-auto h-full relative ">
      <div>
        <div className="absolute left-[14px] top-[40px] h-full border-l-2 border-[#0755E9]"></div>
        {/* Outer circle with inner circle */}
        <div className="absolute left-[0px] top-[10px] flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center w-8 h-8 border-2 border-[#0755E9] rounded-full">
            <div className="w-3 h-3 bg-[#0755E9] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="ml-10 flex flex-col gap-10">
        {/* About Section */}

        <h1 className="text-[24px] sm:text-4xl font-bold ml-4">About</h1>

        <div className="sm:my-4">
          <Image
            src={caseStudy?.mainImg}
            alt="redwave"
            objectFit="fill"
            className="w-full"
          />
        </div>

        <div className="sm:my-4">
          <p>{caseStudy?.description}</p>
        </div>

        {/* Problem Statement */}
        <div>
          <h1 className="text-[24px] sm:text-4xl font-bold">Problem Statement</h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <ul className="list-disc marker:text-[#0755E9] marker:text-2xl pl-5 mb-4">
            {caseStudy?.problems?.map((technology, index) => (
              <li key={index} className="mb-1">
                {technology}
              </li>
            ))}
          </ul>
        </div>

        {/* DevClan Involvement */}
        <div>
          <h1 className="text-[24px] sm:text-4xl font-bold">DevClan Involvement</h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <div className="flex gap-2 flex-wrap justify-between my-10">
            {involvementData?.map((involvement) => (
              <InvolvementCard
                key={involvement.id}
                title={involvement.title}
                icon={involvement.icon}
              />
            ))}
          </div>
        </div>

        {/* Core Functionality */}
        <div className="sm:my-36">
          <div className="flex justify-between items-center mb-10 ">

          <h1 className="text-[24px] sm:text-4xl font-bold">Core Functionality</h1>
          <div className="sm:flex items-center gap-2 hidden">
              
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

              >
              <RightArrowSvg color={currentIndex >= images.length - 1 ? "#1B232E" :"#D1D1D1" }/>
              </button>
            </div>
          </div>
          <div>
            
            <div className="transition duration-1000 ease-in-out ">
              <Image
              src={images[currentIndex]}  
              alt={`Functionality Image ${currentIndex + 1}`}
              className="w-full h-[150px]  sm:h-[540px] object-cover rounded-[12px] "
              />
            </div>
          </div>
          <p className="my-4">{caseStudy?.functionality}</p>
          
        </div>

        {/* Technologies Used */}
        <div>
          <h1 className="text-[24px] sm:text-4xl font-bold">Technologies Used</h1>
          <div className="flex gap-2 flex-wrap justify-between my-10">
            {caseStudy?.technologies?.map((technology) => (
              <TechsCard icon={technology} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
