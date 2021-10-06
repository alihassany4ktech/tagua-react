import React from "react";
import { Link } from "react-router-dom";
import ContactItemGroup from "../ContactItemGroup";
import MenuBarDropDown from "../MenuBarDropDown/MenuBarDropDown";
import SearchSelect from "../SearchSelect/SearchSelect";
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
          <div className='text-center mt-4'>
            <span className='toolbar_yellow_btn'>
              <button className='btn bg-yellow'>Access Dealer Area</button>
            </span>
          </div>
          <div className='toolbar_search_wrapper my-4'>
            <SearchSelect />
          </div> 
          <MenuBarDropDown
            title='Holsters'
            items={[
              { id: 1, value: '4 in 1 holsters' },
              { id: 2, value: 'cross draw holsters' },
              { id: 3, value: 'iwb/owh' },
              { id: 4, value: 'owb/iwh' },
              { id: 5, value: 'owb' },
              { id: 6, value: 'sholder holsters' },
            ]}
          />
          <MenuBarDropDown
            title='Tagua gun leather'
            items={[
              { id: 1, value: '4 in 1 holsters' },
              { id: 2, value: 'cross draw holsters' },
              { id: 3, value: 'iwb/owh' },
              { id: 4, value: 'owb/iwh' },
              { id: 5, value: 'owb' },
              { id: 6, value: 'sholder holsters' },
            ]}
          />
          <Link to="/allproducts">
            <div className='menu-item-wrapper bg-yellow'>
              <button className='btn text-black' to="/allproducts">ALL PRODUCTS</button>
            </div>
          </Link>
          <Link to="/allproducts">
            <div className='menu-item-wrapper bg-yellow'>
              <button className='btn text-black' to="/allproducts">SALE</button>
            </div>
          </Link>

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