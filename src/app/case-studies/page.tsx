import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import Image from "next/image";
import caseAnimation from "../../assets/icons/caseAnimatedIcon.svg";
import CaseStudyCardLg from "@/components/CaseStudyCard/CaseStudyCardLg";

const CaseStudiesPage = () => {
  return (
    <div>
      {/* hero section */}
      <div className="sm:container w-[93%] mx-auto py-8 bg-custom-gradient sm:h-[816px] h-[235px] rounded-lg text-white overflow-hidden relative">
        <Image
          alt="animation image"
          src={caseAnimation}
          className={`absolute ml-[192px] sm:ml-[380px] -mt-[85px] sm:-mt-[70px] animate-rotate sm:w-auto sm:h-auto w-[419px] h-[418px]`}
        />
        <div className="text-white flex flex-col justify-center sm:gap-10 gap-4 h-full relative w-[91%] mx-auto">
          <div className="sm:text-[32px] text-[16px] -space-x-[5px]">
            Case <span className="text-[#0755E9]">Studies</span>
          </div>

          <div className=" text-[24px] sm:text-[70px] leading-[30px] sm:leading-[90px] -space-x-[5px]">
            Latest Challenges <br />
            Need latest solutions being creative
          </div>

          <div className="w-[130px] sm:h-[60px] h-[44px] sm:rounded-[10px] rounded-[8px] bg-[#0755E9] flex justify-center text-white font-bold sm:text-[18px] text-[16px] items-center sm:mt-6 mt-2 ">
            Get in Touch
          </div>
        </div>
      </div>

      {/* explore section */}
      <div className="sm:container w-[93%] mx-auto py-8 bg-white">
        <h1 className="text-3xl font-bold mb-6">Explore Our Work</h1>
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-x-2 gap-y-4">
          {caseStudies.map((caseStudy) => (
            <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`}>
              {/* No need to wrap with <a> */}
              <CaseStudyCardLg
                title={caseStudy.title}
                description={caseStudy.shortDescription}
                image={caseStudy.cardImg}
                background={caseStudy.background}
                // height="490px"
                // width="780px"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
