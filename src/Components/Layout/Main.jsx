import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const Main = () => {
  const location = useLocation();
  const login = location.pathname  === "/login" 
  const register = location.pathname  === "/register"
  const forgot = location.pathname  === "/forgotpassword"
  return (
    <div>
      {login || <Navbar /> && register || <Navbar/> && forgot || <Navbar/>}
   

      <Outlet />
      {login ||   <Footer /> && register || <Footer/> && forgot || <Footer/>}
      
    
    </div>
  );
};

export default Main;
