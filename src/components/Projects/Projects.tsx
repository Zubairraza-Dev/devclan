"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "@/components/CaseStudyCard/CaseStudyCard";
import LeftSvgArrow from "@/components/SvgComponents/LeftArrowSvg";
import RightArrowSvg from "@/components/SvgComponents/RightArrowSvg";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  const containerRef = useRef<HTMLDivElement | null>(null);

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
    <div>
      <div className="sm:container w-[93%] mx-auto py-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="sm:text-4xl text-[24px] font-bold">Our Projects</h1>
          <div className="sm:flex items-center gap-2 hidden">
            <Link href="/case-studies">
              <button className="rounded-3xl border p-2 w-24 h-12 hover:bg-[#0755E9] hover:text-white">
                View All
              </button>
            </Link>
            {/* <button
              onClick={handlePrev}
              className={`rounded-full border h-10 w-10 hover:bg-[#0755E9] hover:text-white  ${
                currentIndex === 0
                  ? "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentIndex === 0}
            >
              &lt;
            </button> */}
            {/* <button
              onClick={handleNext}
              className={`rounded-full border h-10 w-10 hover:bg-[#0755E9] hover:text-white ${
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
              <LeftSvgArrow
                color={currentIndex === 0 ? "#D1D1D1" : "#1B232E"}
              />
            </button>

            <button
              onClick={handleNext}
              className={`rounded-full border h-[50px] w-[50px] hover:bg-[#0755E9] hover:text-white flex justify-center items-center  `}
              disabled={currentIndex + itemsToShow >= caseStudies.length}
            >
              <RightArrowSvg
                color={currentIndex === 0 ? "#1B232E" : "#D1D1D1"}
              />
            </button>
          </div>
        </div>
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {/* .slice(currentIndex, currentIndex + itemsToShow) */}
          {caseStudies.map((caseStudy) => (
            <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`}>
              <CaseStudyCard
                title={caseStudy.title}
                description={caseStudy.shortDescription}
                image={caseStudy.cardImg}
                background={caseStudy.background}
                // className="scroll-snap-start"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
