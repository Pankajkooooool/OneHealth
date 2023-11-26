import React, { useState } from 'react'

const Card = ({item}) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div className='px-6 w-full md:w-1/2'>
    <div className="px-6 my-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-md flex flex-col  items-start shadow-lg">
 
  <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-">Condition : {item.Condition}</h2>
  <div class="flex-shrink-0 w-6 h-6 rounded-full  sm:mt-0 inline-flex items-center justify-center bg-sky-600 text-white relative z-1 title-font font-medium text-sm self-end cursor-pointer items-center -mr-8 -mt-1 " onClick={toggleExpansion}>&#9660;</div>
  <span className="inline- py-1 font-medium tracking-widest">{new Date(item.createdAt).toLocaleDateString('en-GB')}</span>

   {isExpanded? <p className="leading-relaxed mb-4 " >Description: {item.Description}</p> : ""}
  {isExpanded? <p className="leading-relaxed mb-4">Directions: {item.Directions?  item.Directions:"No Directions"}</p> : ""}
  
 
  
</div>
  </div>
  )
}

export default Card