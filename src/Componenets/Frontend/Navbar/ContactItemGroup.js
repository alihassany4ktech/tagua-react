import React from 'react'
import './Navbar.css';

const ContactItemGroup = (props) => {
    return (
        <span className='d-flex flex-row align-items-center nav-contact-span my-2'>
            <span className='icon-span'><i className={props.iconClass}></i></span>
            <p className='my-auto'>{props.content}</p>
        </span>
    )
}

export default ContactItemGroup;