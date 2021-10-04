import React, { useState } from 'react'; 
import './MenuDrop.css';
import OutsideClickHandler from 'react-outside-click-handler'; 

function Dropdown({ title, items, styles, width,multiSelect = false }) {
    const [name, setName] = useState(title); 
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]); 
    const toggle = () => setOpen(!open); 

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            if (!multiSelect) {
                setSelection([item]);
            } else if (multiSelect) {
                setSelection([...selection, item]);
            }
            setName(item.value); 
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            );
            setSelection([...selectionAfterRemoval]);
            setName(title); 
        }
    }

    function isItemInSelection(item) {
        if (selection.some(current => current.id === item.id)) {
            return true;
        }
        return false;
    }

    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                setOpen(false);
            }}
        >
            <div className="dd-wrapper" style={styles}>
                <div
                    tabIndex={0}
                    className="dd-header" 
                    onKeyPress={() => toggle(!open)}
                    onClick={() => toggle(!open)}
                    style={{width:width}}
                >
                    <div className="dd-header__title">
                        <p className="mx-2">{name}&nbsp;{open ? <i class="bi bi-caret-up"></i> : <i class="bi bi-caret-down"></i>}</p>
                    </div>
                    {/* <div className="dd-header__title">
                        <p className='dd-header__title--bold'>{open ? <i class="bi bi-caret-up"></i> : <i class="bi bi-caret-down"></i>}</p>
                    </div> */}
                </div>
                {open && (
                    <ul className="dd-list">
                        {items.map(item => (
                            <li className="dd-list-item" key={item.id}>
                                <span className={isItemInSelection(item) ? 'list-item-span active' : 'list-item-span'} onClick={() => handleOnClick(item)}>
                                    <span>{item.value}</span> 
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </OutsideClickHandler>

    );
}
export default Dropdown;