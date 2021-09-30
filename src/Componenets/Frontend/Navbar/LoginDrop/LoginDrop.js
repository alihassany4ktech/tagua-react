import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './LoginDrop.css';
const LoginDrop = (props) => {
    const [open, setOpen] = useState(false);
    const LoginDropMenu = (props) => {
        return (
            <div className='login-drop-wrapper'>
                <div className='card p-2 rounded-0'> 

                    <button onClick={() => setOpen(false)} className='btn bg-yellow rounded-0 w-100'>Login</button>
                    <button onClick={() => setOpen(false)} className='btn bg-yellow rounded-0 w-100 mt-2'>Demo</button>

                </div>

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