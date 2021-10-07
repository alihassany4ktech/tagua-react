import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './Categories.css';
const CategoryCard = (props) => {

    return (
        <>
            {/* <div className="col-xl-4 col-lg-4 col-md-5 col-sm-8 col-xs-12 mx-auto my-3"> */}
            <div className='card category-card border-0 rounded-15 mx-auto p-0'>
                <img src={props.imgSource} alt="item image" className='img-fluid' /> 
                <Button
                    component={Link}
                    to="/productdetail"
                    style={{
                        borderRadius: 0,
                        backgroundColor: "#E8C21E",
                        color: '#FFFFFF',
                        fontSize: "16px",
                        fontFamily: 'inherit',
                        fontWeight: '600', 
                        width: '100%',
                    }}
                >
                    {props.category}
                </Button>   
            </div>
            {/* </div> */}
        </>
    );
}

export default CategoryCard;