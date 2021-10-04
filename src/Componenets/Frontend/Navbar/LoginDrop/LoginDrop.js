import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './LoginDrop.css';
import { Link } from 'react-router-dom';
const LoginDrop = (props) => {
    const [open, setOpen] = useState(false);
    const closeHandler = () => {
        setOpen(false);
    }
    const LoginDropMenu = (props) => {
        return (
            <div className='login-drop-wrapper'>
                <ul className="login-drop-ul">
                    <li className="login-drop-item">
                        <Link exact to='/account'>
                            <span className='login-item-span' onClick={() => closeHandler()}>
                                <span><i className="bi bi-person-fill"></i> Account</span>
                            </span>
                        </Link>

                        <span className='login-item-span' onClick={() => closeHandler()}>
                            <span><i className="bi bi-person-fill"></i> Register</span>
                        </span>
                        <span className='login-item-span' onClick={() => closeHandler()}>
                            <span><i className="bi bi-box-arrow-right"></i> Login</span>
                        </span>
                    </li>
                </ul>

            </div>
        )
    }

    return (
        <>
            <OutsideClickHandler
                onOutsideClick={() =>
                    setOpen(false)
                }
            >
                <span type="button" onClick={() => setOpen(!open)} className='toolbar_nav_icon_span mx-3'>
                    <i className='bi bi-person'></i>
                </span>
                {open && <LoginDropMenu />}
            </OutsideClickHandler>
        </>
    );
}

export default LoginDrop;