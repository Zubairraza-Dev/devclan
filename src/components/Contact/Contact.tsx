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
    <div className=" mx-auto py-8 px-6 border border-[#0755E9]  h-[570px] w-[77%] rounded-2xl text-white bg-white -mt-[300px] absolute left-0 right-0 items-center md:block hidden">
      <div className="flex justify-between gap-3">
        <div className="w-[34%] h-[508px] rounded-[20px] bg-[#EEEEEE] text-black ">
          <div className="w-[87%] mx-auto flex flex-col gap-3 mt-5">
            <h1 className="text-[32px] font-bold  leading-[37px]">
              Discover What's Possible. Let's Talk
            </h1>
            <p className="mb-3">
              Reach out to us with any questions, inquiries, or feedback. Our
              team is here to assist you on your journey towards selfdiscovery,
              personal growth, and achieving your full potential. We look
              forward to hearing from you!
            </p>
            <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-x-2">
                <div className="w-[40px] h-[40px] bg-[#0755E9] rounded-full flex justify-center items-center">
                  <Image alt="phone" src={phone} />
                </div>
                <p>bill.sadnras@mail.com</p>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="w-[40px] h-[40px] bg-[#0755E9] rounded-full flex justify-center items-center">
                  <Image alt="phone" src={email} />
                </div>
                <p>+92 312 123456</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" h-[508px] w-[63%] flex flex-col justify-between"
        >
          <h1 className="text-black text-[32px]">Get In Touch</h1>
          <div className="flex items-center gap-x-4 mt-2 w-full justify-between">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border rounded-[10px] placeholder:text-[#D1D1D1] h-[60px] p-1 w-[48%] border-[#D1D1D1] text-black"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="phone"
              name="phone"
              placeholder="Phone"
              className="border rounded-[10px] placeholder:text-[#D1D1D1] h-[60px] p-1 w-[48%] border-[#D1D1D1] text-black"
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
          <div className="flex justify-end">
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
