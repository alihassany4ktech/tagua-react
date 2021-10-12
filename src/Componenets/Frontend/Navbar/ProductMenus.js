import React from 'react';
import { Link } from 'react-router-dom'; 
import MenuBarDropDown from './MenuBarDropDown/MenuBarDropDown'; 
import { Button } from '@mui/material';
const ProductMenus = () => {
    return (
        <>
            <div className='menu-item-wrapper'>
                <MenuBarDropDown
                    title='Holsters'
                    items={[
                        { id: 1, value: '4 in 1 holsters' },
                        { id: 2, value: 'cross draw holsters' },
                        { id: 3, value: 'iwb/owh' },
                        { id: 4, value: 'owb/iwh' },
                        { id: 5, value: 'owb' },
                        { id: 6, value: 'sholder holsters' },
                    ]}
                />
            </div>
            <div className='menu-item-wrapper'>
                <MenuBarDropDown
                    title='Tagua gun leather'
                    items={[
                        { id: 1, value: '4 in 1 holsters' },
                        { id: 2, value: 'cross draw holsters' },
                        { id: 3, value: 'iwb/owh' },
                        { id: 4, value: 'owb/iwh' },
                        { id: 5, value: 'owb' },
                        { id: 6, value: 'sholder holsters' },
                    ]}
                />
            </div>
            <div className='menu-item-wrapper h-100'>
                <Button
                    component={Link}
                    to="/allproducts"
                    style={{
                        borderRadius: 0,
                        backgroundColor: "#E8C21E",
                        color: '#000000',
                        fontSize: "16px",
                        fontFamily: 'inherit',
                        fontWeight: '600',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    All Products
                </Button>
            </div>
            <div className='menu-item-wrapper h-100'>
                <Button
                    component={Link}
                    to="/sale"
                    style={{
                        borderRadius: 0,
                        backgroundColor: "#E8C21E",
                        color: '#000000',
                        fontSize: "16px",
                        fontFamily: 'inherit',
                        fontWeight: '600',
                        height: '100%',
                        width: '100%'
                    }}
                >
                    Sale
                </Button>
            </div>

        </>
    );
}
export default ProductMenus;