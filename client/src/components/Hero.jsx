import React from 'react'
import mycaptianLogo from "../assets/mycaptain-logo.webp";


const Hero = () => {
  return (
    <div className="bg-white pt-[120px] md:pt-[130px]">
        <section className="bg-[#FAFAFA] text-center px-4 py-6 md:py-10">
          <img
            src={mycaptianLogo}
            alt="MyCaptain"
            className="mx-auto md:h-16 h-10  w-auto mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700">
            Become a Digital Marketer in <br className="hidden md:block" /> 18
            Weeks
          </h1>
          <p className="text-gray-600 font-bold text-md md:text-2xl mt-8">
            MyCaptain Digital Marketing Program with Job Assurance
          </p>

          <div className="bg-white shadow-lg rounded-lg max-w-6xl mx-auto mt-6 p-6">
            <div className=" grid grid-cols-1 md:grid-cols-6 gap-6 items-center">
              <div className="text-center col-span-2 grid grid-cols-2">
                <div className="text-center col-span-1">
                  <p className="text-gray-700">Next Batch</p>
                  <p className="text-md md:text-xl font-bold">August</p>
                </div>
                <div className="text-center col-span-1">
                  <p className="text-gray-700">Available Seats</p>
                  <p className="text-md md:text-xl font-bold">29/60</p>
                </div>
              </div>
              <div className="text-center md:col-span-2 col-span-full">
                <p className="text-gray-700">Taught by experts from</p>
                <p className="text-md md:text-xl font-semibold">
                  Rapido, Deloitte, MFine, Zomato
                </p>
              </div>
              <div className="text-center md:col-span-2 col-span-full">
                <p className="text-gray-700">Designed for</p>
                <p className="text-md md:text-xl font-semibold">
                  Freshers & Early Working Professionals
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center  w-full mt-4">
              <div className="flex items-center justify-center bg-[#eceaea] px-4 py-2 rounded-lg space-x-8">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-semibold">4.51</span>
                </div>
                <div className="flex items-center space-x-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 12a3 3 0 10-6 0 3 3 0 006 0z"
                    />
                  </svg>
                  <span className="font-semibold">1.2 Lacs+ Learners</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8 mb-8">
            <button className="bg-orange-500/90 cursor-pointer text-white md:text-2xl w-44 md:w-96 md:h-20 py-3 rounded-md font-semibold  ">
              Apply Now
            </button>
            <button className="bg-gray-900/90 cursor-pointer text-white md:text-2xl w-44 md:w-96 md:h-20 py-3 rounded-md font-semibold  ">
              Download Brochure
            </button>
          </div>
        </section>
      </div>
  )
}

export default Hero