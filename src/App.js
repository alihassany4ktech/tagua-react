import React from "react";
import Login from "./Componenets/Auth/Login";
import MainDahsboard from "./Componenets/Dashboard/MainDashboard";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Signup from "./Componenets/Auth/Signup";
import Home from "./Componenets/Frontend/Home/Home";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "react-image-gallery/styles/css/image-gallery.css";
import VerifyEmail from "./Componenets/Auth/VerifyEmail";
import VerifyOtp from "./Componenets/Auth/VerifyOtp";
import ResetPassword from "./Componenets/Auth/ResetPassword";
import Invoice from "./Componenets/Account/orders/Invoice";
const App = () => {
  return (
    <BrowserRouter>
      <Switch >
        <Route exact path="/" component={Login} />
        <Route exact path="/invoice" component={Invoice} />
        <Route exact path="/verify-email" component={VerifyEmail} />
        <Route exact path="/verify-otp" component={VerifyOtp} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/dashboard" component={MainDahsboard} />
        <Route exact path="/home" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
