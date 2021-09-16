import React from 'react'
import './Categories.css';
import CategoryCard from './CategoryCard';
const Categories = (props) => {

    return (
        <>
            <div className='row'>
                <div className="container-fluid p-5 bg-black">
                    <div className='col-sm-7 col-md-7 col-lg-5 my-5 mx-auto text-center'>
                        <h2 className='color-yellow'>Categories</h2>
                        <p className='color-yellow mt-3'><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida porttitor lorem in blandit. Etiam id venenatis nisl.</small></p>
                    </div>
                    <div className='col-sm-10 mx-auto'>
                        <div className='row'>
                            <CategoryCard
                                imgSource="http://localhost:3000/images/gun.jpg"
                                category="KYDEX HOLSTERS"
                            />
                            <CategoryCard
                                imgSource="http://localhost:3000/images/gun2.jpg"
                                category="SHOULDERS HOLSTERS"
                            />
                            <CategoryCard
                                imgSource="http://localhost:3000/images/gun3.jpg"
                                category="OPEN CARRY HOLSTRERS"
                            />
                             <CategoryCard
                                imgSource="http://localhost:3000/images/gun2.jpg"
                                category="KYDEX HOLSTERS"
                            />
                            <CategoryCard
                                imgSource="http://localhost:3000/images/gun.jpg"
                                category="SHOULDERS HOLSTERS"
                            />
                            <CategoryCard
                                imgSource="http://localhost:3000/images/gun3.jpg"
                                category="OPEN CARRY HOLSTRERS"
                            />                                                     
                        </div>
                    </div>






                </div>
            </div>

        </>
    );
}

export default Categories;