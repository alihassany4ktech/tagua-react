import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';

const ProductGallery = (props) => { 
    return (
        <>
            <ImageGallery items={props.images} />
        </>
    );
}

export default ProductGallery;