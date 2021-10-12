import React from "react";
import { BrowserRouter, NavLink, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import "./account.css";
import Order from "./orders/Order";
import Address from "./Addresses/Address";
import PaymentMethod from "./paymentMethod/PaymentMethod";
import AccountDetail from "./accountDetail/AccountDetail";
import WishList from "./wishList/WishList";
import Download from "./download/Download";
import OrderView from "./orders/OrderView";
import Pay from "./orders/Pay";
import AddPaymentMethod from "./paymentMethod/AddPaymenyMethod";
import Home from "../Frontend/Home/Home";
import Login from "../Frontend/Auth/Login";

const Account = () => {

      return (
            <>
                  <BrowserRouter>


                        {/* componenet  */}
{/* 
                        <Switch>
                              <Route exact path="/account" component={Dashboard} />
                              <Route exact path="/orders" component={Order} />
                              <Route exact path="/product-view" component={OrderView} />
                              <Route exact path="/pay" component={Pay} />
                              <Route exact path="/download" component={Download} />
                              <Route exact path="/addresses" component={Address} />
                              <Route exact path="/payment-method" component={PaymentMethod} />
                              <Route exact path="/add-payment-method" component={AddPaymentMethod} />
                              <Route exact path="/account-details" component={AccountDetail} />
                              <Route exact path="/wish-list" component={WishList} />
                              <Route exact path="/" component={Login} />


                        </Switch> */}





                  </BrowserRouter>
            </>
      );
}

export default Account;