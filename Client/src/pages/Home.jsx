import React, { useEffect, useState } from 'react'
import HealthRecords from '../components/HealthRecords';
import { Link } from 'react-router-dom';
//Get request htmlFor user inhtmlFormation here

export const Home = () => {
  
  const [data, setData] = useState([]);
  const [searchId, setsearchId] = useState('')
  
  
    const fetchData = async () => {
      const searchid = searchId
      try {
        // Get the authorization token from local storage
        const authToken = localStorage.getItem('token');

        // Set up the headers
        const headers = new Headers({
          'Accept': '*/*',
          'Authorization': authToken ? `Bearer ${authToken}` : '', 
        });

        // Set up the fetch options
        const options = {
          method: 'GET', // Adjust the method as needed
          headers: headers,
        };

        // Make the fetch request
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/${searchid}/get`, options);
        
        // Parse the response as JSON
        const jsonData = await response.json();

        // Update the state with the fetched data
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   //Funciton call fetchData();
  
  return (<>
    <div className=''>
    <div className="text-4xl text-center pt-6 px-2">Hospitals Side - One Health</div>

    <section className="text-gray-600 body-font">
  <div className="container px-5 pt-24 pb-10 mx-auto">
    {/* <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
    </div> */}
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <label for="full-name" className="leading-7 text-sm text-gray-600">Enter Adhaar Number</label>
        <input type="text" id="full-name" name="Adhaar" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>setsearchId(e.target.value)}/>
      </div>
      
      <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={fetchData}>Search</button>
    </div>
  </div>
</section>
     <section className="text-gray-600 body-font overflow-hidden">
        
  <div className="container md:px-5 py-4 mx-auto">
    <div className="flex flex-wrap justify-center   md:-mx-12">

    {data.map(item => (<HealthRecords item={item} />))} 
      
    
    </div>
  </div>
</section>
     <div className='container text-center flex justify-center '> <Link to="/operations">operations</Link></div>
    </div>
</>
  )
}
