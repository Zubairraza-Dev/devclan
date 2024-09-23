import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";

const caseStudies = [
  { id: 1, title: "Case Study 1", description: "Description for case study 1" },
  { id: 2, title: "Case Study 2", description: "Description for case study 2" },
  // Add more case studies as needed
];

const CaseStudiesPage = () => {
  return (
    <div className="container mx-auto py-8 bg-blue-900">
      <h1 className="text-3xl font-bold mb-6">Case Studies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy) => (
          <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`}>
            {/* No need to wrap with <a> */}
            <CaseStudyCard
              title={caseStudy.title}
              description={caseStudy.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
