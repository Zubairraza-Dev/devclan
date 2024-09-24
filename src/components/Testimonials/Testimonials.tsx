import { testimonialsData } from "@/data/testimonials";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">What Our Clients Say About Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-300 p-4 rounded-lg w-[310px] h-full"
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
