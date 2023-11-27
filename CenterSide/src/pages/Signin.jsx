import React from 'react'
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Logo from "../assets/purple.png";
const Signin = ({isAuth,updateAuth}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');
  const [HospitalName, setHospitalName] = useState('')
  const [Address, setAddress] = useState('')
 
  const [phone, setphone] = useState()
  const navigate = useNavigate();


  const handleLogin = () => {
   
   if(Cpassword===password){
    handleLoginReq(email, password,HospitalName,Address,phone);
   }else{
    alert("Passwords Don't Match");
   }
  };

  
  async function handleLoginReq(email, password,HospitalName,Address,phone) {
    // Define the URL of your Node.js backend API endpoint
    const apiUrl =
    `${import.meta.env.VITE_BACKEND_URL}/auth/register` ;
  
    // Create a request object with the necessary headers and the POST method
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer'
      },
      body: JSON.stringify({ email, password,HospitalName,Address,phone }),
    };
  
    // Send the login request
    await fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Authentication failed');
        }
        return response.json();
      })
      .then((data) => {
        //save to local storage
        alert('Hospital Account successfully Created', data);
        console.log(data)
        localStorage.setItem("token",data.token);
        updateAuth(true);
        navigate('/home', { replace: true });
       
      })
      .catch((error) => {
        //show appropriate error
        console.error('Error:', error);
        alert("Not able to Create A Hosptial Account")
        // navigate('/signin', { replace: true });
        
      });
  }
  return (
    <section className="relative z-2">
        <div className="md:grid md:grid-cols-1 grid-cols-1">
          
          <div className="min-h-screen   flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
           
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Hospital/Clinic - Sign Up
              </h2>
            </div>
            <div className="flex justify-center">
              {" "}
              <span className="relative px-1 w-24">
                <div className="absolute inset-x-0 top-1 bottom-0 h-3 transform -skew-x-[30deg] bg-blue-600" />
              </span>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mx-4 ">
              <div className="bg-blue-200 py-8 px-4 shadow sm:rounded-lg sm:px-10  relative z-4">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <div className="mt-1">
                      <input
                        id="fname"
                        name="HospitalName"
                        type="text"
                       
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 bord border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
                        placeholder="Enter Hospital/Clinic Name"
                        onChange={(e) => setHospitalName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-1">
                      <input
                        id="lname"
                        name="Address"
                        type="number"
                       
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 bord border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
                        placeholder="Enter Full Hospital Address"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
                        placeholder="Enter Hospital email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

    
                  
                 
                  <div>
                    <div className="mt-1">
                      <input
                        id="phone"
                        name="phone"
                        type="number"
                       
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 bord border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
                        placeholder="Enter Phone Number"
                        onChange={(e) => setphone(e.target.value)}
                      />
                    </div>
                  </div>
                
                  <div>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                       
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 bord border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
                        placeholder="Enter  password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-1">
                      <input
                        id="cpassword"
                        name="cpassword"
                        type="password"
                       
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 bord border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
                        placeholder="Confirm password"
                        onChange={(e) => setCPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <div className="text-sm">
                      <div
                        href="#"
                        className="font-medium text-gray-900 "
                      >
                        Already a User? <Link to="/login" replace={true} className='text-sky-600'>Login</Link> 
                      </div>
                    </div>
                    </div>

                    
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
                      onClick={(e)=>{
                        e.preventDefault();
                        handleLogin()}}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Signin