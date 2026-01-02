"use client";
import Link from "next/link";
import Slider from "react-slick";

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  arrows: false,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1
    }
  }]
}


export default function HeroHomeOne() {
  return (
    <div className="azzle-hero-section">
      <div className="azzle-hero-shape">
        <img src="assets/images/home1/hero-bg.png" alt="bg" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="azzle-hero-content1" style={{paddingTop: '50px'}}>
              <h1 data-aos="fade-left" data-aos-delay="500">One-Stop Government Transactions</h1>
              <p data-aos="zoom-in" data-aos-delay="700">Connecting People to Possibilities through Smart Government Solutions. At Al Garhoud Center, we combine smart technology with trusted expertise to simplify key Dubai services.</p>
              <div className="azzle-hero-button mt-50">
                <Link className="azzle-default-btn" data-aos="fade-up" data-aos-delay="900" href="/contact-us" data-text="Learn More">
                  <span className="button-wraper">Learn More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="azzle-account-box" style={{marginTop: '50px'}} data-aos="fade-right" data-aos-delay="600">
              <div className="azzle-account-header text-center">
                <h4>Seamless Company Formation</h4>
              </div>
              <form action="#">
                <div className="azzle-contact-field mb-3">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your Full Name" />
                </div>
                <div className="azzle-contact-field mb-3">
                  <label>Email Address *</label>
                  <input type="email" placeholder="your.email@example.com" />
                </div>
                <div className="azzle-contact-field mb-4">
                  <label>Select Nationality</label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Select Nationality</option>
                    <option value="1">UAE</option>
                    <option value="2">India</option>
                    <option value="3">USA</option>
                  </select>
                </div>
                <button id="azzle-main-submit-btn" className="w-100" type="button">Let's Chat</button>
              </form>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="azzle-brand-slider-wraper">
          <div className="azzle-brand-slider-title" data-aos="fade-up" data-aos-delay=".9s">
            <p>Client loyalty speaks volumes. Their continued engagement is a clear reflection of the quality and consistency we deliver.</p>
          </div>
          <Slider {...settings} className="azzle-brand-slider">
            <div className="azzle-logo-icon-item">
              <img src="assets/images/home1/icon1.svg" alt="Icon" />
            </div>
            <div className="azzle-logo-icon-item">
              <img src="assets/images/home1/icon2.svg" alt="Icon" />
            </div>
            <div className="azzle-logo-icon-item">
              <img src="assets/images/home1/icon3.svg" alt="Icon" />
            </div>
            <div className="azzle-logo-icon-item">
              <img src="assets/images/home1/icon4.svg" alt="Icon" />
            </div>
            <div className="azzle-logo-icon-item">
              <img src="assets/images/home1/icon5.svg" alt="Icon" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
