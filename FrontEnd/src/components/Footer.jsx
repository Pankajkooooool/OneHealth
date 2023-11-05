import React from 'react'
// import Logo from '../assets/mmfooter.png'

const Footer = () => {
  return (
    <div><footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      {/* <img className='h-24 ' src={Logo} alt="logo" /> */}
      <span className='text-4xl'>One Health</span>
        
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 One Health
        <div className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">All Rights Reserved</div>
      </p>
      
    </div>
  </footer></div>
  )
}

export default Footer