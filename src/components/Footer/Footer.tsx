import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <div className="md:mt-80">
      <Contact />
      <footer className="bg-custom-gradient text-white py-8 sm:h-[754px] flex  justify-end items-end ">
        <div className="sm:container w-[93%]  mx-auto flex flex-col gap-14">
          <div className=" ">
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

              <div className="flex justify-between gap-12 sm:mt-0 mt-4">
                <div className="flex flex-col items-start  gap-3">
                  <h1 className="sm:text-2xl text-[18px] font-semibold sm:font-bold">
                    Company
                  </h1>
                  <div className="flex flex-col gap-2">
                    <p className="sm:text-md text-sm text-[#D1D1D1]">About</p>
                    <p className="sm:text-md text-sm text-[#D1D1D1]">Serivce </p>
                    <p className="sm:text-md text-sm text-[#D1D1D1]">Technology</p>
                    <p className="sm:text-md text-sm text-[#D1D1D1]">Case Studies</p>
                    <p className="sm:text-md text-sm text-[#D1D1D1]">Team</p>
                  </div>
                </div>
                {/* <div className="flex flex-col items-start gap-3 ">
                  <h1 className="sm:text-2xl text-[18px] font-semibold sm:font-bold">
                    Help
                  </h1>
                  <div className="flex flex-col gap-2">
                    <p className="sm:text-md text-sm text-[#D1D1D1]">FAQs</p>
                    <p className="sm:text-md text-sm text-[#D1D1D1]">
                      Privacy Policy
                    </p>
                    <p className="sm:text-md text-sm text-[#D1D1D1]">Cokkies</p>
                    <p className="sm:text-md text-sm text-[#D1D1D1]">
                      Disclaimer
                    </p>
                    <p className="sm:text-md text-sm text-[#D1D1D1]">
                      Terms & Conditions
                    </p>
                  </div>
                </div> */}

                <div className="flex flex-col items-start gap-3 ">
                  <h1 className="sm:text-xl text-[18px] font-semibold sm:font-bold">
                    Follow Us
                  </h1>
                  <div className="flex items-center flex-wrap gap-2">
                    <img src="/icons/linkedinIcon.svg" alt="linkedin" />
                    <img src="/icons/facebookIcon.svg" alt="facebook" />
                    <img src="/icons/twitterIcon.svg" alt="twitter" />
                    <img src="/icons/beIcon.svg" alt="be" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 sm:w-[30%] w-full sm:mt-0 mt-8 ">
                <h1 className="text-xl font-bold">Newsletter</h1>
                <p>Please enter your email to get latest updates</p>
                <div className="bg-transparent flex items-center justify-between border w-full h-[52px] rounded-lg">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="h-full bg-transparent rounded-lg mx-1 outline-none pl-3 w-full "
                  />
                  <button className="bg-[#0755E9] w-[108px]  h-full rounded-lg ">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p>
              &copy; {new Date().getFullYear()} DevClan Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
