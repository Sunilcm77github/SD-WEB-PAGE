import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <header className="bg-white border-b-2 body-font">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          {/* Logo and Shopify Links */}
          <div className="flex items-center mb-4 md:mb-0">
            <a href="/" className="text-xl font-semibold text-purple-600">
              ShopDigest
            </a>
            <span className="border-l-2 border-gray-300 h-5 mx-3"></span>
            <a href="/" className="text-gray-900 flex hover:text-purple-600">
              Shopify
              <span className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#5f6368"
                >
                  <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center text-base font-semibold justify-center gap-x-8 w-full md:w-auto">
            <a href="/" className="hover:text-purple-600">
              Features
            </a>
            <a href="/" className="hover:text-purple-600">
              Marketplace
            </a>
            <button className="hover:text-purple-600 flex items-center">
              Company
              <span className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#5f6368"
                >
                  <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
                </svg>
              </span>
            </button>
            <a href="/" className="hover:text-purple-600">
              Team
            </a>
            <a href="/" className="hover:text-purple-600">
              Contact
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex mt-4 md:mt-0">
            <button className="border border-purple-600 text-purple-600 hover:text-white py-1 px-4 rounded-md mr-2 hover:bg-purple-700">
              Login
            </button>
            <button className="border border-purple-600 text-purple-600 hover:text-white py-1 px-3 rounded-md flex items-center hover:bg-purple-700">
              Add post
              <span className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="currentColor"
                >
                  <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
