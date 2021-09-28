import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';

const ProductGallery = (props) => { 
    return (
        <>
            <ImageGallery items={props.images} showNav={false} showBullets={true}/>
        </>
    );
}

export default ProductGallery;