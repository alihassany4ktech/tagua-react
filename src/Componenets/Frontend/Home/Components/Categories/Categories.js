import React from 'react'
import './Categories.css';
import CategoryCard from './CategoryCard';
const Categories = (props) => {
    const data = [
        { imgSource: 'images/gun.jpg', category: 'KYDEX HOLSTERS' },
        { imgSource: 'images/gun2.jpg', category: 'SHOULDERS HOLSTERS' },
        { imgSource: 'images/gun3.jpg', category: 'OPEN CARRY HOLSTRERS' },
        { imgSource: 'images/gun2.jpg', category: 'KYDEX HOLSTERS' },
        { imgSource: 'images/gun3.jpg', category: 'SHOULDERS HOLSTERS' },
        { imgSource: 'images/gun.jpg', category: 'OPEN CARRY HOLSTRERS' },
    ]
    return (
        <>
            <div className='row'>
                <div className="container-fluid bg-black category-wrapper">
                    <div className='col-sm-7 col-md-7 col-lg-5 my-5 mx-auto text-center'>
                        <h2 className='color-yellow'>Categories</h2>
                        <p className='color-yellow mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida porttitor lorem in blandit. Etiam id venenatis nisl.</p>
                    </div>
                    <div className='col-sm-10 mx-auto'>
                        <div className='row'>
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
                    <span className='m-5'>&nbsp;</span>
                </div>
            </div>

        </>
    );
}

export default Categories;