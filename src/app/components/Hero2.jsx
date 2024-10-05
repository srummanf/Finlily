"use client";
import { useRef, useState } from "react";

import Image from "next/image";
import React from "react";
import apple from "../public/images/hi-portrait.png";
import Benny from "../public/images/benny.jpeg";

const Hero2 = () => {
  return (
    <header>
      {/* Container */}
      <div className="bg-white mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 bg-gradient-to-br from-transparent to-[#A0E1F9]">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div>
            {/* Title */}
            <h1 className="mb-4 text-4xl text-black font-bold md:text-6xl">
              Discover <span className="text-teal-500">Finance</span> On Your Fingertips
            </h1>
            <p className="mb-6 max-w-lg text-sm text-black sm:text-xl lg:mb-8">
              Welcome to Your Gateway of Personal Finance.
            </p>
            {/* Testimonial */}
            <div className="mb-6 flex w-full max-w-xs items-center md:mb-10 lg:mb-12">
              <Image
                src={Benny}
                alt="fd"
                className="mr-2 inline-block h-7 w-7 rounded-full object-cover"
              />
              <p className="text-sm font-bold text-black">Benny</p>{" "}
              {/* Divider */}
              <div className="border-color:[#ffffff] ml-4 mr-4 h-full border border-r py-3"></div>
              <p className="mr-2 text-sm font-bold text-black">5.0</p>
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 w-3.5"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 w-3.5"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 w-3.5"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 w-3.5"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 w-3.5"
              />
            </div>
            {/* Button */}
            <div className="mb-6 flex items-stretch md:mb-10 lg:mb-12">
              <a
                href="#"
                className="mr-5 rounded-md bg-black px-8 py-4 text-center font-semibold text-white md:mr-6 lg:mr-8"
              >
                Get Started
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-solid border-black px-6 py-3 font-bold"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d411e6cf99_Vector%20(6).svg"
                  alt=""
                  className="mr-2 max-h-4 w-5"
                />
                <p className="text-sm text-black sm:text-base">Download App</p>
              </a>
            </div>
            <p className="text-sm sm:text-base">Available on</p> {/* App */}
            <div className="mt-2 flex items-start">
              <a href="#" className="mr-6 flex items-center md:mr-10 lg:mr-12">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944d39e6cf9a_Vector%20(7).svg"
                  alt=""
                  className="h-8 w-8"
                />
                <div className="ml-2.5 text-sm text-gray-500">
                  <p>Download on</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945d29e6cf9b_Vector%20(8).svg"
                  alt=""
                  className="h-8 w-8"
                />
                <div className="ml-2.5 text-sm text-gray-500">
                  <p>Get it on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </a>
              s
            </div>
          </div>
          {/* Hero Image */}
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
            alt=""
            className="inline-block h-full w-full max-w-2xl"
          /> */}
          <Image src={apple} width="300" height="300" />
        </div>
      </div>
    </header>
  );
};

export default Hero2;
