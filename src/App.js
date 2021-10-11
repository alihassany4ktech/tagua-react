import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "react-image-gallery/styles/css/image-gallery.css";
import VerifyEmail from "./Componenets/Auth/VerifyEmail";
import VerifyOtp from "./Componenets/Auth/VerifyOtp";
import ResetPassword from "./Componenets/Auth/ResetPassword";
import Invoice from "./Componenets/Account/orders/Invoice";
import Router from "./routes";
import ScrollToTop from "./Componenets/ScrollToTop";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Router />
    </>


  );
}

export default App;
