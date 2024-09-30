import { testimonialsData } from "@/data/testimonials";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="sm:container w-[93%] mx-auto sm:py-8">
      <h1 className="sm:text-4xl text-[24px] font-bold mb-6 sm:text-start text-center">
        What Our Clients Say About Us{" "}
      </h1>
      {/* <div className="sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex flex-col items-center "> */}
      <div className="flex flex-wrap  justify-between gap-5 sm:my-20  my-10">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#FAFAFA] p-4 rounded-lg sm:w-[310px] w-full "
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} image`}
                  height={50}
                  width={50}
                />

                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.email}</p>
                </div>
              </div>
              {/* social media icon */}
              <img
                src={testimonial.socialMediaIcon}
                alt={`${testimonial.name}'s social media`}
                className="w-6 h-6"
              />
            </div>
            <p className="mt-4 text-gray-800">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
