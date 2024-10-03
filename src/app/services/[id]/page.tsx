import ServiceDetailCard from "@/components/ServiceDetailCard";
import { services } from "@/data/services";
import { servicesDetail } from "@/data/serviceDetails"

interface ServiceDetailProps {
  params: {
    id: string;
  };
}

const ServiceDetail = ({ params }: ServiceDetailProps) => {
  const serviceId = parseInt(params.id, 10); // Convert id to a number
  const service = services.find((service) => service.id === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  const serviceDetails = servicesDetail.find((detail) => detail.id === serviceId);

  if (!serviceDetails) {
    return <div>Service details not found</div>;
  }

  return (
    <div className="w-[93%] sm:container mx-auto py-8">
       
            <ServiceDetailCard 
            title={serviceDetails.title}
            description={serviceDetails.description}
            image={serviceDetails.image}
            detailPoints={serviceDetails.deatilPoint} 
            serviceTitle = {serviceDetails.serviceTitle}
            detailServices = {serviceDetails.detailServices}
            icons={serviceDetails.icons}
            developmentPhase = {serviceDetails.developmentPhases}
            portfolio = {serviceDetails.portfolio}
            />
    </div>
  );
};

export default ServiceDetail;
