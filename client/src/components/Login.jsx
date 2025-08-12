import React, { useState, useEffect } from "react";
import { FaEye, FaMobileAlt, FaUserShield } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import logo from "../assets/logoLight.svg"; 
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../redux/features/auth/authSlice.js";
import {useLoginMutation} from '../redux/api/userApiSlice.js'
import { toast } from "react-toastify";
import Loader from "./Loader.jsx";


const Login = ({onSignup}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();
    const { userInfo } = useSelector((state) => state.auth);
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get("redirect") || "/home";

    useEffect(() => {
        if (userInfo) {
          navigate(redirect);
        }
      }, [navigate, redirect, userInfo]);

      const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const res = await login({ email, password }).unwrap();
          console.log(res);
          dispatch(setCredentials({ ...res }));
          toast.success(`Welcome Back`);
          navigate(redirect)
        } catch (error) {
          toast.error(error?.data?.message || error.message);
        }
      };
    
    

  return (
    <div className="bg-white rounded-xl p-6 w-full max-w-sm mx-auto shadow-xl">
      <div className="flex justify-center mb-4">
        <img src={logo} alt="Logo" className="h-20" />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Log In
      </h2>

      <input
        type="email"
        placeholder="Enter your Email here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-600"
      />

      <div className="relative mb-3">
        <input
          type="password"
          placeholder="Enter your password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

      </div>

      <div className="flex justify-between text-sm mb-4">
        <button className="text-green-700 font-medium cursor-pointer">
          Login With OTP
        </button>
        <button className="text-green-700 font-medium cursor-pointer">
          Forgot Password ?
        </button>
      </div>
    {isLoading?"Logging in...": <button onClick={submitHandler} className="w-full bg-green-800 text-white py-2 cursor-pointer rounded-md font-semibold mb-4">
        Log In
      </button>}
      

      <div className="flex items-center mb-4">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-500 text-sm">Or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <button className="cursor-pointer w-full flex items-center justify-center border border-gray-300 rounded-md py-2 mb-3 hover:bg-gray-100">
        <FaMobileAlt className="mr-2 text-green-700 cursor-pointer" />
        Log in with Mobile Number
      </button>

      <button className="w-full cursor-pointer flex items-center justify-center border border-gray-300 rounded-md py-2 mb-3 hover:bg-gray-100">
        <FaUserShield className="mr-2 text-green-700" />
        Log in with Username
      </button>

      <div className="flex gap-3 mb-4">
        <button className="flex items-center cursor-pointer justify-center border border-gray-300 text-gray-800 rounded-md py-2 w-full hover:bg-gray-100">
          <FcGoogle className="mr-2 text-lg" /> Google
        </button>
        <button className="flex items-center cursor-pointer justify-center border border-gray-300 text-gray-800 rounded-md py-2 w-full hover:bg-gray-100">
          <FaFacebook className="mr-2 text-blue-600 text-lg" /> Facebook
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mb-6">
        Don't have an account?{" "}
        <a onClick={onSignup} href="#" className="text-green-700 font-medium cursor-pointer">
          Sign up for free
        </a>
      </p>
    </div>
  );
};

export default Login;
