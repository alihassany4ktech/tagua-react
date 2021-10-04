import React from 'react'
import './Categories.css';
const CategoryCard = (props) => {

    return (
        <>
            {/* <div className="col-xl-4 col-lg-4 col-md-5 col-sm-8 col-xs-12 mx-auto my-3"> */}
                <div className='card category-card border-0 rounded-15 mx-auto p-0'>
                    <img src={props.imgSource} alt="item image" className='img-fluid' />
                    <button className='btn w-100 py-2 bg-yellow text-white'>{props.category}</button>
                </div>
            {/* </div> */}
        </>
    );
}

export default CategoryCard;