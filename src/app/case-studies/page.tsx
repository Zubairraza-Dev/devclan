import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

const CaseStudiesPage = () => {
  return (
    <>
      {/* hero section */}
      <div className="container mx-auto py-8 bg-custom-gradient h-[615px] w-full rounded-lg text-white">
        <div className="text-white">
          <h3>CaseStudies</h3>
          <h1>Latest Challenges</h1>
          <h1>Need latest solutions being creative</h1>
          <button className="bg-blue-900 rounded-xl p-2">Get In Touch</button>
        </div>
      </div>

      {/* explore section */}
      <div className="container mx-auto py-8 bg-white">
        <h1 className="text-3xl font-bold mb-6">Explore Our Work</h1>
        <div className="flex items-center flex-wrap gap-4">
          {caseStudies.map((caseStudy) => (
            <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`}>
              {/* No need to wrap with <a> */}
              <CaseStudyCard
                title={caseStudy.title}
                description={caseStudy.description}
                image={caseStudy.image}
                background={caseStudy.background}
                height="490px"
                width="780px"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;
