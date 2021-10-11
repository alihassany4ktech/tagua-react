import React from 'react'
import './Categories.css';
import CategoryCard from './CategoryCard';
const Categories = (props) => {
    const data = [
        { imgSource: 'https://www.taguagunleather.com/wp-content/uploads/2019/03/p_4_4_3_443-TWHS-H4-PINK-THE-PINK-4-IN-1-Open-Top-Holster.jpg', category: 'KYDEX HOLSTERS' },
        { imgSource: 'images/gun2.jpg', category: 'SHOULDERS HOLSTERS' },
        { imgSource: 'images/gun3.jpg', category: 'OPEN CARRY HOLSTRERS' },
        { imgSource: 'images/gun2.jpg', category: 'KYDEX HOLSTERS' },
        { imgSource: 'images/gun3.jpg', category: 'SHOULDERS HOLSTERS' },
        { imgSource: 'images/gun.jpg', category: 'OPEN CARRY HOLSTRERS' },
    ]
    return (

        <>
            <div className='row'></div>
            <div className='row bg-black'>

                <div className="category-wrapper">
                    <div className='row'>
                        <div className='col-sm-7 col-md-7 col-lg-5 my-5 mx-auto text-center'>
                            <h2 className='color-yellow'>Categories</h2>
                            <p className='color-yellow mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida porttitor lorem in blandit. Etiam id venenatis nisl.</p>
                        </div>
                        <div className='col-sm-10 mx-auto'>

                            <div className='container category-responsive-grid p-0'>
                                {
                                    data.map(item =>
                                        <CategoryCard
                                            imgSource={item.imgSource}
                                            category={item.category}
                                        />
                                    )
                                }
                            </div>
                        </div>

                        <span className='my-5'>&nbsp;</span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Categories;