// app/case-studies/[id]/page.tsx

"use client"; // Enforce this as a Client Component

import { useRouter } from "next/navigation";
interface CaseStudyDetailProps {
  params: any;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ params }) => {
  const router = useRouter();
  const { id } = params; // Get the case study ID from params

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
