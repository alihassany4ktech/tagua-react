import React from 'react';
import './Filter.css';
import FilterMenu from './FilterMenu';
const Filter = (props) => {
    return (
        <>
            <FilterMenu
                title='Tagua gun leather'
                items={[
                    { id: 1, value: '4 in 1 holsters' },
                    { id: 2, value: 'cross draw holsters' },
                    { id: 3, value: 'iwb/owh' },
                    { id: 4, value: 'owb/iwh' },
                    { id: 5, value: 'owb' },
                    { id: 6, value: 'sholder holsters' },
                ]}
                open={true}
            />
            <FilterMenu
                title='Filter 2'
                items={[
                    { id: 1, value: '4 in 1 holsters' },
                    { id: 2, value: 'cross draw holsters' },
                    { id: 3, value: 'iwb/owh' },
                    { id: 4, value: 'owb/iwh' },
                    { id: 5, value: 'owb' },
                    { id: 6, value: 'sholder holsters' },
                ]}
            />
            <FilterMenu
                title='Color'
                items={[
                    { id: 1, value: '4 in 1 holsters' },
                    { id: 2, value: 'cross draw holsters' },
                    { id: 3, value: 'iwb/owh' },
                    { id: 4, value: 'owb/iwh' },
                    { id: 5, value: 'owb' },
                    { id: 6, value: 'sholder holsters' },
                ]}
            />
            <FilterMenu
                title='Size'
                items={[
                    { id: 1, value: '4 in 1 holsters' },
                    { id: 2, value: 'cross draw holsters' },
                    { id: 3, value: 'iwb/owh' },
                    { id: 4, value: 'owb/iwh' },
                    { id: 5, value: 'owb' },
                    { id: 6, value: 'sholder holsters' },
                ]}
            />
        </>
    )
}

export default Filter

