"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/images/logo.png";

const Banner = () => {
  const [visible, setVisible] = useState(true);

  return (
    <section className="relative">
      {/* Banner Component */}
      {visible && (
        <div className="fixed left-1/2 bottom-8 mx-auto flex w-[90%] max-w-5xl -translate-x-1/2 flex-col items-center rounded-lg border-2 border-black bg-white p-4 sm:justify-between sm:px-8 md:flex-row md:py-3 lg:w-full z-50">
          {/* Banner Text */}
          <div className="flex items-center">
            <Image
              src={Logo}
              alt=""
              className="mr-4 inline-block h-8 w-8 rounded-full object-cover"
            />
            <p className="text-black">
              Earn With Every Call. Unlock the Secrets of Successful Financial
              Planning
            </p>
          </div>

          {/* Get Started Button */}
          <div className="mt-4 flex relative flex-row items-center justify-center gap-10 md:mt-0">
            <a
              href="#"
              className="inline-block rounded-lg bg-black px-5 py-2 font-semibold text-white"
            >
              Get Started
            </a>
            <div className="h-full w-[1px] bg-gray-300 absolute top-0 right-10"></div>
            <svg
              onClick={() => setVisible(false)}
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3799_19183)">
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_3799_19183">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
