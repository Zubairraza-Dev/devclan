"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import phone from "../../assets/icons/phoneIcon.svg";
import email from "../../assets/icons/EnvelopeSimple.svg";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        serviceId || "",
        templateId || "",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          project: formData.project,
          details: formData.details,
        },
        publicKey || ""
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.log("Error sending email:", error.text);
        }
      );
  };

  return (
    <div
      id="contact-us"
      className=" mx-auto py-8 px-6 border border-[#0755E9]  h-auto sm:h-[570px] w-[93%] sm:w-[77%] rounded-2xl text-white bg-white sm:-mt-[300px] -mt-[280px] absolute left-0 right-0 items-center md:block "
    >
      <div className="flex justify-between gap-3 flex-wrap ">
        <div className="w-full sm:w-[34%] h-auto  sm:h-[508px] rounded-[20px] bg-[#EEEEEE] text-black hidden lg:block ">
          <div className="w-[65%] sm:w-[87%] mx-auto flex flex-col gap-3 mt-5 sm:py-0 pb-6">
            <h1 className="text-[24px] sm:text-[32px] font-bold leading-[30px]  sm:leading-[37px] sm:text-start  text-center">
              Discover What's Possible. Let's Talk
            </h1>
            <p className="mb-3 tracking-tighter leading-[22px] sm:text-start text-center">
              Reach out to us with any questions, inquiries, or feedback. Our
              team is here to assist you . We look forward to hearing from you!
            </p>
            <h3 className="text-md sm:text-2xl text-center sm:text-center font-bold mb-2">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-x-2 sm:flex-row flex-col">
                <div className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] bg-[#0755E9] rounded-full flex justify-center items-center">
                  <Image alt="phone" src={phone} />
                </div>
                <p>bill.sadnras@mail.com</p>
              </div>
              <div className="flex items-center gap-x-2 sm:flex-row flex-col">
                <div className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px]  bg-[#0755E9] rounded-full flex justify-center items-center">
                  <Image alt="phone" src={email} />
                </div>
                <p>+92 312 123456</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" h-[508px] w-full sm:w-[63%] flex flex-col justify-between sm:gap-0 gap-2"
        >
          <h1 className="text-black text-[24px] sm:text-[32px]">
            Get In Touch
          </h1>
          <div className="flex items-center gap-x-4 mt-2 w-full justify-between sm:flex-row flex-col sm:gap-0 gap-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border rounded-[10px] placeholder:text-[#D1D1D1] h-[60px] p-1 w-full sm:w-[48%] border-[#D1D1D1] text-black"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="phone"
              name="phone"
              placeholder="Phone"
              className="border rounded-[10px] placeholder:text-[#D1D1D1] h-[60px] p-1 w-full sm:w-[48%] border-[#D1D1D1] text-black"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border rounded-[10px] placeholder:text-[#D1D1D1] h-[60px] p-1 w-full border-[#D1D1D1] text-black"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="project"
            placeholder="Project"
            className="border rounded-[10px] placeholder:text-[#D1D1D1] h-[60px] p-1 w-full border-[#D1D1D1] text-black"
            value={formData.project}
            onChange={handleChange}
          />
          <input
            type="text"
            name="details"
            placeholder="Project Details"
            className="border rounded-[10px]  placeholder:text-[#D1D1D1] h-[105px] p-1 w-full border-[#D1D1D1] text-black"
            value={formData.details}
            onChange={handleChange}
          />

          <div className="flex gap-3">
            <input
              type="checkbox"
              className="accent-[#0755E9] bg-opacity-10 border border-[#0755E9] h-[24px] w-[24px]"
            />
            <div className="text-black ">
              I understand And agree to the terms & Conditions
            </div>
          </div>
          <div className="flex  justify-center sm:mt-1 mt-3 sm:justify-end">
            <button
              type="submit"
              className="w-[141px] sm:h-[50px] h-[44px] sm:rounded-[10px] rounded-[8px] bg-[#0755E9] flex justify-center text-white font-bold  text-[16px] items-center"
            >
              Get in Touch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
