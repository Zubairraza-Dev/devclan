import {services} from "@/data/services"
import ServiceCard from "@/components/ServicesCard";

const Services = () => {
  return (
    <div className="bg-white text-white py-8">
      <div className="container mx-auto">
        <div className="text-[#1F1F1F]  font-bold sm:text-[58px] text-[24px] sm:text-start text-center ">Our services</div>
        <div className="sm:w-full flex flex-wrap justify-between w-[93%] mx-auto">
          {
            services.map( (e) => (
                <ServiceCard
                title={e.title}
                description={e.description}
                image={e.image}
                background={e.background}
                textColor={e.textColor}
                icons={e.icons}
                />
            ))
          }
          </div>
      </div>
    </div>
  );
};

export default Services;
