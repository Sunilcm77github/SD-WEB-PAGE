import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <header className="bg-gray-500 body-font">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
             <img
              src="/sd.webp"
              alt="SD Products"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-3 text-xl">SD Products</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 text-white hover:text-yellow-500">
              Home
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
