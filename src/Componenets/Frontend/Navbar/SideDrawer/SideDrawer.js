import React from "react";
import { Link } from "react-router-dom";
import ContactItemGroup from "../ContactItemGroup";
import "./SideDrawer.css";
const SideDrawer = (props) => {

  const dataContact = [
    { iconClass: 'bi bi-telephone', content: '+1-866-233-44' },
    { iconClass: 'bi bi-envelope-open', content: 'hello@tagualeather.com' },
    { iconClass: 'bi bi-truck', content: 'Free Shipping' },
    { iconClass: 'bi bi-clock', content: '30 Days Money Back Gurrentee' },
    { iconClass: 'bi bi-person', content: '24/7 Customer Service' },
  ]

  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <>
      <div className={drawerClasses}>
        <div className='container-fluid'>
          <div className='drawer-logo text-center mt-5'>
            <Link to="/home">
              <img src='assets/images/app-logo.png' alt='brand logo'></img>
            </Link>
          </div>
          <div className='text-center my-4'>
            <span className='toolbar_yellow_btn'>
              <button className='btn bg-yellow'>Access Dealer Area</button>
            </span>
          </div>


          <div className='mt-4 pl-1'>
            {
              dataContact.map(item =>
                <ContactItemGroup
                  iconClass={item.iconClass}
                  content={item.content}
                />
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};


export default SideDrawer;