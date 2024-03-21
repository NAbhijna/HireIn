import React from 'react';
import { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className="text-black text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?t=st=1710923136~exp=1710926736~hmac=803ce17cbb4596f8c74e8b3e9c85055d935a8e18c7c6a42011700edf1e6ef4c&w=1060"
            alt="Job"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w[40%] lg:ml-20">
          <form className="shadow-md rounded-lg px-8 py-6"> {/* Removed bg-white */}
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-[250px] px-4 py-1 text-x1 text-gray-700 border-gray-300 rounded-full transition ease-in-out"
            />
            {/* Add more form fields here */}
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
