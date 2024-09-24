"use client";

import { useRouter } from "next/navigation";
interface CaseStudyDetailProps {
  params: any;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  return (
    <div>
      <h1>Case Study {id}</h1>
      <button onClick={() => router.push("/case-studies")}>
        Back to Case Studies
      </button>
    </div>
  );
};

export default CaseStudyDetail;
