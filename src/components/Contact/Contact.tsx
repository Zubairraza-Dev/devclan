const Contact = () => {
  return (
    <div className="container mx-auto py-8 px-6 bg-custom-gradient h-full w-full rounded-2xl text-white mb-8">
      <div className="flex justify-between gap-3">
        <div>
          <h1 className="text-4xl font-bold">
            Discover What's Possible. Let's Talk
          </h1>
          <p className="mb-3">
            Reach out to us with any questions, inquiries, or feedback. Our team
            is here to assist you on your journey towards selfdiscovery,
            personal growth, and achieving your full potential. We look forward
            to hearing from you!
          </p>
          <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
          <div className="flex items-center gap-x-14">
            <div className="flex items-center gap-x-2">
              <img src="/icons/emailIcon.svg" alt="email" />
              <p>bill.sadnras@mail.com</p>
            </div>
            <div className="flex items-center gap-x-2">
              <img src="/icons/phoneIcon.svg" alt="email" />
              <p>+92 312 123456</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg p-8">
            <h1 className="text-black text-xl">We'd Love to hear from you!</h1>
            <h1 className="text-black text-xl">Let's get in touch</h1>
            <div className="flex items-center gap-x-4 mt-2">
              <input
                type="text"
                placeholder="Name"
                className="border rounded-lg h-9 p-1"
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg h-9 p-1"
              />
            </div>
            <div className="flex items-center gap-x-4 my-4">
              <input
                type="text"
                placeholder="Phone"
                className="border rounded-lg h-9 p-1"
              />
              <input
                type="text"
                placeholder="Project"
                className="border rounded-lg h-9 p-1"
              />
            </div>
            <button className="w-full text-white bg-blue-900 rounded-lg h-8">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
