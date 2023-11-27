import React from 'react'
import feat1 from "../assets/feat1.avif"
import feat2 from "../assets/feat2.jpg"
import feat3 from "../assets/feat3.avif"
import feat4 from "../assets/feat4.avif"
import shield from "../assets/shield.png"
import cardio from "../assets/cardio.png"
import injection from "../assets/injection.png"


const Home = () => {
  return (
    <div>
       
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 h-80">
              <h2 className="max-w-screen mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Empowering Healthcare, 
 
                <div className="card py-3">
  <div className="loader">
    <p>Empowering</p>
    <div className="words">
      <span className="word">Lives</span>
      <span className="word">Wellbeing</span>
      <span className="word">Goodwill</span>
      <span className="word">People</span>
      <span className="word">People</span>

    </div>
  </div>
</div>

               
              
              
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-50 md:text-lg">
              Your Comprehensive Health Record - One Patient, One File.
              </p>
             
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
    <section className="text-gray-900  bg-gray-200 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Key Features</h1>
        <div className="h-1 w-20 bg-sky-500 rounded"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
             
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Unified Health Records</h2>
          <img className="h-48 rounded-2xl w-full object-cover object-center mb-6" src={feat2} alt="content" />
         
          <p className="leading-relaxed text-base">Access your entire medical history seamlessly.</p>
        </div>
      </div>
      
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
       

             
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4"> Telemedicine Integration</h2>
          <img className="h-48 rounded-2xl w-full object-cover object-center mb-6" src={feat3} alt="content" />
         
          <p className="leading-relaxed text-base">Enhancing consultations with comprehensive health insights.</p>
        </div>
      </div>
      
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
      
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">   Research and Insights</h2>
          <img className="h-48 rounded-2xl w-full object-cover object-center mb-6" src={feat4} alt="content" />

          <p className="leading-relaxed text-base">         
Contributing to medical research for a healthier future.</p>
        </div>
      </div>
      

      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
             
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Emergency Response</h2>
          <img className="h-48 rounded-2xl w-full object-cover object-center mb-6" src={feat1} alt="content" />
         
          <p className="leading-relaxed text-base">Swift and accurate information for life-saving interventions.</p>
        </div>
      </div>
      <a href='/login' class="text-white bg-sky-500 border-0 py-2 px-8 mt-8 mx-auto focus:outline-none hover:bg-blue-600 rounded text-lg">Center Login</a>
    
    </div>
  </div>
</section>
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
  <h1 className='text-3xl text-white pb-12'>Benefits</h1>

    <div className="flex flex-wrap justify-center -m-4">
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-contain object-center p-8" src={cardio} alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xl  title-font font-bold text-gray-100 text-center  mb-1">Improved cardiac care</h2>
          
            
           
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-contain object-center p-8" src={injection} alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xl  title-font font-bold text-gray-100 text-center  mb-1">Accurate diagnoses</h2>
                  
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-contain object-center p-8" src={shield} alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xl  title-font font-bold text-gray-100 text-center  mb-1">Enhanced data security</h2>
                 
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home