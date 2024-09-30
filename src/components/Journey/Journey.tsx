import Image from "next/image"
import pencil1 from "../../assets/images/pencil1.svg"
import pencil2 from "../../assets/images/pencil2.svg"
import pencil3 from "../../assets/images/pencil3.svg"
import pencil4 from "../../assets/images/pencil4.svg"
import pencil5 from "../../assets/images/pencil5.svg"
import smallPencil from "../../assets/images/mobilePencil.svg"

const Journey = () => {
  return (
    <div className="bg-white  py-8 sm:container w-[93%] mx-auto overflow-hidden">
      <div className="sm:text-4xl text-[24px] font-bold mb-6 sm:text-start text-center"> Development Journey</div>
      <div className="flex flex-col sm:gap-20 gap-10 sm:my-20 my-10">
        <Image alt="smallPencil" src={smallPencil} className="mx-auto sm:hidden block"/>
        <div className="flex sm:justify-between sm:flex-row flex-col gap-4">
          <div
              className="bg-[#FAFAFA] rounded-[10px] sm:w-[32%] w-full flex flex-col gap-3 py-6 px-5 border border-[#EEEEEE] "
            >
              <div className="font-bold text-[24px]">Discovery</div>
              <div>We begin by understanding your app's purpose and audience, then create the project roadmap and architectural framework.</div>
            </div>
            <div
              className="bg-[#FAFAFA] rounded-[10px] sm:w-[32%] w-full flex flex-col gap-3 py-6 px-5 border border-[#EEEEEE]"
            >
              <div className="font-bold text-[24px]">Development and Testing</div>
              <div>We write code while testing and debugging to ensure the app functions smoothly and is free of issues</div>
            </div>
            <div
              className="bg-[#FAFAFA] rounded-[10px] sm:w-[32%] w-full flex flex-col gap-3 py-6 px-5 border border-[#EEEEEE]"
            >
              <div className="font-bold text-[24px]">Maintenance and Enhancments</div>
              <div>We continuously maintain the app, address issues, and
              implement updates to improve features and performance to meet evolving user needs </div>
            </div>
            
        </div>
        {/* <div className="sm:flex  relative  hidden">
          <Image alt="pencil image" src={pencil1} className="-mr-11"/>
          <Image alt="pencil image" src={pencil2} className="-mr-6"/>
          <Image alt="pencil image" src={pencil3} className="-mr-12"/>
          <Image alt="pencil image" src={pencil4} className="-mr-11"/>
          <Image alt="pencil image" src={pencil5} className="-mr-10"/>
        </div> */}
        <div className="sm:flex  relative  hidden">
          <Image alt="pencil image" src={pencil1} className="sm:w-auto sm:h-auto w-[250px] h-[120px] object-fill  sm:-mr-11  -mr-11"/>
          <Image alt="pencil image" src={pencil2} className="sm:w-auto sm:h-auto w-[250px] h-[120px] object-fill  sm:-mr-6  -mr-[34px]"/>
          <Image alt="pencil image" src={pencil3} className="sm:w-auto sm:h-auto w-[250px] h-[120px] object-fill  sm:-mr-12  -mr-12"/>
          <Image alt="pencil image" src={pencil4} className="sm:w-auto sm:h-auto w-[250px] h-[120px] object-fill  sm:-mr-11  -mr-[73px]"/>
          <Image alt="pencil image" src={pencil5} className="sm:w-auto sm:h-auto w-[250px] h-[120px] object-fill  sm:-mr-10  -mr-10"/>
        </div>

        <div className="flex justify-center gap-7 sm:flex-row flex-col">
          <div
              className="bg-[#FAFAFA] rounded-[10px] sm:w-[32%] w-full flex flex-col gap-3 py-6 px-5 border border-[#EEEEEE] "
            >
              <div className="font-bold text-[24px]">Development and Testing</div>
              <div>We craft the visual and interactive design, ensuring an
              appealing and user-friendly experience </div>
            </div>
            <div
              className="bg-[#FAFAFA] rounded-[10px] sm:w-[32%] w-full flex flex-col gap-3 py-6 px-5 border border-[#EEEEEE]"
            >
              <div className="font-bold text-[24px]">Deployment and Launch</div>
              <div>We make the app accessible to users and excute a successfull launch strategy</div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Journey;
