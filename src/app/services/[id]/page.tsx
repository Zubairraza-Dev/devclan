import { services } from "@/data/services";

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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold">{service.title}</h1>
      <p>{service.description}</p>
      <img src={service.image} alt={service.title} />
      <p>dummy data hello world</p>
    </div>
  );
};

export default ServiceDetail;
