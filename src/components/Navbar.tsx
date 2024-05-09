import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-white text-xl font-bold">
                Kyaraben
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-12 flex items-center md:ml-6 font-semibold font-sans">
                <a href="#" className="text-white hover:text-gray-300">
                  Components
                </a>
                <a href="#" className="ml-12 text-white hover:text-gray-300">
                  Theme
                </a>
                <a href="#" className="ml-12 text-white hover:text-gray-300">
                  Templates
                </a>
                <a href="#" className="ml-12 text-white hover:text-gray-300">
                  About Us
                </a>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-white hover:text-gray-300">
              Components
            </a>
            <a href="#" className="block text-white hover:text-gray-300">
              Theme
            </a>
            <a href="#" className="block text-white hover:text-gray-300">
              Templates
            </a>
            <a href="#" className="block text-white hover:text-gray-300">
              About Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
