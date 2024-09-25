import aiHand from "../assets/images/AIhand.svg"
import laptop from "../assets/images/laptop.svg"
import mobile from "../assets/images/mobile.svg"
import designPhone from "../assets/images/designPhone.svg"
import ps from "../assets/icons/ps.svg"
import diamond from "../assets/icons/diamond.svg"
import figma from "../assets/icons/figma.svg"
import xd from "../assets/icons/xd.svg"
import python from "../assets/icons/python.svg"
import java from "../assets/icons/java.svg"
import c from "../assets/icons/c.svg"
import r from "../assets/icons/r.svg"
import pyhonLight from "../assets/icons/pythonLight.svg"
import javaLight from "../assets/icons/javaLight.svg"
import cLight from "../assets/icons/cLight.svg"
import rLight from "../assets/icons/rLight.svg"

export const services = [
    { id: 1, title: "Design",image: designPhone, background: "bg-[#FAFAFA]", textColor: "text-[#1B232E]",icons:[ps, diamond, figma, xd] , description: "Build a visual presence and develop lasting relationships with your clients. Design plays a vital role in any system, your UI/UX team will ensure that your product is easily understandable to the targeted audience" },

    { id: 2, title: "AI",image: aiHand, background: "bg-gradient-to-r from-[#0F2D48] to-[#0755E9]", textColor: "text-[#1F1F1F]",icons:[pyhonLight, javaLight, cLight, rLight] , description: "Complete end-to-end AI solutions while you focus on business logics. Deploy your custom models on AWS, Google and private clouds" },

    { id: 3, title: "Web Development",image: laptop, background: "bg-gradient-to-r from-[#0F2D48] to-[#0755E9]", textColor: "text-[#1F1F1F]",icons:[pyhonLight, javaLight, cLight, rLight] , description: "Complete end-to-end AI solutions while you focus on business logics. Deploy your custom models on AWS, Google and private clouds" },

    { id: 4, title: "Mobile Development",image: mobile, background: "bg-[#FAFAFA]", textColor: "text-[#1B232E]",icons:[python, java, c, r] , description: "Build a visual presence and develop lasting relationships with your clients. Design plays a vital role in any system, your UI/UX team will ensure that your product is easily understandable to the targeted audience" },
  
]