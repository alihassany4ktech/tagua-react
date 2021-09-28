import React from 'react'
import ContactItemGroup from './ContactItemGroup';
import './Navbar.css';

const ContactBar = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-black contact-bar'>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto d-flex flex-row justify-content-around'>
                        <div className='d-flex flex-row'>
                            <ContactItemGroup
                                iconClass='bi bi-telephone'
                                content='+1-866-233-44'
                            />
                            <ContactItemGroup
                                iconClass='bi bi-envelope-open'
                                content='hello@tagualeather.com'
                            />
                        </div>
                        <div className='d-flex flex-row'>
                            <ContactItemGroup
                                iconClass='bi bi-truck'
                                content='Free Shipping'
                            />
                            <ContactItemGroup
                                iconClass='bi bi-clock'
                                content='30 Days Money Back Gurrentee'
                            />
                            <ContactItemGroup
                                iconClass='bi bi-person'
                                content='24/7 Customer Service'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactBar;