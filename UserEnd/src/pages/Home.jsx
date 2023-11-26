import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

//Get request for user information here

export const Home = () => {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the authorization token from local storage
        const authToken = localStorage.getItem('token');
        const userId = localStorage.getItem('userid'); 
    
       
        const headers = new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authToken ? `Bearer ${authToken}` : '',
        });
    
       
        const options = {
          method: 'GET', 
          headers: headers,
        };
    
       
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/data/${userId}`, options);
    
        const jsonData = await response.json();
    
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
    
  }, []);
  function setAbsoluteElementHeight() {
    const bodyHeight = document.body.clientHeight;
    const absoluteElement = document.getElementById('absoluteElement');
    absoluteElement.style.height = `${bodyHeight-100}px`;
  }
  setInterval(() => {
    setAbsoluteElementHeight()
  }, 10000);
  return (
    <div className='overflow-hidden'>
     <section className="body-font overflow-hidden">
      <div id='absoluteElement' className=' md:hidden h-screen absolute  w-3/4  bg-sky-600 '></div>
        <div className="text-3xl text-left relative z-2 pt-6 px-2 text-white md:text-black px-6">User: {data[0]? data[0].userinfo : ""}</div>
  <div className="container md:px-5 py-24 mx-auto relative z-2">
    <div className="flex flex-wrap justify-center   md:-mx-12">
    {  data.map(item => (
        <Card key={item.id} item={item} />))
      }
      
    
    </div>
  </div>
</section>
     
    </div>

  )
}
