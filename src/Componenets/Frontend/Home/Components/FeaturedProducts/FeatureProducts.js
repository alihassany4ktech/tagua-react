import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import ProductCard from "../PopularProducts/ProductCard";
export default class FeaturedProducts extends Component {
      constructor(props) {
            super(props);
            this.next = this.next.bind(this);
            this.previous = this.previous.bind(this);
      }
      next() {
            this.slider.slickNext();
      }
      previous() {
            this.slider.slickPrev();
      }
      render() {
            var settings = {
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  initialSlide: 0,
                  responsive: [
                        {
                              breakpoint: 1200,
                              settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    infinite: true,
                                    dots: true
                              }
                        },
                        {
                              breakpoint: 950,
                              settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                    initialSlide: 2
                              }
                        },
                        {
                              breakpoint: 600,
                              settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                              }
                        }
                  ]
            };
            return (
                  <>
                        <div className="mb-5">
                              <div className='col-sm-7 col-md-7 col-lg-5 mt-5 mx-auto text-center'>
                                    <h2>Featured Products</h2>
                                    <p className='text-dark mt-3'><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida porttitor lorem in blandit. Etiam id venenatis nisl.</small></p>
                              </div>
                              {/* card-carousal */}
                              <div className="text-center mb-3">
                                    {/* carousal arrows left and right */}
                                    <button className="icon-btn mx-2" onClick={this.previous}>
                                          <i class="bi bi-arrow-left"></i>
                                    </button>
                                    <button className="icon-btn" onClick={this.next}>
                                          <i class="bi bi-arrow-right"></i>
                                    </button>
                              </div>
                              <div className='col-sm-10 mx-auto'>
                                    <Slider ref={c => (this.slider = c)} {...settings}>
                                          <ProductCard
                                                imgSource="http://localhost:3000/images/gun.jpg"
                                                decription="Lorem ipsum dolor sit consectetur"
                                                prevPrice="$200"
                                                newPrice="$150"
                                          />
                                          <ProductCard
                                                imgSource="http://localhost:3000/images/gun2.jpg"
                                                decription="Lorem ipsum dolor sit consectetur"
                                                prevPrice="$250"
                                                newPrice="$155"
                                          />
                                          <ProductCard
                                                imgSource="http://localhost:3000/images/gun3.jpg"
                                                decription="Lorem ipsum dolor sit consectetur"
                                                prevPrice="$205"
                                                newPrice="$155"
                                          />
                                          <ProductCard
                                                imgSource="http://localhost:3000/images/gun.jpg"
                                                decription="Lorem ipsum dolor sit consectetur"
                                                prevPrice="$270"
                                                newPrice="$170"
                                          />
                                          <ProductCard
                                                imgSource="http://localhost:3000/images/gun2.jpg"
                                                decription="Lorem ipsum dolor sit consectetur"
                                                prevPrice="$280"
                                                newPrice="$150"
                                          />
                                          <ProductCard
                                                imgSource="http://localhost:3000/images/gun2.jpg"
                                                decription="Lorem ipsum dolor sit consectetur"
                                                prevPrice="$200"
                                                newPrice="$150"
                                          />
                                          <ProductCard
                                                imgSource="http://localhost:3000/images/gun2.jpg"
                                                decription="Lorem ipsum dolor sit consectetur"
                                                prevPrice="$200"
                                                newPrice="$150"
                                          />
                                    </Slider>
                              </div>
                        </div>
                  </>
            );
      }
}