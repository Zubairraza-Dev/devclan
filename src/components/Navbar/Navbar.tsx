const Navbar = () => {
  return (
    <nav className="bg-white text-[#1B232E] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/icons/navLogo.svg" alt="logo" />
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-blue-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Technologies
            </a>
          </li>
          <li>
            <a href="/case-studies" className="hover:text-blue-400">
              Case Studies
            </a>
          </li>
          <li>
            <a href="/team" className="hover:text-blue-400">
              Team
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
