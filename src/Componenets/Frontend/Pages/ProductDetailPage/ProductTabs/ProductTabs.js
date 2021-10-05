import React from 'react';
import AdditionalInformation from './AdditionalInformation';
import Description from './Decsription';
import './ProductTabs.css'; 
import Review from './Review';
import ShippingAndDelivery from './ShippingAndDelivery';
const ProductTabs = () => {

    return (
        <>
            <nav>
                <div class="nav nav-tabs productTabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">DESCRIPTION</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">ADDITIONAL INFORMATION</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">REVIEWS (0)</button>
                    <button class="nav-link" id="nav-shipping-tab" data-bs-toggle="tab" data-bs-target="#nav-shipping" type="button" role="tab" aria-controls="nav-shipping" aria-selected="false">SHIPPING & DELIVERY</button>

                </div>
            </nav>
            <div class="tab-content my-4 px-3 pb-3" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <Description />
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <AdditionalInformation />
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Review />
                </div>
                <div class="tab-pane fade" id="nav-shipping" role="tabpanel" aria-labelledby="nav-shipping-tab">
                    <ShippingAndDelivery />
                </div>
            </div>
        </>
    );
}

export default ProductTabs;