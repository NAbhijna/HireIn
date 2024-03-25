import React, { useState, useRef, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const contactUsRef = useRef(null);
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (searchQuery) {
      navigate(`/find-jobs?q=${searchQuery}`); // Redirect to FindJobs with query param
    }
  };

  const pathMatchRoute = (route) => location.pathname === route;
  useEffect(() => {
    if (location.pathname === '/contact') {
      contactUsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="bg-black sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-white text-3xl cursor-pointer" onClick={() => navigate("/")}>
          HireIn
        </div>
        
        <div className="w-full md:w-[67%] lg:w[40%] lg:ml-20 pt-4 pb-4">
          
          <form  onSubmit={handleSubmitSearch}>
            <input
              type="text"
              id="search"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={handleSearch}
              className="px-4 py-2 rounded-full text-x1 text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out"
            />
          </form>
        </div>
        
        <div >
        <ul className="flex space-x-10">
            <li 
             className={`rounded-box rounded-full p-4 cursor-pointer hover:bg-purple-400 py-3 text-sm font-semibold text-white ${pathMatchRoute("/") && "text-purple-300 shadow-[0_0_20px_purple]"}`} 
             onClick={() => navigate("/")}>
                Home
            </li>
            <li 
             className={`rounded-box rounded-full p-4 cursor-pointer hover:bg-purple-400 py-3 text-sm font-semibold text-white ${
              pathMatchRoute('/contact') && 'text-purple-300 shadow-[0_0_20px_purple]'
            }`}
            onClick={() => {
              navigate('/');
              contactUsRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>
                Contact
            </li>
            <li 
             className={`rounded-box rounded-full w-20 p-4 cursor-pointer hover:bg-purple-400 py-3 text-sm font-semibold text-white ${pathMatchRoute("/sign-in") && "text-purple-300 shadow-[0_0_20px_purple]"}`} 
             onClick={() => navigate("/sign-in")}>
                Login
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
  }
