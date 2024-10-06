import React from "react";
import Image from "next/image";
import Logo from "../public/images/logo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white shadow border-t border-gray-300">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo Section */}
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            {/* Use next/image for optimized image loading */}
            <Image
              src={Logo}
              alt="Finlily Logo"
              height="100"
              width="150"
              className="object-contain"
            />
            {/* <span className="self-center text-2xl font-semibold text-black whitespace-nowrap">
              Finlily
            </span> */}
          </a>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a
                href="https://finlilytechnology.com/about-me/"
                className="hover:text-blue-500 me-4 md:me-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://finlilytechnology.com/privacy-policy-2/"
                className="hover:text-blue-500 me-4 md:me-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://finlilytechnology.com/terms-conditions/"
                className="hover:text-blue-500 me-4 md:me-6"
              >
                Terms and Condition
              </a>
            </li>
            <li>
              <a
                href="https://finlilytechnology.com/contact/"
                className="hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Divider Line */}
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        {/* Footer Text */}
        <span className="block text-sm text-gray-500 sm:text-center">
          © {currentYear}{" "}
          <a
            href="https://finlilytechnology.com/"
            className="hover:text-blue-500"
          >
            Finlily
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
