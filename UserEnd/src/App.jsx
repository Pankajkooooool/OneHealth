import {Routes,Route, Navigate} from "react-router-dom"
import "./App.css";
import { Home } from "./pages/Home";
import Login from "./pages/Login";


import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import { useState } from "react";


function App() {
   
  const [isAuth, setisAuth] = useState(false)
  const updateAuth = (newAuth) =>{
    setisAuth(newAuth);
    
  }
  let x = localStorage.getItem("token");
  function validateAuth(x){
    
    if(!x || x==null || x==undefined){
     
      return false
    }else{
     
      return true;
    }
  }
  
  
 
 



  return (
  <>
  <Navbar updateAuth={updateAuth} isAuth={isAuth}/>
  <Routes>
    <Route path="/" element={(validateAuth(x)) ? <Home  />: <Navigate to='/login' />} />
    <Route path="login" element={(validateAuth(x)) ?<Navigate to='/' /> : <Login updateAuth={updateAuth}/>  } />
    
   
  </Routes>
  <Footer />
    </>
  );
}

export default App;
