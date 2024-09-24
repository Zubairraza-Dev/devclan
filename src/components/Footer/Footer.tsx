const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-8">
      <div className="container mx-auto">
        <img
          src="/icons/footerLogo.svg"
          alt="Logo"
          className="block w-[70px] h-[68px] mb-3 lg:hidden"
        />
        <div className="flex justify-between flex-wrap gap-2">
          <img
            src="/icons/footerLogo.svg"
            alt="Logo"
            className="hidden lg:block"
          />

          <div className="flex flex-col items-start gap-1">
            <h1 className="text-xl font-bold">Company</h1>
            <p>About</p>
            <p>How it Works</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-xl font-bold">Help</h1>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Cokkies</p>
            <p>Disclaimer</p>
            <p>Terms & Conditions</p>
          </div>

          <div className="flex flex-col items-start gap-1">
            <h1 className="text-xl font-bold">Follow Us</h1>
            <div className="flex items-center flex-wrap gap-x-1">
              <img src="/icons/linkedinIcon.svg" alt="linkedin" />
              <img src="/icons/facebookIcon.svg" alt="facebook" />
              <img src="/icons/twitterIcon.svg" alt="twitter" />
              <img src="/icons/beIcon.svg" alt="be" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-1">
            <h1 className="text-xl font-bold">Newsletter</h1>
            <p>Please enter your email to get latest updates</p>
            <div className="bg-transparent flex items-center justify-between border w-[300px] h-[40px] rounded-lg">
              <input
                type="email"
                placeholder="Your email"
                className="h-full bg-transparent rounded-lg mx-1 outline-none"
              />
              <button className="bg-blue-950 w-full h-full rounded-lg ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <p>
          &copy; {new Date().getFullYear()} DevClan Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
