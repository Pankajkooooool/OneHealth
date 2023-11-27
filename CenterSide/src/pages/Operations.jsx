import React from 'react'
import { useState } from 'react';

const Operations = () => {
    const [condition, setCondition] = useState('');
    const [description, setDescription] = useState('');
    const [directions, setDirections] = useState('');
    const [adhaar,setAdhaar] = useState('');

  function clearall(){

    document.getElementById('createform').reset();
    
  }

    const handleCreatePatientRecord = async () => {
        try {
            // Get the authorization token from local storage
            const authToken = localStorage.getItem('token');
      
            // Set up the headers
            const headers = new Headers({
              'Accept': '*/*',
              'Authorization': authToken ? `Bearer ${authToken}` : '',
              'Content-Type': 'application/json',
            });
      
            // Fetch options for GetUserId function
            const getUserIdOptions = {
              method: 'GET',
              headers: headers,
            };
      
            // Fetch userId using GetUserId function
            const searchid = adhaar; // Assuming adhaar is defined somewhere
            const userIdResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${searchid}`, getUserIdOptions);
            const userIdData = await userIdResponse.json();
            const userId = userIdData[0]._id;
      
            // Set up the fetch options for creating a patient record
            const createRecordOptions = {
              method: 'POST',
              headers: headers,
              body: JSON.stringify({
                Condition: condition,
                Description: description,
                Directions: directions,
                userinfo: adhaar,
                userId: userId,
              }),
            };
      
            // Fetch request to create a patient record
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/create`, createRecordOptions);
      
            if (response.ok) {
              const createdPatientRecord = await response.json();
              console.log('Patient record created:', createdPatientRecord);
              alert("Record Successfully Created",createdPatientRecord);
              clearall();
            } else {
              console.error('Failed to create patient record');
             
            }
          } catch (error) {
            console.error('Error creating patient record:', error);
          }
         
        };
  return (
    <>
    <div className="text-center ">
       Add a Record
    </div>


    <form id='createform' className='container px-4 md:px-24 py-14 md:py-24'>
    <div   className="grid gap-6 mb-6 md:grid-cols-2">
      
   
        <div>
            <label for="visitors"   className="block mb-2 text-sm font-medium text-gray-900  ">Enter Adhaar</label>
            <input type="text" id="visitors"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500    block w-full p-2.5 " placeholder="000-000-0000" required onChange={(e) => setAdhaar(e.target.value)}/>
        </div>
        {/* <div>
            <label for="website"   className="block mb-2 text-sm font-medium text-gray-600  ">Corresponding UserId</label>
            <input type="text" id="website"   className="bg-gray-300 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500    block w-full p-2.5 " required/>
        </div> */}
        <div>
            <label for="phone"   className="block mb-2 text-sm font-medium text-gray-900  ">Health Condition Name</label>
            <input type="tel" id="phone"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500    block w-full p-2.5" placeholder="Enter The health Conditon" required onChange={(e) => setCondition(e.target.value)}/>
        </div>
        
    </div>
    <div   className="mb-6">
        <label for="Description"   className="block mb-2 text-sm font-medium text-gray-900  ">Description</label>
        <textarea type="text" id="email"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500    block w-full p-2.5 " placeholder="A Suitable Description" required onChange={(e) => setDescription(e.target.value)}></textarea>
    </div> 
    <div   className="mb-6">
        <label for="Description"   className="block mb-2 text-sm font-medium text-gray-900  ">Enter Directions </label>
        <textarea type="text" id="email"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500    block w-full p-2.5 " placeholder="An information worth noting" required onChange={(e) => setDirections(e.target.value)}></textarea>
    </div> 
  
   
    <button type="submit"   className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center " onClick={(e)=>{
        e.preventDefault()
        handleCreatePatientRecord();
    }}>Create Record</button>
</form>


    
    </>
  )
}

export default Operations