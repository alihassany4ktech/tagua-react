import React from "react";
import Login from "./Componenets/Auth/Login";
import MainDahsboard from "./Componenets/Dashboard/MainDashboard";
import {  Route , BrowserRouter ,Routes} from "react-router-dom";
import Signup from "./Componenets/Auth/Signup";
import Home from "./Componenets/Frontend/Home/Home";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "react-image-gallery/styles/css/image-gallery.css";
import VerifyEmail from "./Componenets/Auth/VerifyEmail";
import VerifyOtp from "./Componenets/Auth/VerifyOtp";
import ResetPassword from "./Componenets/Auth/ResetPassword";
import Invoice from "./Componenets/Account/orders/Invoice";
import Router from "./routes";
const App = () => {
  return ( 
    <Router />


  );
}

export default App;
