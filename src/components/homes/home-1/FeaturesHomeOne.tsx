
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

export default function FeaturesHomeOne() {
  return (
    <section className="azzle-section-padding-bottom">
      <div className="container azzle-section-padding">
        <div className="azzle-section-title max-width-780" data-aos="fade-left" data-aos-delay="500">
          <h2>Our Services</h2>
        </div>
        <div className="azzle-iconbox-wrapper" data-aos="fade-up" data-aos-delay="700">
          <div className="azzle-iconbox-column">
            <Link href="/service?tab=dha" className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <img src="assets/images/service/DHA-logo.webp" alt="DHA" style={{ height: '120px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Dubai Health - DHA</h3>
                <p>Medical fitness typing and all necessary approvals are handled seamlessly.</p>
              </div>
              <div className="azzle-iconbox-button">
                <span>
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link href="/service?tab=typing" className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                 <img src="assets/images/service/typing-logo.webp" alt="Typing" style={{ height: '120px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Typing Services</h3>
                <p>Accurate typing for visas, labor contracts, and various legal documents.</p>
              </div>
              <div className="azzle-iconbox-button">
                <span>
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link href="/service?tab=amer" className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <img src="assets/images/service/amer-logo.webp" alt="Amer" style={{ height: '120px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Amer</h3>
                <p>Complete Amer services for visa renewal, cancellation, and modifications.</p>
              </div>
              <div className="azzle-iconbox-button">
                <span>
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link href="/service?tab=det" className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <img src="assets/images/service/det-logo.webp" alt="DET" style={{ height: '120px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>DET</h3>
                <p>License applications, renewals, and all modifications for your business.</p>
              </div>
              <div className="azzle-iconbox-button">
                <span>
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
             <Link href="/service?tab=tawjeeh" className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                 <img src="assets/images/service/t3-logo.webp" alt="Taw-Jeeh" style={{ height: '120px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Taw-Jeeh Services</h3>
                <p>All Ministry of Labour and Taw-Jeeh services handled professionally.</p>
              </div>
              <div className="azzle-iconbox-button">
                <span>
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
             <Link href="/service?tab=notary" className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <img src="assets/images/service/dubai-courts-logo.webp" alt="Notary Public" style={{ height: '120px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Notary Public</h3>
                <p>Book legal appointments and get government certified true copies.</p>
              </div>
              <div className="azzle-iconbox-button">
                <span>
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link href="/service?tab=salem" className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <img src="assets/images/service/salem.jpg" alt="Salem" style={{ height: '120px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Salem</h3>
                <p>Occupational health screening and all medical fitness services.</p>
              </div>
              <div className="azzle-iconbox-button">
                <span>
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link href="/service?tab=business-setup" className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <img src="assets/images/service/business.jpg" alt="Business Setup" style={{ height: '120px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Business Setup</h3>
                <p>Comprehensive assistance for setting up your new business in Dubai.</p>
              </div>
              <div className="azzle-iconbox-button">
                <span>
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link href="/service?tab=tax-consultancy" className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <img src="assets/images/service/tax.jpg" alt="Tax Consultancy" style={{ height: '120px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Tax Consultancy</h3>
                <p>Expert advice and professional services for VAT registration needs.</p>
              </div>
              <div className="azzle-iconbox-button">
                <span>
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link href="/service?tab=accounting" className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <img src="assets/images/service/accounting.jpg" alt="Accounting Services" style={{ height: '120px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Accounting Services</h3>
                <p>Professional bookkeeping and accounting for all business needs.</p>
              </div>
              <div className="azzle-iconbox-button">
                <span>
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="azzle-brand-slider-wraper py-10" data-aos="fade-up" data-aos-delay=".9s">
          <div className="azzle-brand-slider-title">
            <p>Our clientele includes established organizations throughout Dubai</p>
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
    </section>
  )
}
