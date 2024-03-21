import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 mt-20 ml-20">Find your future today!</h1>
      <div className="text-center md:text-left ml-20">
        <p className="text-gray-700">
          Where Talent Finds Home.
        </p>
      </div>
      <div className="flex justify-between items-center"> 
        <div className="text-right md:text-left w-2/3"> 
      
        </div>
        <img
          src="" 
          alt="Website Info Illustration"
          className="w-1/3 mx-auto md:w-1/2 rounded-lg shadow-md mb-4"/>
      </div>
      <div className="flex justify-center md:justify-start mt-4 ml-20">
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
          Find Jobs
        </button>
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Upload a Job
        </button>
      </div>
    </div>
  );
};

export default Home;
