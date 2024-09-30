"use client"
import { useEffect, useState, useRef } from 'react';
import TechnologyCard from "../TechnologyCard"
import psLight from "../../assets/icons/psLightT.svg"
import apple from "../../assets/icons/appleLightT.svg"
import vue from "../../assets/icons/vueLightT.svg"
import android from "../../assets/icons/androidLightT.svg"
import diamondLight from "../../assets/icons/diamondLightT.svg"
import c from "../../assets/icons/cLightTech.svg"
import react from "../../assets/icons/reactLightT.svg"
import figma from "../../assets/icons/figmaLightT.svg"
import python from "../../assets/icons/pythonLightT.svg"
import java from "../../assets/icons/javaLightTech.svg"
import xd from "../../assets/icons/xdLightT.svg"
import box from "../../assets/icons/boxLightT.svg"


const ScrollingBoxes = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down'); 
  const [animationToggle, setAnimationToggle] = useState(false); 
  const boxRef = useRef(null); 

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      // Toggle animation when scrolled past 50vh
      if (Math.abs(currentScrollY - lastScrollY) >= window.innerHeight / 2) {
        setAnimationToggle(!animationToggle); // Reverse the animation every 50vh
      }

      lastScrollY = currentScrollY;
      setScrollPosition(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationToggle]);
 

  return (
    <div className="sm:mt-32 my-0 w-full  ">
      <div className="font-bold sm:text-[48px] text-[24px] leading-[48px] space-x-[-5px] text-[#1F1F1F] flex justify-center mb-3 ">Technologies We Use</div>
    {/* <div className="w-[110%] mx-auto overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-hide"> */}

    <div className="flex items-center sm:min-h-screen sm:h-[830px] h-[230px] justify-between sm:gap-4 gap-1.5 
      overflow-auto scroll-smooth hide-scrollbar ">

      <div ref={boxRef} className="w-full flex flex-col items-center ">
        
      <TechnologyCard 
        title="smallBlue"
        description="lower"
        background="blue"
        image={psLight}
        scrollDirection={scrollDirection}
        cornerCard="right"
        cornerBoxImage="ps"

        />
        <TechnologyCard 
        title="smallDark"
        description="upper"
        image={c}
        background="dark"
        scrollDirection={scrollDirection}
        cornerCard="right"
        />
      </div>

      <div ref={boxRef} className="w-full flex flex-col items-center">
          
        <TechnologyCard 
          title="largeBlue"
          description="lower"
          image={box}
          background="dark"
          scrollDirection={scrollDirection}
          cornerCard="mid"
          />
          <TechnologyCard 
          title="largeDark"
          description="upper"
          image={react}
          background="blue"
          scrollDirection={scrollDirection}
          cornerCard="mid"
          />
      </div>

      <div ref={boxRef} className="w-full flex flex-col items-center">
        
      <TechnologyCard 
        title="smallBlue"
        description="lower"
        background="blue"
        image={android}
        scrollDirection={scrollDirection}
        cornerCard="mid"
        />
        <TechnologyCard 
        title="smallDark"
        description="upper"
        image={figma}
        background="dark"
        scrollDirection={scrollDirection}
        cornerCard="mid"
        />
      </div>

      <div ref={boxRef} className="w-full flex flex-col items-center">
          
        <TechnologyCard 
          title="largeBlue"
          description="lower"
          background="dark"
          image={python}
          scrollDirection={scrollDirection}
          cornerCard="mid"
          />
          <TechnologyCard 
          title="largeDark"
          description="upper"
          image={vue}
          background="blue"
          scrollDirection={scrollDirection}
          cornerCard="mid"
          />
      </div>
      <div ref={boxRef} className="w-full flex flex-col items-center">
        
      <TechnologyCard 
        title="smallBlue"
        description="lower"
        image={diamondLight}
        background="blue"
        scrollDirection={scrollDirection}
        cornerCard="mid"
        />
        <TechnologyCard 
        title="smallDark"
        description="upper"
        background="dark"
        image={apple}
        scrollDirection={scrollDirection}
        cornerCard="mid"
        />
      </div>

      <div ref={boxRef} className="w-full flex flex-col items-center">
          
        <TechnologyCard 
          title="largeBlue"
          description="lower"
          background="dark"
          image={xd}
          scrollDirection={scrollDirection}
          cornerCard="left"
          cornerBoxImage="xd"

          />
          <TechnologyCard 
          title="largeDark"
          description="upper"
          image={java}
          background="blue"
          scrollDirection={scrollDirection}
          cornerCard="left"
          />
      </div>
      
    {/* </div> */}
    </div>
    </div>
  );
};

export default ScrollingBoxes;