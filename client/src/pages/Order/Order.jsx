import React from 'react'
import { useFetchCourseDetailsQuery } from '../../redux/api/courseApiSlice.js';
import Loader from '../../components/Loader.jsx';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../redux/constants.js';


const apiKey = import.meta.env.VITE_RAZORPAY_API_KEY;

const Order = () => {
    const {data, isLoading, isError} = useFetchCourseDetailsQuery({courseId: '6898b819f74ccfc747a4ccdc'});
    const course = data;
    const navigate= useNavigate();
    const { userInfo } = useSelector((state) => state.auth);



    const handlePayment = async () => {
        console.log(course)
        try {
            const { data: order } = await axios.post(`${BASE_URL}/api/payment/order`, {
                amount: course.amount, 
                userId: userInfo._id,
                courseId: course._id
            });
    
            const options = {
                key: apiKey,
                amount: order.amount,
                currency: order.currency,
                name: "Imarticus",
                description: "test transaction",
                order_id: order.id,
                handler: async (response) => {
                    const { data } = await axios.post(`${BASE_URL}/api/payment/verify`, response);
                    if (data.success) {
                        alert("Payment Successful!");
                        navigate(`/courses/${course._id}`);
                    } else {
                        alert("Payment Verification Failed!");
                    }
                },
                theme: { color: "#3399cc" },
            };
    
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (err) {
            console.error(err);
        }
    };

    
      return (
        isLoading ? <Loader/> : isError? <h1>Something went wrong</h1>:
        <div className="max-w-5xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6 text-center">Order Summary</h1>
    
          <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
            <table className="min-w-full bg-white text-sm">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-3 text-left">Course Title</th>
                  <th className="px-4 py-3 text-left">Batch</th>
                  <th className="px-4 py-3 text-left">Amount (₹)</th>
                  <th className="px-4 py-3 text-left">Sections</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 font-bold py-3">{course.title}</td>
                  <td className="px-4 py-3">{course.batch}</td>
                  <td className="px-4 font-semibold py-3">{course.amount}</td>
                  <td className="px-4 py-3">
                    <ul className="list-disc list-inside space-y-1">
                      {course.sections.map((section, index) => (
                        <li
                          key={index}
                          className={`text-gray-700`}
                        >
                          {section.title}{" "}
                          
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    
          <div className="mt-6 flex justify-center">
            <button
              onClick={handlePayment}
              className="px-6 py-3 bg-green-700 cursor-pointer text-white rounded hover:bg-green-800 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      );
}

export default Order