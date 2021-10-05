import React from 'react';
const AdditionalInformation = () => {

    return (
        <>
        <div className='col-md-8 col-lg-7 mx-auto'>
        <div className='d-flex flex-row justify-content-between alilgn-items-center'>
                <strong>Color</strong>
                <p>Pink</p>
            </div> 
            <hr className='mt-0'/>
            <div className='d-flex flex-row justify-content-between alilgn-items-center'>
                <strong>Hand Options</strong>
                <p>Right, Left</p>
            </div> 
            <hr className='mt-0'/>
            <div className='d-flex flex-row flex-wrap alilgn-items-center'>
                <strong>Guns Model</strong> 
                <p>&nbsp;</p>
            </div> 
            <hr className='mt-0'/>

        </div>
            
         </>
    );
}

export default AdditionalInformation;