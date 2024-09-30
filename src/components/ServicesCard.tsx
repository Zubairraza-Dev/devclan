"use client";
import Image from "next/image";

interface serviceCardProp {
    title: string;
    description: string;
    image?: any;
    background?: any;
    textColor : any;
    icons : any[];
}

const serviceCard: React.FC<serviceCardProp> = ({
    title,
    description,
    image,
    background,
    textColor,
    icons
}) => {
    return(
                <div className={` ${(title === "AI" || title === "Web Development") ? "bg-gradient-to-r from-[#0F2D48] to-[#0755E9]" : "bg-[#FAFAFA]"}
                 sm:w-[648px] gap-8 sm:mt-6 w-full  sm:h-[450px] h-[278px] rounded-[20px]  box-border  relative group mx-auto mt-4 overflow-hidden `}>
                    
                    <div className={`${(title === "AI" || title === "Web Development") ? "text-white" : "text-[#1B232E]"} text-[#1F1F1F]  font-bold sm:text-[40px] text-[24px]  sm:mt-[56px] mt-[12px] absolute sm:w-[80%] w-[92%] mx-auto left-0 right-0 `}>
                            {title}
                    </div>

                    <div className='sm:opacity-0  sm:group-hover:opacity-100 opacity-100 transition-opacity duration-700 absolute sm:mt-[120px] mt-[55px] sm:w-[80%] w-[92%] mx-auto left-0 right-0  flex flex-col sm:gap-3'>

                        <div className="flex flex-col sm:gap-4 gap-4">
                            <div className={`${(title === "AI" || title === "Web Development") ? "text-white" : "text-[#1B232E]"}  sm:text-[18px] text-sm sm:leading-[27px] leading-[21px] space-x-[-5px]  `}>
                            {description}
                            </div>

                            <div className="flex gap-6">
                            {
                                icons.map( (e) => (
                                    <Image
                                    alt="Icons"
                                    className="sm:w-auto sm:h-auto w-[20px] h-[20px]"
                                    src={e}/>
                                ))
                            }
                            </div>
                        
                            <div className='w-[130px] sm:h-[50px] h-[40px] rounded-[10px] bg-[#0755E9] flex justify-center text-white font-bold sm:text-[18px] text-[16px] items-center sm:mt-6 mt-2 '>
                                Contact us
                            </div>
                        </div>    
                    </div>
                    <div className='flex justify-end relative h-full items-end border-none overflow-hidden'>
                                <Image 
                                alt='design Image'
                                className={`group-hover:scale-50  transform transition-transform origin-bottom-right border-none duration-700 ease-in-out sm:block hidden ${title === "Mobile Development" && "w-[287px] h-[585px] -mb-[147px] group-hover:scale-75"}`}
                                src={image}
                                height={357}
                                width={465}
                                />
                                <Image 
                                alt='design Image'
                                className={`scale-50  transform transition-transform origin-bottom-right border-none duration-700 ease-in-out sm:hidden block ${title === "Mobile Development" && "w-[147px] h-[299px] -mb-[41px] scale-75 "}`}
                                src={image}
                                height={355}
                                width={275}
                                />
                            </div>
                </div>
    )
}

export default serviceCard