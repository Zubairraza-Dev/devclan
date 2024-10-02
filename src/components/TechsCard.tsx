import Image from "next/image";

interface TechsCardProps {
  icon: any;
}

const TechsCard: React.FC<TechsCardProps> = ({ icon }) => {
  return (
    <div className="w-[285px] h-[160px] shadow-[0_4px_15px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center rounded-xl p-4">
      <Image src={icon} alt="technology" />
    </div>
  );
};

export default TechsCard;
