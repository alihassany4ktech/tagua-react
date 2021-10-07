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
                        <Link exact to='/register'>
                            <span className='login-item-span' onClick={() => closeHandler()}>
                                <span><i className="bi bi-person-fill"></i> Register</span>
                            </span>
                        </Link>
                        <Link exact to='/login'>
                            <span className='login-item-span' onClick={() => closeHandler()}>
                                <span><i className="bi bi-box-arrow-right"></i> Login</span>
                            </span>
                        </Link>
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
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                </span>
                {open && <LoginDropMenu />}
            </OutsideClickHandler>
        </>
    );
}

export default LoginDrop;