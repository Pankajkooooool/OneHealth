import React from 'react'

const HealthRecords = ({item}) => {
  return (
    <div key={item._id} className='px-6 w-full md:w-1/2'>
    <div className="px-6 my-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded flex flex-col  items-start">
  <span className="inline- py-1 px-2 rounded bg-indigo-200 text-indigo-600 text-xs font-medium tracking-widest">{new Date(item.createdAt).toLocaleDateString('en-GB')}</span>
  <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Condition : {item.Condition}</h2>
  <p className="leading-relaxed mb-">Description: {item.Description}</p>
  <p className="leading-relaxed mb-4">Directions: {item.Directions?  item.Directions:"No Directions"}</p>
  
 
  
</div>
  </div>
  )
}

export default HealthRecords