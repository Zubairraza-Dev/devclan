interface CaseStudyCardProps {
  title: string;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default CaseStudyCard;
