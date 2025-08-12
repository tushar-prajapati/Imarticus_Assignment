import React, { useState, useEffect } from "react";
import logo from "../assets/logoLight.svg"; 
import { useRegisterMutation } from "../redux/api/userApiSlice.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../redux/features/auth/authSlice.js";
import { toast } from "react-toastify";




const Signup = ({onLogin}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [register, { isLoading }] = useRegisterMutation();
    const { userInfo } = useSelector((state) => state.auth);
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get("redirect") || "/home";

    useEffect(() => {
        if (userInfo) {
        navigate(redirect);
        }
    }, [navigate, userInfo, redirect]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        } else {
        try {
            const fullName = name;
            const res = await register({ fullName, email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate(redirect);
            toast.success("User successfully registered");
        } catch (error) {
            toast.error(error?.data?.message || error.message);
        }
        }
    };


  return (
    <div className="bg-white rounded-xl p-6 w-full max-w-sm mx-auto shadow-xl">
      <div className="flex justify-center mb-4">
        <img src={logo} alt="Logo" className="h-20" />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Sign Up
      </h2>

      <input required
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-600"
      />  

      <input required
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-600"
      />

      <div className="relative mb-3">
        <input required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 mb-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input required
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

      </div>

      
        {isLoading? "Registering...":  <button
      onClick={submitHandler}
      className="w-full bg-green-800 text-white py-2 cursor-pointer rounded-md font-semibold mb-4">
        Create My Account
      </button>
}
     
      

      

      
      

      <p className="text-center text-sm text-gray-600 mb-6">
        Already have an account?{" "}
        <a onClick={onLogin} href="#" className="text-green-700 font-medium cursor-pointer">
          Login
        </a>
      </p>
    </div>
  );
};

export default Signup;
