import React from 'react';
import ReactStars from "react-rating-stars-component";
const Review = () => {

    return (
        <>
            <div className="col-lg-6 col-md-8 mx-auto d-flex align-items-center justify-content-center">
                <form className=" py-3 px-5">
                    <strong >BE THE FIRST TO REVIEW “TAGUA ECOLEATHER -WEIGHTLESS W/ MAG POUCH”</strong>
                    <p><small>Your email address will not be published</small></p>
                    <div className="row mt-3">
                        <div class="form-group col-md-6 mb-3">
                            <label className="mb-1" htmlFor="Your name">Your Name</label>
                            <input type="emtextil" className="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />
                        </div>
                        <div class="form-group col-md-6 mb-3">
                            <label className="mb-1" htmlFor="Your name">Your Email</label>
                            <input type="emtextil" className="form-control  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type here" />
                        </div>
                    </div>
                    <div className='d-flex flex-row mb-2'>
                        <span>Your rating: &ensp;</span>
                        <ReactStars
                            count={5}
                            value={3.5}
                            size={18}
                            activeColor="#E8C21E"
                            edit={true}
                            isHalf={true}
                        />
                    </div>

                    <label className="mb-1" htmlFor="Your name">Your review</label>
                    <textarea className="form-control  rounded-0" style={{ height: "120px" }} name="" id="" cols="30" rows="10" placeholder="Type here" ></textarea>
                    <button type="submit" className="btn mt-4 text-white mb-3 bg-yellow rounded-0" >SUBMIT</button> <br />
                </form>
            </div>
        </>
    );
}

export default Review;