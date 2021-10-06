import React, { useState } from 'react';
import './FilterMenu.css'; 

const FilterMenu = (props) => {
    const [name, setName] = useState(props.title);
    const [open, setOpen] = useState(props.open);
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
    }

    function isItemInSelection(item) {
        if (selection.some(current => current.id === item.id)) {
            return true;
        }
        return false;
    }
    return (
        <>
            <div className="filter-menu-wrapper">
                <div
                    className="filter-menu-header text-uppercase"
                    onKeyPress={() => toggle(!open)}
                    onClick={() => toggle(!open)}
                >
                    <div className="filter-menu-title">
                        <p className="filter-menu--bold">{name}</p>
                    </div>
                    <div className="filter-menu-title">
                        <p className='filter-menu-title'>{open ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i>}</p>
                    </div>
                </div>
                {open && props.items && (
                    <ul className="filter-menu-list">
                        {props.items.map(item => (
                            <li className="filter-menu-list-item text-uppercase" key={item.id}>
                                <span className={isItemInSelection(item) ? 'filter-menu-item-span active' : 'filter-menu-item-span'} onClick={() => handleOnClick(item)}>
                                    <span>{item.value}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </>
    )
}

export default FilterMenu

