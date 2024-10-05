import Image from "next/image";
import React from "react";
import Benny from "../public/images/benny.jpeg";

const Team = () => {
  return (
    <section>
      {/* Container */}
      <div className="bg-white mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl text-black">
          Our Team Members
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet elit ut aliquam
        </p>
        {/* Content */}
        <div className="mx-auto grid max-w-5xl justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start">
            <Image
              src={Benny}
              alt=""
              className=" mb-4 inline-block h-56 w-full object-cover lg:h-72"
            />
            <p className="font-bold text-black">Binyameen Md Umar</p>
            <p className="text-sm text-gray-500">Webflow Developer</p>
          </div>
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start">
            <Image
              src={Benny}
              alt=""
              className=" mb-4 inline-block h-56 w-full object-cover lg:h-72"
            />
            <p className="font-bold text-black">Binyameen Md Umar</p>
            <p className="text-sm text-gray-500">Webflow Developer</p>
          </div>
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start">
            <Image
              src={Benny}
              alt=""
              className=" mb-4 inline-block h-56 w-full object-cover lg:h-72"
            />
            <p className="font-bold text-black">Binyameen Md Umar</p>
            <p className="text-sm text-gray-500">Webflow Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
