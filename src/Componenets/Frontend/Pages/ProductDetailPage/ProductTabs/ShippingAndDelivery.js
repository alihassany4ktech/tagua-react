import React from 'react';
const ShippingAndDelivery = () => {

    return (
        <>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='row'>

                        <div className='col-md-6'>
                            <img className='img-fluid' src='images/shipment.jpeg'></img>

                        </div>
                        <div className='col-md-6'>

                            <img className='img-fluid' src='images/shipmentLogo.png'></img>
                        </div> 
                    </div>
                </div>
                <div className='col-md-6 px-3'>
                    <h5>Your pack shipment</h5>
                    <p align='justify'>Packages are shipped via Fedex with a signature required. It may take up to ten business days for delivery for in stock items. Special orders may take 4 to 6 weeks to be completed. As soon as a tracking number becomes available, it will be forwarded.
                    </p>
                    <p align='justify'>Shipping fees are fixed as indicated on the order and includes handling and packing. We advise you to group your items in one order. We cannot group two distinct orders placed separately, and shipping fees will apply to each of them. Your package will be dispatched at your own risk, but special care is taken to protect fragile objects. Please ensure the package is undamaged and the seal intact before accepting delivery. In such a case, please inform the Fedex agent. Boxes are amply sized and your items are well-protected.
                    </p>
                </div>
            </div>
        </>
    );
}

export default ShippingAndDelivery;