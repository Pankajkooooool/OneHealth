import {React ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/Logo.png'
const Navbar = ({updateAuth}) => {
  const navigate = useNavigate()
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    
    <>
    
     <div className="flex items-center justify-between  border-gray-400 py-16 md:py-2 px-3 md:px-">
      <a href="/" className='h-4 w-4 pt-2 md:h-14 md:w-64 cover'>
        <img src={Logo} className='h-12' alt="logo" />
        {/* <span className='text-4xl'>One Health</span> */}
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className=" border-gray-400 my-8 uppercase">
                <button onClick={()=>{
                  localStorage.removeItem("token");
                  localStorage.removeItem("userid");
                  updateAuth(false)
                  navigate('/login', { replace: true });
                  console.log("Logged out succesfully")
                }}  >Logout</button>
              </li>
             
              
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <button onClick={()=>{
                  localStorage.removeItem("token");
                  console.log("Logged out succesfully")
                  updateAuth(false)
                  navigate('/login', { replace: true });
                }}>Logout</button>
          </li>
         
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>

  </>
  )
}

export default Navbar