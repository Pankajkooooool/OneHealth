import React from 'react'

const Report = ({item}) => {
  return (
    <div key={item._id} className='px- w-full '>
    <div className="px-6  py-   rounded flex flex-row  gap-7 justify-around items-center">
  
  <h2 className="sm:text-2xl text-xl title-font font-medium w-3/4 text-gray-900 mt- mb-4">{item.Condition}</h2>
  <span className="inline- py-1 px-2 rounded  text-gray-900 text-sm font-medium tracking-widest">{new Date(item.createdAt).toLocaleDateString('en-GB')}</span>
   
 
  
</div>
  </div>
  )
}

export default Report