import React, { useState } from 'react';
import './MenuBarDropDown.css';
import OutsideClickHandler from 'react-outside-click-handler';
const MenuBarDropDown = (props) => {
    const [name, setName] = useState(props.title); 
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]); 
    const toggle = () => setOpen(!open);  
    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            if (!props.multiSelect) {
                setSelection([item]);
            } else if (props.multiSelect) {
                setSelection([...selection, item]);
            }  
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            );
            setSelection([...selectionAfterRemoval]); 
        }
        setOpen(false);
    }

    function isItemInSelection(item) {
        if (selection.some(current => current.id === item.id)) {
            return true;
        }
        return false;
    }
    return (
        <>
            <OutsideClickHandler 
                onOutsideClick={() => {
                    setOpen(false);
                }}
            >
                <div className="dd-m-wrapper"  onKeyPress={() => toggle(!open)}
                        onClick={() => toggle(!open)} >
                    <div 
                        className="dd-m-header text-uppercase"
                       
                    >
                        <div className="dd-m-header__title">
                            <p className="dd-header__title--bold mx-2">{name}</p>
                        </div>
                        <div className="dd-m-header__title">
                            <p className='dd-header__title--bold'>{open ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i>}</p>
                        </div>
                    </div>
                    {open && props.items && (
                        <ul className="dd-m-list">
                            {props.items.map(item => (
                                <li className="dd-list-item text-uppercase" key={item.id}>
                                    <span className={isItemInSelection(item) ? 'list-item-span active' : 'list-item-span'} onClick={() => handleOnClick(item)}>
                                        <span>{item.value}</span> 
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </OutsideClickHandler>
        </>
    );
}

export default MenuBarDropDown;