import React from "react";

const Features = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto p-6 overflow-x-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">
          What Do You Get From Us
        </h1>
        <table className="w-full">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th></th>
              <th scope="col">
                <h2 className="px-2 text-lg font-medium text-black">
                  Free User
                </h2>
              </th>
              <th scope="col">
                <h2 className="px-2 text-lg font-medium text-black">
                  Pro User
                </h2>
                {/* <p className="mb-3">
                  <span className="text-2xl font-bold sm:text-4xl text-black">
                    19€
                  </span>
                  <span className="font-medium text-gray-500">/mo</span>
                </p> */}
              </th>
            </tr>
          </thead>
          <tbody className="text-center divide-y divide-gray-300">
            {[
              {
                feature: "Past Performance of our calls",
                free: true,
                pro: true,
              },
              { feature: "Top gainers of the day", free: true, pro: true },
              { feature: "Top Losers of the day", free: true, pro: true },
              { feature: "Daily Updates of the market", free: true, pro: true },
              { feature: "Stock calls / Advisory", free: false, pro: true },
              {
                feature: "Analysis of stock called or an advised stocks",
                free: false,
                pro: true,
              },
              {
                feature: "Advanced Insights and Analytics",
                free: false,
                pro: true,
              },
              { feature: "Dedicated Support", free: false, pro: true },
            ].map(({ feature, free, pro }, index) => (
              <tr key={index}>
                <th scope="row" className="text-left py-3 text-black">
                  <h3>{feature}</h3>
                </th>
                <td>
                  {free ? (
                    <svg
                      className="w-5 h-5 mx-auto text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 mx-auto text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </td>
                <td>
                  {pro ? (
                    <svg
                      className="w-5 h-5 mx-auto text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 mx-auto text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Features;


