import React, { useEffect, useState } from 'react'

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
    
        // Make the fetch request
        const response = await fetch(`http://127.0.0.1:6001/users/data/${userId}`, options);
    
        // Parse the response as JSON
        const jsonData = await response.json();
    
        // Update the state with the fetched data
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
    
  }, []);
  return (
    <div className=''>
     <section className="text-gray-600 body-font overflow-hidden">
        <div className="text-4xl text-center pt-6 px-2">All your Information in one Place</div>
  <div className="container md:px-5 py-24 mx-auto">
    <div className="flex flex-wrap justify-center   md:-mx-12">
    {data.map(item => (
        <div key={item._id} className='px-6 w-full md:w-1/2'>
          <div className="px-6 my-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded flex flex-col  items-start">
        <span className="inline- py-1 px-2 rounded bg-indigo-200 text-indigo-600 text-xs font-medium tracking-widest">{new Date(item.createdAt).toLocaleDateString('en-GB')}</span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Condition : {item.Condition}</h2>
        <p className="leading-relaxed mb-">Description: {item.Description}</p>
        <p className="leading-relaxed mb-4">Directions: {item.Directions?  item.Directions:"No Directions"}</p>
        
       
        
      </div>
        </div>))}
      
    
    </div>
  </div>
</section>
     
    </div>

  )
}
