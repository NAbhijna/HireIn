import React from 'react';
import { useState } from 'react';
import {
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
} from "@material-tailwind/react";
import {FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


  
export default function SignIn() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const { fullName, email, password, confirmPassword, phoneNumber } = formData;
  const [showPassword, setShowPassword]=useState(false);
  const [type, setType] = React.useState("Recruiter");
  
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  

  return (
    <section className="flex justify-center items-center h-[80vh] mt-10  ">
      {/* Image container (unchanged) */}
     

      {/* Form container */}
      <Card className="w-full max-w-[24rem] shadow-[0_0_200px_purple] backdrop-filter backdrop-blur-md bg-transparent rounded-lg">
      <CardBody className="bg-transparent flex flex-col py-2">
        <Tabs value={type} className="overflow-visible">
          <TabsHeader className="relative z-0 bg-purple-70">
            <Tab value="card" className="text-purple-300" >
              Candidate
            </Tab>
            <Tab value="paypal" className="text-purple-300" >
              Recruiter
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === "card" ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "card" ? 400 : -400,
              },
            }}
          >
            </TabsBody>
            </Tabs>
            

      {/* Form container */}
      <div className="w-full h-full px-8 py-8 flex flex-col items-center justify-center z-30 ">
        <h1 className="text-white text-3xl text-center mb-6 font-bold">Sign Up</h1>
        <form className="w-1/3 px-8 py-6 flex flex-col items-center  text-white rounded-lg ">
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
            
            <div className="relative mb-">
           
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            className="border-b border-white border-opacity-30 bg-transparent p-2 placeholder:text-white outline-none rounded-full transition ease-in-out mt-4"       
           />
            {showPassword ?  (<FaEyeSlash className="absolute right-3 top-7 text-x1 cursor-pointer"
          onClick={()=>setShowPassword
          ((prevState)=>!prevState)}/>):(<FaEye className="absolute right-3 top-7 text-x1 cursor-pointer"onClick={()=>setShowPassword
            ((prevState)=>!prevState)}/>)}
        </div>
            
          <div className='relative'>
          <input
            type={showPassword ? "text" : "confirmPassword"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            placeholder="Confirm Password"
            className="border-b border-white border-opacity-30 bg-transparent p-2 placeholder:text-white outline-none rounded-full transition ease-in-out mt-4"
            />
            {showPassword ?  (<FaEyeSlash className="absolute right-3 top-7 text-x1 cursor-pointer"
            onClick={()=>setShowPassword
            ((prevState)=>!prevState)}/>):(<FaEye className="absolute right-3 top-7 text-x1 cursor-pointer"onClick={()=>setShowPassword
              ((prevState)=>!prevState)}/>)}
               
          </div>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            placeholder="Phone Number"
            className="border-b border-white border-opacity-30 bg-transparent p-2 placeholder:text-white outline-none rounded-full transition ease-in-out mt-4"
            />
            
           <button type="submit" className="bg-purple-700 hover:bg-purple-300 w-[200px] text-white font-bold py-2 px-4 rounded-full mt-5">
            Sign Up
          </button> 
          <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mt-5 mb-1">
            <p className="text-sm mb-2 ml-7">Have an account?
            <Link to="/sign-in" className="text-red-800 hover:text-red-900 transition duration-200 ease-in-out ml-1 mr-8">Log In
            </Link>
            </p>
            {/*<p>
              <Link to="/forgot-password"className=" text-blue-700 hover:text-blue-800
               transition duration-200 ease-in-out ml-3 text-sm">Forgot password?</Link>
            </p>*/}
          </div>

          
        </form>
      </div>
            

            </CardBody>
            </Card>
    </section>
  );
}
