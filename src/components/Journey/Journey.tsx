import Image from "next/image";
import PencilAnimation from "../PencilAnimationJson/PencilAnimation";
import pencil from "@/assets/images/pencil.svg";
import { development } from "@/data/development";

const Journey = () => {
  return (
    <div className="w-[93%] sm:container mx-auto my-8">
      <div className="text-[#1F1F1F]  font-bold sm:text-[58px] text-[24px] mb-4">
        Development Journey
      </div>
      <PencilAnimation />
      <div className="flex flex-col items-center justify-center gap-4 md:hidden ">
        <Image src={pencil} alt="pencil" />
        <div className="flex flex-col items-center justify-center gap-4">
          {development.map((item) => (
            <div key={item.id} className="bg-[#FAFAFA] p-4 rounded-lg  ">
              <h1 className="text-[20px] font-bold">{item.heading}</h1>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div className="bg-white  py-8 sm:container w-[93%] mx-auto overflow-hidden">
    //   <div className="sm:text-4xl text-[24px] font-bold mb-6 sm:text-start text-center"> Development Journey</div>
    //   <div className="flex flex-col sm:gap-20 gap-10 sm:my-20 my-10">
    //     <Image alt="smallPencil" src={smallPencil} className="mx-auto sm:hidden block"/>
    //     <div className="flex sm:justify-between sm:flex-row flex-col gap-4">
    //       <div
    //           className="bg-[#FAFAFA] rounded-[10px] sm:w-[32%] w-full flex flex-col gap-3 py-6 px-5 border border-[#EEEEEE] "
    //         >
    //           <div className="font-bold text-[24px]">Discovery</div>
    //           <div>We begin by understanding your app's purpose and audience, then create the project roadmap and architectural framework.</div>
    //         </div>
    //         <div
    //           className="bg-[#FAFAFA] rounded-[10px] sm:w-[32%] w-full flex flex-col gap-3 py-6 px-5 border border-[#EEEEEE]"
    //         >
    //           <div className="font-bold text-[24px]">Development and Testing</div>
    //           <div>We write code while testing and debugging to ensure the app functions smoothly and is free of issues</div>
    //         </div>
    //         <div
    //           className="bg-[#FAFAFA] rounded-[10px] sm:w-[32%] w-full flex flex-col gap-3 py-6 px-5 border border-[#EEEEEE]"
    //         >
    //           <div className="font-bold text-[24px]">Maintenance and Enhancments</div>
    //           <div>We continuously maintain the app, address issues, and
    //           implement updates to improve features and performance to meet evolving user needs </div>
    //         </div>

    //     </div>
    //     {/* <div className="sm:flex  relative  hidden">
    //       <Image alt="pencil image" src={pencil1} className="-mr-11"/>
    //       <Image alt="pencil image" src={pencil2} className="-mr-6"/>
    //       <Image alt="pencil image" src={pencil3} className="-mr-12"/>
    //       <Image alt="pencil image" src={pencil4} className="-mr-11"/>
    //       <Image alt="pencil image" src={pencil5} className="-mr-10"/>
    //     </div> */}
    //     <div className="sm:flex  relative  hidden">
    //       <Image alt="pencil image" src={pencil1} className="sm:w-auto sm:h-auto w-[250px] h-[120px] object-fill  sm:-mr-11  -mr-11"/>
    //       <Image alt="pencil image" src={pencil2} className="sm:w-auto sm:h-auto w-[250px] h-[120px] object-fill  sm:-mr-6  -mr-[34px]"/>
    //       <Image alt="pencil image" src={pencil3} className="sm:w-auto sm:h-auto w-[250px] h-[120px] object-fill  sm:-mr-12  -mr-12"/>
    //       <Image alt="pencil image" src={pencil4} className="sm:w-auto sm:h-auto w-[250px] h-[120px] object-fill  sm:-mr-11  -mr-[73px]"/>
    //       <Image alt="pencil image" src={pencil5} className="sm:w-auto sm:h-auto w-[250px] h-[120px] object-fill  sm:-mr-10  -mr-10"/>
    //     </div>

    //     <div className="flex justify-center gap-7 sm:flex-row flex-col">
    //       <div
    //           className="bg-[#FAFAFA] rounded-[10px] sm:w-[32%] w-full flex flex-col gap-3 py-6 px-5 border border-[#EEEEEE] "
    //         >
    //           <div className="font-bold text-[24px]">Development and Testing</div>
    //           <div>We craft the visual and interactive design, ensuring an
    //           appealing and user-friendly experience </div>
    //         </div>
    //         <div
    //           className="bg-[#FAFAFA] rounded-[10px] sm:w-[32%] w-full flex flex-col gap-3 py-6 px-5 border border-[#EEEEEE]"
    //         >
    //           <div className="font-bold text-[24px]">Deployment and Launch</div>
    //           <div>We make the app accessible to users and excute a successfull launch strategy</div>
    //         </div>

    //     </div>
    //   </div>
    // </div>
  );
};

export default Journey;
