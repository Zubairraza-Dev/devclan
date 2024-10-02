import Image from "next/image";

interface CaseStudyCardProps {
  title: string;
  description: string;
  image?: any;
  background?: any;
  height?: any;
  width?: any;
  className?: any;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  height,
  width,
  image,
  background,
  className,
}) => {
  return (
    // <div
    //   className={`relative flex flex-col justify-center border ${
    //     height ? "h-[330px]" : "h-[305px]"
    //   } ${width ? "w-[600px]" : "w-[445px]"} ${
    //     background ? `${background}` : "bg-blue-800"
    //   } rounded-lg p-4 hover:shadow-lg overflow-hidden transition-all duration-300 group`}
    // >
    <div
      className={`relative flex flex-col justify-center border   rounded-lg h-[185px] sm:h-[330px] w-[293px] sm:w-[536px] hover:shadow-lg overflow-hidden transition-all duration-300 group`}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt="Project Image"
        className="object-cover "
        // layout="fill"
        // objectFit="cover"
        // className="rounded-lg"
      />
      {/* </div> */}

      {/* Black Overlay on Hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out rounded-lg"></div>

      {/* Title */}
      <h2 className="sm:text-xl font-semibold text-white z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0 absolute sm:pt-[220px] pt-[115px] text-[13px] pl-[25px] sm:pl-[40px]">
        {title}
      </h2>

      {/* Sliding Description (Initially hidden, slides up on hover) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 z-10">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
