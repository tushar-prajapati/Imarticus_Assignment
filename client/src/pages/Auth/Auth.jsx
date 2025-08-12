import React, { useState } from 'react'
import bg from '../../assets/bg.webp'
import Login from '../../components/Login';
import Signup from '../../components/Signup';

const Auth = () => {
  const [activeState, setActiveState] = useState('login');

  return (
    <div className="relative h-screen w-screen">
      <img 
        src={bg} 
        alt="Background" 
        className="absolute inset-0 h-full w-full object-cover z-0" 
      />

      <div className="relative z-10 flex items-center justify-center md:justify-end h-full px-8">
        {activeState === 'login' && (
          <div className="max-w-sm w-full">
            <Login onSignup={()=>setActiveState('signup')} />
          </div>
        )}
        {activeState === 'signup' && (
          <div className="max-w-sm w-full">
            <Signup onLogin={()=>setActiveState('login')}/>
          </div>
        )}

      </div>
    </div>
  );
};

export default Auth;
