import React from "react";
import Quaterly from "../public/images/quaterly.png";
import HalfYearly from "../public/images/halfyearly.png";
import Yearly from "../public/images/yearly.png";
import Image from "next/image";

const Pricing = () => {
  return (
    <section className="py-6 bg-white text-black">
      <div className="container mx-auto p-4 sm:p-10">
        <div className="mb-16 space-y-4 text-center">
          <h1 className="text-4xl font-semibold">Pricing</h1>
          <p className="px-4 sm:px-8 lg:px-24">
            Choose the plan that suits your trading goals. Unlock premium
            features and gain access to exclusive trading insights and
            strategies.
          </p>
        </div>
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto lg:max-w-full lg:gap-6 xl:gap-10 lg:grid-cols-3">
          {/* Half Yearly Plan */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
            <a href="https://finlilytechnology.com/stock-calls/">
              <Image
                className="p-8 rounded-t-lg"
                src={HalfYearly}
                alt="Half Yearly Plan"
              />
            </a>
            <div className="px-5 pb-5 text-center">
              <a href="https://finlilytechnology.com/stock-calls/">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                  Stock Calls - Half Yearly Plan
                </h5>
              </a>
              <div className="flex flex-col items-center justify-center mb-4 space-y-2">
                <span className="text-xl font-bold text-gray-500 line-through">
                  ₹5,500
                </span>
                <span className="text-3xl font-bold text-gray-900">
                  ₹4,499
                </span>
              </div>
            </div>
          </div>

          {/* Quarterly Plan */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
            <a href="https://finlilytechnology.com/stock-calls/">
              <Image
                className="p-8 rounded-t-lg"
                src={Quaterly}
                alt="Quarterly Plan"
              />
            </a>
            <div className="px-5 pb-5 text-center">
              <a href="https://finlilytechnology.com/stock-calls/">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                  Stock Calls - Quarterly Plan
                </h5>
              </a>
              <div className="flex flex-col items-center justify-center mb-4 space-y-2">
                <span className="text-xl font-bold text-gray-500 line-through">
                  ₹3,000
                </span>
                <span className="text-3xl font-bold text-gray-900">
                  ₹2,499
                </span>
              </div>
            </div>
          </div>

          {/* Yearly Plan */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
            <a href="https://finlilytechnology.com/stock-calls/">
              <Image
                className="p-8 rounded-t-lg"
                src={Yearly}
                alt="Yearly Plan"
              />
            </a>
            <div className="px-5 pb-5 text-center">
              <a href="https://finlilytechnology.com/stock-calls/">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                  Stock Calls - Yearly Plan
                </h5>
              </a>
              <div className="flex flex-col items-center justify-center mb-4 space-y-2">
                <span className="text-xl font-bold text-gray-500 line-through">
                  ₹10,000
                </span>
                <span className="text-3xl font-bold text-gray-900">
                  ₹8,499
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
