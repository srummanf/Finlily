import React from 'react';

const Tagline = () => {
    return (
        <div className="bg-[#292929] text-white py-8 px-6 mx-auto font-inter ">
            <h1 className="text-5xl mb-4 text-center font-bold">
                Why Learn <span className="text-teal-400">Trading</span>?
            </h1>
            <div className="flex flex-wrap justify-center items-center w-full px-4">
                <h2 className="text-lg sm:text-2xl md:text-4xl mb-8 text-center tracking-wide">
                    Trading isn't just about making money; it's about taking control of your financial future.
                </h2>
            </div>



            <div className="flex">
                <ul className="list-none p-0 flex-1 space-y-4">
                    {[
                        'Generate Additional Income',
                        'Build Wealth Over Time',
                        'Diversify Your Investment',
                        'Be Your Own Boss',
                        'Enjoy Flexibility and Freedom'
                    ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <span className="text-teal-400 text-lg sm:text-2xl md:text-4xl">›</span>
                            <span className=" text-2xl font-bold">{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="w-48 h-48 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full mx-auto lg:mx-0" />
            </div>

            <h2 className="text-3xl mt-8 text-center">
                Trading offers countless opportunities to achieve your financial goals, and our platform is here to guide you every step of the way.
            </h2>
        </div>
    );
}

export default Tagline;
