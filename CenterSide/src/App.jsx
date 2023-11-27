import {Routes,Route, Navigate} from "react-router-dom"
import "./App.css";
import  Home  from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Operations from "./pages/Operations";

import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import { useState } from "react";
import UserRegister from "./pages/UserRegister";
import { Search } from "./pages/Search";


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
  <Navbar updateAuth={updateAuth} />
  <Routes>
    <Route path="/" element={ <Home  />} />
    <Route path="/operations" element={(isAuth ||validateAuth(x)) ? <Operations  />: <Navigate to='/' />} />
    <Route path="/home" element={(isAuth ||validateAuth(x)) ? <Search  />: <Navigate to='/' />} />
    <Route path="/login" element={(validateAuth(x)) ?<Navigate to='/' /> : <Login updateAuth={updateAuth}/>  } />
    <Route path="/signin" element={(isAuth ||validateAuth(x))?<Navigate to='/' />: <Signin  updateAuth={updateAuth}/> } />
    <Route path="/user-register" element={<UserRegister  updateAuth={updateAuth}/> } />
   
  </Routes>
  <Footer />
    </>
  );
}

export default App;
