import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    // Implement your search logic here using searchQuery
    console.log('Search query:', searchQuery);
  };
  const location= useLocation();
  const navigate = useNavigate();
  function pathMatchRoute(route){
    if (route===location.pathname)
    {
        return true;
    } 
  }
  return (
    <div className="bg-black border-b shadow-sm sticky">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-white text-3xl cursor-pointer"
        onClick={()=>navigate("/")}>
          HireIn
        </div>
        <div  className="w-full md:w-[67%] lg:w[40%] lg:ml-20 pt-4 pb-4"> {/* Added search bar container */}
            <input
              type="text"
              id="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="px-4 py-2 rounded-full text-x1 text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out"
            />
          </div>
        <div>
         
          <ul className="flex space-x-10">
            <li 
             className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/")&&"text-gray-100 border-b-blue-300"}`} 
             onClick={() => navigate("/")}>
                Home
            </li>
            <li 
             className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in")&&"text-gray-100 border-b-blue-300"}`} 
             onClick={() => navigate("/sign-in")}>
                Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}