"use client";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServicesCard";
import Link from "next/link";
import { useEffect, useState } from "react";

const Services = () => {
  const [sortedServices, setSortedServices] = useState(services);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        // Reorder services for mobile (smaller screens)
        const mobileOrder = [
          services.find((e) => e.title === "Design"),
          services.find((e) => e.title === "AI"),
          services.find((e) => e.title === "Mobile Development"),
          services.find((e) => e.title === "Web Development"),
        ].filter(Boolean); // Remove any undefined values
        setSortedServices(mobileOrder as typeof services); // Explicitly cast to correct type
      } else {
        // Default order for larger screens
        setSortedServices(services);
      }
    };

    // Initial check on load
    handleResize();

    // Add event listener for screen resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [services]); // Added `services` as a dependency

  return (
    <div id="services" className="bg-white text-white py-8">
      <div className="container mx-auto">
        <div className="text-[#1F1F1F]  font-bold sm:text-[58px] text-[24px] sm:text-start text-center ">
          Our services
        </div>
        <div className="sm:w-full flex flex-wrap sm:justify-center sm:gap-10 w-[93%] mx-auto justify-center">
          {sortedServices.map((e, index) => (
            <Link key={e.id} href={`/services/${e.id}`}>
              <ServiceCard
                title={e.title}
                description={e.description}
                image={e.image}
                background={e.background}
                textColor={e.textColor}
                icons={e.icons}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
