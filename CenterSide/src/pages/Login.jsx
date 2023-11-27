import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/purple.png";
const Login = ({isAuth,updateAuth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Validate input, if needed
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Call the login function with the email and password
    handleLoginReq(email, password);
  };

  async function handleLoginReq(email, password) {
    // Define the URL of your Node.js backend API endpoint
    
    const apiUrl = 
    `${import.meta.env.VITE_BACKEND_URL}/auth/hospital-login`  ;

    // Create a request object with the necessary headers and the POST method
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer",
      },
      body: JSON.stringify({ email, password }),
    };

    // Send the login request
    
    await fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Authentication failed");
        }
        return response.json();
      })
      .then((data) => {
        //save to local storage
        alert("Login successful", data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("uid", data.user.lastName);
        console.log(data.user.lastName)
        updateAuth(true);
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        //show appropriate error
        console.error("Error:", error);
        alert("Incorrect Username Or password");
        navigate("/login", { replace: true });
      });
      console.log("sending req after thsi")
  }

  return (
    <section className="relative z-2">
      <div className="md:grid md:grid-cols-2 grid-cols-1">
        <div className="collapse bg-sky-600 md:visible"></div>
        <div className="min-h-screen   flex flex-col justify-center sm:px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Hospital/Clinic - Login
            </h2>
          </div>
          <div className="flex justify-center">
          
            <span className="relative px-1 w-20">
              <div className="absolute inset-x-0 top-1 bottom-0 h-3 transform -skew-x-[30deg] bg-sky-600" />
            </span>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full  sm:max-w-md mx-4 ">
            <div className="bg-violet-200 py-8 shadow sm:rounded-lg sm:px-10  relative z-4 px-4 rounded">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
                      placeholder="Enter email address"
                      onChange={(e) => setEmail(e.target.value)}
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
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center"></div>

                  <div className="text-sm">
                    <div className="font-medium text-gray-900 ">
                      New Healthcare Center?{" "}
                      <Link
                        to="/signin"
                        replace={true}
                        className="text-sky-600"
                      >
                       Register Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogin();
                    }}
                  >
                    Log In
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
  );
};

export default Login;
