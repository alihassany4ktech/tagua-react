import React from 'react'; 
import './Checkout.css';
import PaymentDetail from './PaymentDetail';
const Checkout = (props) => {
    return (
        <>
        <div className='container'>

            <div className='row py-5'>
                <div className='col-md-6'>
                    <form className="px-4">
                        <h4>Billing Detail</h4> 
                        <div className="row mt-3">
                            <div class="form-group col-md-6 mb-3">
                                <label className="mb-1" htmlFor="Your name">First Name<span className='text-danger'> *</span></label>
                                <input type="text" className="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />
                            </div>
                            <div class="form-group col-md-6 mb-3">
                                <label className="mb-1" htmlFor="Your name">Last Name<span className='text-danger'> *</span></label>
                                <input type="text" className="form-control  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />
                            </div>
                        </div>
                        <div class="form-group mb-3">
                                <label className="mb-1" htmlFor="Your name">Company Name (Optional)</label>
                                <input type="text" className="form-control  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />
                        </div>
                        <div class="form-group mb-3">
                                <label className="mb-1" htmlFor="Your name">Country / Region</label>
                                <input type="text" className="form-control  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />
                        </div>
                        <div class="form-group mb-3">
                                <label className="mb-1" htmlFor="Your name">Street Address <span className='text-danger'> (we don't ship to p.o boxes) *</span></label>
                                <input type="text" className="form-control rounded-0 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="House number and street name" />
                                <input type="text" className="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apartment, suit, unit etc optional" />
                        </div> 
                        <div class="form-group mb-3">
                                <label className="mb-1" htmlFor="Your name">State / Country</label>
                                <input type="text" className="form-control  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="form-group mb-3">
                                <label className="mb-1" htmlFor="Your name">Postal / ZIP</label>
                                <input type="text" className="form-control  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="form-group mb-3">
                                <label className="mb-1" htmlFor="Your name">Town / City<span className='text-danger'> *</span></label>
                                <input type="text" className="form-control  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="form-group mb-3">
                                <label className="mb-1" htmlFor="Your name">Phone number<span className='text-danger'> *</span></label>
                                <input type="text" className="form-control  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="form-group mb-3">
                                <label className="mb-1" htmlFor="Your name">Email address<span className='text-danger'> *</span></label>
                                <input type="email" className="form-control  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <label className="mb-1" htmlFor="Your name">Order notes (optional)</label>
                        <textarea className="form-control  rounded-0" style={{ height: "120px" }} name="" id="" cols="30" rows="10" placeholder="Notes about your order e.g special notes for delivery" ></textarea>
                    </form>
                </div>
                <div className='col-md-6'>
                    <PaymentDetail />
                </div>
            </div>
        </div>
        </>
    );
}

export default Checkout;