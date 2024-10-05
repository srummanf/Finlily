import React from "react";
import Image from "next/image";
import Logo from "../public/images/logo.png";

const Fact = () => {
  return (
    <div className="font-sans max-w-full mx-auto p-5 bg-white text-black text-center">
      {/* Logo Section */}
      <div className="flex items-center justify-center mb-5">
        <Image src={Logo} alt="Finlily Logo" width={40} height={40} />
        <span className="text-2xl font-bold ml-2">FINLILY.</span>
      </div>

      {/* Title Section */}
      <h1 className="text-2xl mb-2">Don't Just Invest</h1>
      <h2 className="text-4xl text-green-500 font-bold mb-5">Dominate!</h2>

      {/* Performance Details */}
      <p className="text-lg mb-1">Our SEBI RA Past Performance Speaks</p>
      <p className="text-sm mb-5">
        Debankur Das (SEBI Regd. No - INH000011857)
      </p>

      {/* Card Container - Stock Returns */}
      <div className="flex flex-col gap-5 mb-5 justify-center lg:flex-row">
        <div>
          <div className="bg-black text-white p-5 rounded-lg">
            <h3 className="text-lg mb-2">LONG TERM STOCK RETURNS</h3>
            <p className="text-4xl font-bold">
              661%<span className="text-green-500">*</span>
            </p>
            <p className="text-sm">Duration 250 - 270 Days</p>
          </div>
          <div className="flex flex-col items-center mt-5">
            <p className="text-sm">EFFICIENCY OF STOCK CALLS</p>
            <p className="text-lg font-bold text-green-500 bg-green-100 px-4 py-1 rounded-full">
              (88.88%)
            </p>
          </div>
        </div>
        <div>
          <div className="bg-black text-white p-5 rounded-lg">
            <h3 className="text-lg mb-2">LONG TERM STOCK RETURNS</h3>
            <p className="text-4xl font-bold">
              661%<span className="text-green-500">*</span>
            </p>
            <p className="text-sm">Duration 250 - 270 Days</p>
          </div>
          <div className="flex flex-col items-center mt-5">
            <p className="text-sm">EFFICIENCY OF STOCK CALLS</p>
            <p className="text-lg font-bold text-green-500 bg-green-100 px-4 py-1 rounded-full">
              (88.88%)
            </p>
          </div>
        </div>
      </div>

      {/* Efficiency Section - Positioned Below Cards */}
      {/* <div className="flex flex-col gap-5 mb-5">
        <div className="flex flex-col items-center">
          <p className="text-sm">EFFICIENCY OF STOCK CALLS</p>
          <p className="text-lg font-bold text-green-500 bg-green-100 px-4 py-1 rounded-full">
            (88.88%)
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">EFFICIENCY OF STOCK CALLS</p>
          <p className="text-lg font-bold text-green-500 bg-green-100 px-4 py-1 rounded-full">
            (86.66%)
          </p>
        </div>
      </div> */}

      {/* Google Play Button */}
      {/* <div className="mb-5">
        <Image
          src="/placeholder.svg?height=40&width=135"
          alt="Get it on Google Play"
          width={135}
          height={40}
        />
      </div> */}
      <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        <a
          href="#"
          class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            class="me-3 w-7 h-7"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="apple"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            ></path>
          </svg>
          <div class="text-left rtl:text-right">
            <div class="mb-1 text-xs">Download on the</div>
            <div class="-mt-1 font-sans text-sm font-semibold">
              Mac App Store
            </div>
          </div>
        </a>
        <a
          href="#"
          class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            class="me-3 w-7 h-7"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google-play"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
            ></path>
          </svg>
          <div class="text-left rtl:text-right">
            <div class="mb-1 text-xs">Get in on</div>
            <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
          </div>
        </a>
      </div>

      {/* Notes Section */}
      <p className="text-xs text-gray-500 mt-5">
        Note - Past Performance is not indicative of future results. Investments
        are subject to market risk.
      </p>
      <p className="text-xs text-gray-500">
        Cumulative returns from August 2023
      </p>
    </div>
  );
};

export default Fact;
