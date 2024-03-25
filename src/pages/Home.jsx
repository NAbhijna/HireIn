import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/bg.png';  
        
const Home = () => {
   return (
            
     <div className="flex justify-center container mt-20 mx-auto px-0 py-8">
            
      <div className="text-left md:text-left">
                <h1 className="text-4xl bd-10 text-transparent font-bold mb-8 mt-10 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text">Find your future today!</h1>
                <p className="text-white">
                  Where Talent Finds Home</p>
                  <p className="text-gray-400">
                  <br/>If you are confused about your life, find help here.
                  <br />
                  Get the job that suits you. Make money and enjoy.
                  <br />
                  This is the website information.This is the website information.
                  <br />
                  This is the website information.
                </p>
                <div className="flex justify-center md:justify-start mt-6">
                  <Link to="/find-jobs" className="bg-black hover:bg-purple-800 text-white shadow-[0_0_10px_purple] font-bold py-2 px-4 rounded-full mr-2">
                    Find Jobs
                  </Link>
                  <Link to="/upload-job" className="bg-black hover:bg-purple-800 text-white shadow-[0_0_10px_purple] font-bold py-2 px-4 rounded-full">
                    Upload a Job
                  </Link>
                </div>
              </div>
        
              {/* Image container */}
              <div className="w-[30%] ml-20 mb-20">
                <img
                  src={homeImage}
                  alt="Website Info Illustration"
                  className="w-full h-full rounded-lg mb-4"
                />
              </div>
        
            </div>
            
       );
    };
        
export default Home;
