import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Loader from "../../components/Loader";
import { FaRegBell } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import logoLight from '../../assets/logoLight.svg'
import Modal from '../../components/Modal.jsx'
import ProfileOptions from "../../components/ProfileOptions.jsx";
import Notifications from "../../components/Notifications.jsx";
import { IoIosArrowForward } from "react-icons/io";
import CourseDetails from "../../components/CourseDetails.jsx";
import { useFetchCourseDetailsQuery } from "../../redux/api/courseApiSlice.js";
import CertificateCard from "../../components/CertificateCard.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice.js";
import { useLogoutMutation } from "../../redux/api/userApiSlice.js";



const Course = () => {

  const {data, isLoading, isError} = useFetchCourseDetailsQuery({courseId: '6898b819f74ccfc747a4ccdc'});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOptionsOpen, setProfileOptionsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, []);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    isLoading? <Loader/>: 
    <div className="flex bg-[#F2F6F9]">
      
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <main className="w-screen md:w-full bg-[#F2F6F9]">
        <header className="w-full h-16 bg-white shadow-lg flex justify-between">
          <div className="h-full px-2  md:px-10 flex items-center">
   <div className="md:hidden w-full px-4 py-3 flex items-center">
      {!isSidebarOpen && 
      <button
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Toggle navigation"
      >
        <span className="block w-4 h-1 rounded-lg  bg-gray-400 mb-2"></span>
        <span className="block w-8 h-1 rounded-lg bg-gray-400 mb-2"></span>
        <span className="block w-6 h-1 rounded-lg bg-gray-400"></span>
        
      </button>
}
      </div>
            <h1 className="hidden md:flex text-xl text-[#82849F]">
              Introduction to Machine Learning
            </h1>
          </div>
          <div className="flex md:hidden">
            <img src={logoLight} alt="Logo" />
          </div>
          <div className="flex items-center gap-6 px-4 md:px-10">
            <div>
            <div className={`rounded-lg ${notificationsOpen&& ' bg-gray-100'} p-2`}>
            <FaRegBell
            onClick={()=>setNotificationsOpen(!notificationsOpen)}
            className={`cursor-pointer text-2xl text-gray-700 hidden md:flex`}/>
            </div>
            <Notifications isOpen={notificationsOpen}/>

            </div>
            <div>
            <div
            onClick={()=>setProfileOptionsOpen(!profileOptionsOpen)}
            className="cursor-pointer flex items-center gap-4">
              
              <div className="h-8 w-8 md:h-10 md:w-10 bg-red-500 flex items-center justify-center rounded-full text-white text-md md:text-2xl">{userInfo.fullName[0]}</div>
              <h1 className="text-gray-500 font-semibold hidden md:flex">{userInfo.fullName}</h1>
              <IoIosArrowDown className="text-lg text-gray-500 hidden md:flex"/>
            </div>
              <ProfileOptions logoutHandler={logoutHandler} isOpen={profileOptionsOpen}/>
            </div>
          </div>
        </header>

        <div className="w-full h-24 flex items-center mx-16">
          <p className="text-sm font-semibold text-[#035642] flex items-center cursor-pointer"> My Courses 
            <IoIosArrowForward/>
            <span className="text-[#82849F]">Introduction to Machine Learning</span>
          </p>
        </div>
        <div className="w-full px-8 md:px-16">
        <CourseDetails course={data}/>
        </div>
        <div className="w-full px-8 md:px-16 mt-4">
        <CertificateCard/>
                </div>
        
      </main>
    </div>
  );
};

export default Course;
