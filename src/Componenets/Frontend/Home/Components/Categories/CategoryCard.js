import React from 'react'
import './Categories.css';
const CategoryCard = (props) => {

    return (
        <>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-4">
                <div className='card category-card border-0 rounded-15 mx-auto p-0'>
                    <img src={props.imgSource} alt="item image" />
                    <button className='btn w-100 bg-yellow text-white'>{props.category}</button>
                </div>
            </div>
        </>
    );
}

export default CategoryCard;