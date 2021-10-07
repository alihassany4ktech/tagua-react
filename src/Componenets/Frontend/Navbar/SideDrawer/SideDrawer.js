import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ContactItemGroup from "../ContactItemGroup"; 
import ProductMenus from "../ProductMenus";
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
            <Link to="/">
              <img src='assets/images/app-logo.png' alt='brand logo'></img>
            </Link>
          </div>
          <div className='text-center mt-4'> 
            <Button
              style={{
                width: '205px',
                height: '47px',
                borderRadius: 0,
                backgroundColor: "#E8C21E",
                color: '#000000',
                fontSize: "16px",
                fontFamily: 'inherit',
                fontWeight: '600',
                textTransform: 'none'
              }}
              variant="contained"
            >
              Access Dealer Area
            </Button> 
          </div>
          <div className='toolbar_search_wrapper my-4'>
            <SearchSelect />
          </div>
          <ProductMenus />

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