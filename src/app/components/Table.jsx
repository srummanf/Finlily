import React from 'react'

const Table = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Heading Content */}
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="mb-5 text-3xl font-bold md:text-5xl w-full max-w-3xl text-center">
              Benefits vs Others
            </h2>
          </div>

          <div className="w-full flex gap-10 flex-col items-center justify-center lg:flex-row">
            {/* Item */}
            <div className="bg-gray-100 shadow-md rounded my-6 overflow-hidden w-full max-w-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th colSpan="2" className="py-6 text-center text-lg w-full">
                      Business Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-6 md:px-12 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-semibold">Benefits Name</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 md:px-12 text-center">
                      <div className="relative flex gap-3 items-center justify-center">
                        <svg
                          className="h-5 w-5 md:h-8 md:w-8"
                          width="33"
                          height="34"
                          viewBox="0 0 33 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 14.1953L14.6625 21.1953L11 17.6953"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 29.1953C23.1274 29.1953 28.5 23.8227 28.5 17.1953C28.5 10.5679 23.1274 5.19531 16.5 5.19531C9.87258 5.19531 4.5 10.5679 4.5 17.1953C4.5 23.8227 9.87258 29.1953 16.5 29.1953Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="font-semibold">Yes</span>
                        <div className="absolute -top-3 -left-6 md:-left-12 bg-gray-300 h-20 w-[1px]"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-6 md:px-12 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-semibold">Benefits Name</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 md:px-12 text-center">
                      <div className="relative flex gap-3 items-center justify-center">
                        <svg
                          className="h-5 w-5 md:h-8 md:w-8"
                          width="33"
                          height="34"
                          viewBox="0 0 33 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 14.1953L14.6625 21.1953L11 17.6953"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 29.1953C23.1274 29.1953 28.5 23.8227 28.5 17.1953C28.5 10.5679 23.1274 5.19531 16.5 5.19531C9.87258 5.19531 4.5 10.5679 4.5 17.1953C4.5 23.8227 9.87258 29.1953 16.5 29.1953Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="font-semibold">Yes</span>
                        <div className="absolute -top-3 -left-6 md:-left-12 bg-gray-300 h-20 w-[1px]"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-6 md:px-12 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-semibold">Benefits Name</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 md:px-12 text-center">
                      <div className="relative flex gap-3 items-center justify-center">
                        <svg
                          className="h-5 w-5 md:h-8 md:w-8"
                          width="33"
                          height="34"
                          viewBox="0 0 33 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 14.1953L14.6625 21.1953L11 17.6953"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 29.1953C23.1274 29.1953 28.5 23.8227 28.5 17.1953C28.5 10.5679 23.1274 5.19531 16.5 5.19531C9.87258 5.19531 4.5 10.5679 4.5 17.1953C4.5 23.8227 9.87258 29.1953 16.5 29.1953Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="font-semibold">Yes</span>
                        <div className="absolute -top-3 -left-6 md:-left-12 bg-gray-300 h-20 w-[1px]"></div>
                      </div>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Table