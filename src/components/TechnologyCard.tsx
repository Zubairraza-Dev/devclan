"use client";
import Image from "next/image";

interface TechnologyCardProp {
    title: string;
    description: string;
    image?: any;
    background?: any;
    scrollDirection : any;
    cornerCard? : string;
    cornerBoxImage? : string;
}

const TechnologyCard: React.FC<TechnologyCardProp> = ({
    title,
    description,
    image,
    background,
    scrollDirection,
    cornerCard,
    cornerBoxImage
}) => {
    return(
                 <div className={`
                    ${(title === "smallBlue" || title === "smallDark")
                         ? ` sm:h-[293px] h-[70px] ${
                            description === "lower" 
                                ? (scrollDirection === "down" 
                                    ? 'sm:translate-y-[340px] translate-y-[70px]' 
                                    : 'sm:-translate-y-[9px] translate-y-[2px] ') 
                                : scrollDirection === "down" ? 
                                    "sm:-translate-y-[274px] -translate-y-[76px]"
                                    : 'sm:translate-y-[9px] translate-y-[8px]'}` 
                        :
                            ` sm:h-[365px] h-[100px] ${
                                description === "lower" 
                                    ? (scrollDirection === "down" 
                                        ? 'sm:translate-y-[410px] translate-y-[100px]' 
                                        : 'sm:-translate-y-[9px] -translate-y-[0px]') 
                                    : scrollDirection === "down" ? 
                                        "sm:-translate-y-[345px] -translate-y-[106px]"
                                        : 'sm:translate-y-[9px] translate-y-[6px]'}`}
                                            ${background === "dark" ?
                                            "bg-[#0755E9]" 
                                            : "bg-[#1B232E]"}
                            sm:w-[261px] w-[83px] justify-center transition-transform duration-[1200ms] ease-in-out rounded-[10px] sm:rounded-[30px] flex items-center box-border
                            
                  `}>
                        <Image src={image} alt="react icon" className={`sm:h-auto sm:w-auto 
                            ${(cornerBoxImage === "ps" || cornerBoxImage === "xd")?" w-[26px]   h-[23px] ":"w-[50%]  h-[60%] "}`} />
                </div>
    )
}

export default TechnologyCard