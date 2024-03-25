"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/bg.png';
import { motion } from "framer-motion";
import { useRef } from 'react';

const Home = () => {
  const contactUsRef = useRef(null);
  return (
    <section className='max-w-[100%]'>
      <div className="blur-[100px]">
        <motion.div
          transition={{
            ease: "easeOut",
          }}
        >
          <svg
            viewBox="0 0 900 200"
            width="400"
            height="400"
            style={{ position: 'absolute', zIndex: -1 }}
          >
            <g transform="translate(467.23239110888414 314.95271236202706)">
              <motion.path
                d="M152.5 -155.5C189 -116 204 -58 197.9 -6.1C191.7 45.7 164.5 91.5 128 116.5C91.5 141.5 45.7 145.7 -12.5 158.2C-70.7 170.7 -141.4 191.4 -184.8 166.4C-228.1 141.4 -244 70.7 -227 17.1C-209.9 -36.5 -159.7 -73.1 -116.4 -112.6C-73.1 -152.1 -36.5 -194.5 10.7 -205.3C58 -216 116 -195 152.5 -155.5"
                animate={{
                  d: [
                    "M152.5 -155.5C189 -116 204 -58 197.9 -6.1C191.7 45.7 164.5 91.5 128 116.5C91.5 141.5 45.7 145.7 -12.5 158.2C-70.7 170.7 -141.4 191.4 -184.8 166.4C-228.1 141.4 -244 70.7 -227 17.1C-209.9 -36.5 -159.7 -73.1 -116.4 -112.6C-73.1 -152.1 -36.5 -194.5 10.7 -205.3C58 -216 116 -195 152.5 -155.5",
                    "M260.1 -237.6C328.7 -191.4 370.4 -95.7 349 -21.3C327.7 53 243.4 106.1 174.7 181.1C106.1 256.1 53 353 -21.8 374.8C-96.6 396.6 -193.3 343.3 -237.1 268.3C-280.9 193.3 -272 96.6 -270.3 1.6C-268.7 -93.3 -274.3 -186.7 -230.5 -232.8C-186.7 -279 -93.3 -278 1.2 -279.2C95.7 -280.4 191.4 -283.7 260.1 -237.6",
                    "M238.7 -237C312.9 -164.5 378.9 -82.3 390.8 11.9C402.7 106.1 360.5 212.1 286.3 282C212.1 351.8 106.1 385.4 26.5 358.9C-53 332.4 -106.1 245.7 -168.7 175.9C-231.4 106.1 -303.7 53 -308.4 -4.7C-313.1 -62.5 -250.3 -124.9 -187.6 -197.4C-124.9 -269.9 -62.5 -352.5 9.9 -362.4C82.3 -372.3 164.5 -309.5 238.7 -237"
                  ],
                  fill: ["#BB004B", "#81b5e6", "#C517D0"]
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  duration: 5,
                }}
              />
            </g>
          </svg>
        </motion.div>
      </div>

      <div className="flex justify-center container mt-20 mx-auto px-0 py-8">
        <div className="text-left md:text-left">
          <h1 className="text-4xl  text-transparent font-bold mb-8 mt-10 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text">
            Find your future today!
          </h1>
          <p className="text-white">Where Talent Finds Home</p>
          <p className="text-gray-400">
            <br />
            If you are confused about your life, find help here.
            <br />
            Get the job that suits you. Make money and enjoy.
            <br />
            This is the website information.This is the website information.
            <br />
            This is the website information.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start mt-6">
            <Link
              to="/find-jobs"
              className="flex items-center justify-center bg-black hover:bg-purple-800 text-white shadow-[0_0_10px_purple] font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
            >
              Find Jobs
            </Link>
            <Link
              to="/upload-job"
              className="flex items-center justify-center bg-black hover:bg-purple-800 text-white shadow-[0_0_10px_purple] font-bold py-2 px-4 rounded-full w-full md:w-auto"
            >
              Upload a Job
            </Link>
          </div>
        </div>

        {/* Image container */}
        <div className="flex justify-center items-center w-[45%] ml-20 mb-20">
          <img
            src={homeImage}
            alt="Website Info Illustration"
            className="w-[70%] h-full rounded-lg mb-4 "
          />
        </div>
      </div>
      <div className="flex justify-center text-2xl text-white font-sm-bold mt-9 mb-4 ">
        Search Jobs by Category
      </div>
      <div className="container mx-auto px-4">
        {/* First row with three buttons */}
        <div className="flex justify-center mb-4 mt-10">
          <button className="flex items-center justify-center bg-black hover:bg-purple-800 text-white shadow-[0_0_10px_purple] font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2 w-full md:w-auto">
            Technology
          </button>
          <button className="flex items-center justify-center bg-black hover:bg-purple-800 text-white shadow-[0_0_10px_purple] font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2 w-full md:w-auto ml-3">
            Health Care
          </button>
          <button className="flex items-center justify-center bg-black hover:bg-purple-800 text-white shadow-[0_0_10px_purple] font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2 w-full md:w-auto ml-3">
            Business
          </button>
        </div>

        {/* Second row with five buttons */}
        <div className="flex justify-center mb-20 mt-5">
          <button className="flex items-center justify-center bg-black hover:bg-purple-800 text-white shadow-[0_0_10px_purple] font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2 w-full md:w-auto ml-3">
            Education
          </button>
          <button className="flex items-center justify-center bg-black hover:bg-purple-800 text-white shadow-[0_0_10px_purple] font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2 w-full md:w-auto ml-3">
            Creative and Design
          </button>
          <button className="flex items-center justify-center bg-black hover:bg-purple-800 text-white shadow-[0_0_10px_purple] font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2 w-full md:w-auto ml-3">
            Legal
          </button>
          <button className="flex items-center justify-center bg-black hover:bg-purple-800 text-white shadow-[0_0_10px_purple] font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2 w-full md:w-auto ml-3">
            Tourism
          </button>
          <button className="flex items-center justify-center bg-black hover:bg-purple-800 text-white shadow-[0_0_10px_purple] font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2 w-full md:w-auto ml-3">
            Logistics
          </button>
        </div>
      </div>

      {/* Contact Us section */}
      <div className="bg-transparent shadow-[0_0_10px_purple] py-12 " ref={contactUsRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400">Get in touch with us for any inquiries or support.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-gray-400">
                Email: <a href="mailto:contact@example.com" className="text-white hover:text-purple-500">contact@example.com</a>
              </p>
              <p className="text-gray-400">
                Phone: <span className="text-white">+1 (555) 123-4567</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;