import React from 'react';
import { useState } from 'react';

export default function SignIn() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const { fullName, email, password, confirmPassword, phoneNumber } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section className="flex justify-center items-center h-screen">
      {/* Image container (unchanged) */}
      <div className="w-1/3 h-full relative">
        <img src="https://img.freepik.com/free-vector/new-job-concept-illustration_114360-23770.jpg?t=st=1711284203~exp=1711287803~hmac=5c79b1a10c831a4e5ed66a679bcea37ae50f6d3d29694f9742dcf0a71ebb5d10&w=740"
        alt="Job" className="w-[80%] mt-40 ml-40 rounded"/>
      </div>

      {/* Form container */}
      <div className="w- h-full px-8 py-12 flex flex-col items-center justify-center z-30">
        <h1 className="text-black text-3xl text-center mb-6 font-bold">Sign In</h1>
        <form className="w-1/3 px-8 py-6 bg-white/20 text-white rounded-lg"> {/* Consistent styles for form */}
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={onChange}
            placeholder="Full Name"
            className="border-b border-white border-opacity-30 bg-transparent p-2 placeholder:text-white outline-none rounded-full transition ease-in-out"
          />
          <input
            type="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="Email address"
            className="border-b border-white border-opacity-30 bg-transparent p-2 placeholder:text-white outline-none rounded-full transition ease-in-out mt-4"
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            className="border-b border-white border-opacity-30 bg-transparent p-2 placeholder:text-white outline-none rounded-full transition ease-in-out mt-4"
          />
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            placeholder="Confirm Password"
            className="border-b border-white border-opacity-30 bg-transparent p-2 placeholder:text-white outline-none rounded-full transition ease-in-out mt-4"
          />
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            placeholder="Phone Number"
            className="border-b border-white border-opacity-30 bg-transparent p-2 placeholder:text-white outline-none rounded-full transition ease-in-out mt-4"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}
