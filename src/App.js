import React from "react";
import Login from "./Componenets/Auth/Login";
import MainDahsboard from "./Componenets/Dashboard/MainDashboard";
import { Switch, Route, Redirect } from "react-router";
import Signup from "./Componenets/Auth/Signup";
import Home from "./Componenets/Frontend/Home/Home"; 
import "bootstrap-icons/font/bootstrap-icons.css";
const App = () => {
  return (
    <>
      <Switch >
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={MainDahsboard} />
        <Route exact path="/home" component={Home} />
        <Redirect to="/" /> 
      </Switch>
    </>


  );
}

export default App;
