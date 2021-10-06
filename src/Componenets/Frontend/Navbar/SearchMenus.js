import React from 'react'
import MenuDrop from './MenuDrop/MenuDrop';
const SearchMenus = () => {

    const items = [
        {
            id: 1,
            value: 'item 1 has name item 1 has name',
        },
        {
            id: 2,
            value: 'item 2 ',
        },
        {
            id: 3,
            value: 'item 3',
        },
        {
            id: 4,
            value: 'item 4',
        },
        {
            id: 5,
            value: 'item 5',
        },
        {
            id: 6,
            value: 'item 6',
        },
    ];
    return (
        <>
            <div className='search-item'>
                <input type="email" className="form-control border-0 rounded-0 my-auto px-3" aria-describedby="emailHelp" placeholder="Search the Holster by Gun" />
            </div>
            <div className='search-item'>
                <MenuDrop title='Guns' items={items} width='125px' />
            </div>
            <div className='search-item'>
                <MenuDrop title='Model' items={items} width='125px' />
            </div>
            <div className='searchBar_btn_wrapper'>
                <button className='btn'>Search</button>
            </div>
        </>
    );
}

export default SearchMenus
