import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";


const UpcomingBatches = () => {
  return (
    <section className="bg-gray-50 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-700 mb-2">
        Upcoming Batches
      </h2>
      <p className="text-center font-semibold text-gray-700 mb-8">
        We offer both offline and online classes, you can find the details about the upcoming batches here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <h3 className="text-green-700 font-bold text-xl md:text-2xl mb-1">ONLINE BATCH</h3>
          <p className="line-through md:text-xl font-bold text-gray-400">₹1,75,000</p>
          <p className="text-gray-900 font-bold md:text-xl text-lg  mb-4">
            ₹1,60,000 <span className="font-bold">(All Inclusive)</span>
          </p>
          <p className="text-green-700 font-bold">Upcoming Batch</p>
          <div className="flex items-center text-green-700 font-bold mb-6">
            <FaRegCalendarAlt className="text-gray-700 text-xl mr-2" />
            August
          </div>
          <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition">
            Apply Now
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <h3 className="text-green-700 font-bold text-xl mb-1 md:text-2xl">OFFLINE CLASSROOM BATCH</h3>
          <p className="line-through md:text-xl font-bold text-gray-400">₹1,75,000</p>
          <p className="text-gray-900 font-bold md:text-xl text-lg mb-4">
            ₹1,60,000 <span className="font-bold">(All Inclusive)</span>
          </p>
          <p className="text-green-700 font-bold">Upcoming Batch</p>
          <div className="flex items-center text-green-700 font-bold mb-6">
            <FaRegCalendarAlt className="text-gray-700 text-xl mr-2" />
            August
          </div>
          <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default UpcomingBatches