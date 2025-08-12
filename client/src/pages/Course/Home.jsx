import React, { useState, useEffect } from "react";
import logoLight2 from "../../assets/logoLight2.svg";
import Footer from "../../components/Footer/Footer";
import zomtatoImg from '../../assets/keyHighlights/zomato.webp'
import rapidoImg from '../../assets/keyHighlights/rapido.webp'
import mfineImg from '../../assets/keyHighlights/mfine.webp'
import deloitteImg from '../../assets/keyHighlights/deloitte.webp'
import HiringPartners from "../../components/HiringPartners";
import Hero from "../../components/Hero";
import IndustryTools from "../../components/IndustryTools";
import UpcomingBatches from "../../components/UpcomingBatches";
import { logout } from '../../redux/features/auth/authSlice.js'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation, useUpdateOnCoursePurchaseMutation } from '../../redux/api/userApiSlice.js'
import { useFetchCourseDetailsQuery } from "../../redux/api/courseApiSlice.js";
import { toast } from "react-toastify";
import Trainers from "../../components/Trainers.jsx";
import Learners from "../../components/Learners.jsx";

const Home = () => {
  const [logoutApiCall] = useLogoutMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useFetchCourseDetailsQuery({ courseId: '6898b819f74ccfc747a4ccdc' });
  const [updateOnCoursePurchase] = useUpdateOnCoursePurchaseMutation()
  const [mobile, setMobile] = useState(null)
  const [location, setLocation] = useState('')
  const [experience, setExperience] = useState('')
  const [activeSection, setActiveSection] = useState('Overview')
  const userId = userInfo._id;

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (userInfo.enrolled.length != 0) {
      navigate('/courses/6898b819f74ccfc747a4ccdc')
    }
    else {
      const res = await updateOnCoursePurchase({ userId, mobile, experience, location })
      if (!mobile || !experience || !location) {
        toast.error('All fields are required')
      }
      if (res.data.success) {
        navigate('/order/6898b819f74ccfc747a4ccdc')
      }
      else {
        toast.error("Something went wrong!")
      }
    }
  }

  const handleNavClick = (section) => {
    setActiveSection(section)
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Overview', 'Hiring Partners', 'Curriculum', 'Trainers', 'Projects', 'Success stories', 'Pricing', 'FAQs']
      let current = activeSection
      sections.forEach(sec => {
        const el = document.getElementById(sec)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = sec
          }
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#FAFAFA]">


      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <div className="flex justify-between items-center md:ml-24 py-2 ml-2">
          <img
            src={logoLight2}
            alt="Imarticus Learning"
            className="h-8 w-auto"
          />
          <button
            onClick={logoutHandler}
            className="mr-4 bg-gray-700 text-white cursor-pointer rounded-lg hover:bg-gray-600 px-4 py-2">Logout</button>
        </div>
        <nav className="bg-[#004D40] text-white w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-center px-4 py-3">
            <ul className="flex space-x-6 text-sm font-medium md:text-base overflow-x-auto whitespace-nowrap">
              {['Overview', 'Hiring Partners', 'Curriculum', 'Trainers', 'Projects', 'Success stories', 'Pricing', 'FAQs'].map(sec => (
                <li
                  key={sec}
                  onClick={() => handleNavClick(sec)}
                  className={`cursor-pointer pb-1 ${activeSection === sec ? 'border-b-2 border-orange-400' : 'border-b-2 border-transparent'}`}
                >
                  {sec}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <section id="Overview">
        <Hero />
      </section>



      <section className="bg-[#004D40] h-auto flex items-center justify-center px-4 py-8 md:py-16">
        <div className="w-full grid h-full grid-cols-1 lg:grid-cols-2 gap-8 md:gap-0">
          <div className="flex md:w-full items-center justify-end">
            <div className="flex flex-col items-center text-white text-center space-y-8 ">
              <h2 className="text-2xl md:text-4xl font-bold">Key Highlights</h2>
              <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
                <div className="bg-[#FF8058] rounded-lg p-4 md:py-8 md:px-12">
                  <p className="text-2xl md:text-4xl font-bold">1600+</p>
                  <p className="text-sm font-bold">Students Placed</p>
                </div>
                <div className="bg-[#FF8058] rounded-lg p-4 md:py-8 md:px-12">
                  <p className="text-2xl md:text-4xl font-bold">12LPA</p>
                  <p className="text-sm font-bold">Highest CTC</p>
                </div>
                <div className="bg-[#FF8058] rounded-lg p-4 md:py-8 md:px-12">
                  <p className="text-2xl md:text-4xl font-bold">10</p>
                  <p className="text-sm font-bold">Assured Interviews</p>
                </div>
                <div className="bg-[#FF8058] rounded-lg p-4 md:py-8 md:px-12">
                  <p className="text-2xl md:text-4xl font-bold">1000+</p>
                  <p className="text-sm font-bold">Hiring Partners</p>
                </div>
              </div>
              <p className="text-md font-medium">
                The Program has been created in collaboration with Managers from
              </p>
              <div className="flex gap-6 flex-wrap justify-center">
                <img src={zomtatoImg} alt="Zomato" className="h-14" />
                <img src={rapidoImg} alt="Rapido" className="h-14" />
                <img src={mfineImg} alt="mfine" className="h-14" />
                <img src={deloitteImg} alt="Deloitte" className="h-14" />
              </div>
            </div>
          </div>
          <div className="md:w-full flex items-center justify-center ">
            <div className="bg-white md:max-w-lg rounded-xl p-8 shadow-lg">
              <h3 className="text-lg md:text-2xl font-bold mb-4">
                Apply For The{" "}
                <span className="text-[#FF8058]">
                  MyCaptain Digital Marketing Job Assurance Program
                </span>
              </h3>
              <form className="space-y-4">
                <label htmlFor="fullName" className="text-sm font-semibold">Full Name</label>
                <input
                  value={userInfo.fullName}
                  type="text"
                  className="w-full border border-gray-400 rounded-lg px-3 py-4 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <label htmlFor="email" className="text-sm font-semibold">Email</label>
                <input
                  value={userInfo.email}
                  type="email"
                  className="w-full border border-gray-400 rounded-lg px-3 py-4 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <label htmlFor="mobileNumber" className="text-sm font-semibold">Mobile Number</label>
                <div className="flex">
                  <select
                    className="border border-gray-400 rounded-l-lg px-3 py-4 focus:outline-none">
                    <option>India (+91)</option>
                    <option>USA (+1)</option>
                  </select>
                  <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    type="tel"
                    className="flex-1 border-t border-b border-r border-gray-400 rounded-r-lg px-3 py-4 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <label htmlFor="location" className="text-sm font-semibold">Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-gray-400 rounded-lg px-3 py-4 focus:outline-none focus:ring-2 focus:ring-black">
                  <option value=""></option>
                  <option>Lucknow</option>
                  <option>Delhi</option>
                </select>
                <label htmlFor="experience" className="text-sm font-semibold">Professional Experience</label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full border border-gray-400 rounded-lg mb-8 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-black">
                  <option value=""></option>
                  <option>0-1 years</option>
                  <option>2-5 years</option>
                </select>
                <button
                  onClick={submitHandler}
                  type="submit"
                  className="w-full bg-[#FF8058] cursor-pointer text-white py-4 mb-4 rounded-lg font-medium hover:bg-[#e46f4e] transition"
                >
                  Purchase Course
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="Hiring Partners">
        <HiringPartners />
      </section>

      <section id="Curriculum">
        <IndustryTools />
        <UpcomingBatches />

      </section>



      <section id="Trainers">
        <Trainers />
      </section>

      <section id="Projects">
        <Learners />
      </section>

      <div className="mb-24"></div>
      <Footer />
    </div>
  );
};

export default Home;
