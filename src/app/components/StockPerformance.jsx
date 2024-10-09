import React from "react";

export default function StockPerformance() {
  const stockData = [
    {
      name: "Prestige Estates",
      symbol: "PRESTIGE",
      percentage: "198.42%",
      duration: "334 days",
      recommendationDate: "26th August 2023",
      exitDate: "6th June 2024",
      entryPrice: "₹568",
      exitPrice: "₹1695",
    },
    {
      name: "Anantraj",
      symbol: "ANANTRAJ",
      percentage: "10%",
      duration: "27 days",
      recommendationDate: "17th August 2024",
      exitDate: "13th September 2024",
      entryPrice: "₹585",
      exitPrice: "₹645",
    },
    {
      name: "Reliance Industries",
      symbol: "RELIANCE",
      percentage: "25%",
      duration: "60 days",
      recommendationDate: "1st January 2024",
      exitDate: "1st March 2024",
      entryPrice: "₹2000",
      exitPrice: "₹2500",
    },
  ];

  return (
    <div className=" max-w-full mx-auto p-5 text-black bg-white">
      <h1 className="text-2xl font-bold text-center mb-8">
        Past Performances Of Our Stock Calls
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stockData.map((stock, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-lg p-6 shadow-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">{stock.name}</h2>
              <span className="bg-green-500 text-white px-3 py-1 rounded-md text-sm">
                {stock.percentage}
              </span>
            </div>
            <p className="text-gray-400 mb-4">{stock.symbol}</p>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Duration</span>
              <span className="font-semibold text-end">{stock.duration}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Date of Recommendation</span>
              <span className="font-semibold text-end">{stock.recommendationDate}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-400">Date of Exit</span>
              <span className="font-semibold text-end">{stock.exitDate}</span>
            </div>
            <div className="flex bg-gray-700 rounded-md overflow-hidden">
              <div className="flex-1 p-4 text-center">
                <div className="text-sm text-gray-400">Entry Price</div>
                <div className="text-xl font-bold">{stock.entryPrice}</div>
              </div>
              <div className="flex-1 p-4 text-center bg-gray-600">
                <div className="text-sm text-gray-400">Exit Price</div>
                <div className="text-xl font-bold">{stock.exitPrice}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
