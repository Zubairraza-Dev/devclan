const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <img src="/icons/footerLogo.svg" alt="" />
      </div>
      <div className="text-center">
        <p>
          &copy; {new Date().getFullYear()} DevClan Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
