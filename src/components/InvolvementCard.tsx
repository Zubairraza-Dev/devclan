import Image from "next/image";

interface InvolvementCardProps {
  title: string;
  icon: any; // Ensure type matches Next.js Image import
}

const InvolvementCard: React.FC<InvolvementCardProps> = ({ title, icon }) => {
  return (
    <div className="w-[48%] sm:w-[225px] h-[170px] sm:h-[230px] shadow-lg sm:shadow-[0_4px_15px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center rounded-xl p-4">
      <Image src={icon} alt={title} />
      <p className="mt-4 text-lg font-bold">{title}</p>
    </div>
  );
};

export default InvolvementCard;
