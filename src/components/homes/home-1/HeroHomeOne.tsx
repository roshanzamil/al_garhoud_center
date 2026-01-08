
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

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} hero-arrow hero-next`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} hero-arrow hero-prev`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}


const heroSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const sliderData = [
  {
    id: 1,
    title: "Your Trusted Partner for All Government Services",
    description: "Al Garhoud Center is your trusted partner for a seamless government service experience. We provide a comprehensive range of services with efficiency and a focus on customer satisfaction.",
    image: "https://picsum.photos/seed/hero1/1920/1080",
    hint: "dubai skyline"
  },
  {
    id: 2,
    title: "Efficient, Swift, and Client-Focused Solutions",
    description: "Our streamlined processes and dedicated team ensure your government transactions are handled quickly and professionally, saving you valuable time and effort.",
    image: "https://picsum.photos/seed/hero2/1920/1080",
    hint: "customer service"
  },
  {
    id: 3,
    title: "Comprehensive Services Under One Roof",
    description: "From visa processing and Emirates ID to business licensing and notary services, we offer a complete solution for all your official needs in Dubai.",
    image: "https://picsum.photos/seed/hero3/1920/1080",
    hint: "dubai government"
  }
];


export default function HeroHomeOne() {
  return (
    <div className="azzle-hero-section">
      <Slider {...heroSliderSettings} className="hero-slider">
        {sliderData.map((slide) => (
          <div key={slide.id} className="hero-slide-item">
            <div className="hero-slide-image" style={{ backgroundImage: `url(${slide.image})` }} data-ai-hint={slide.hint}></div>
            <div className="container">
              <div className="azzle-hero-content1">
                <h1 data-aos="fade-left" data-aos-delay="500">{slide.title}</h1>
                <p data-aos="zoom-in" data-aos-delay="700">{slide.description}</p>
                <div className="azzle-hero-button mt-50">
                  <Link className="azzle-default-btn" data-aos="fade-up" data-aos-delay="900" href="/contact-us" data-text="Get started">
                    <span className="button-wraper">Get started</span>
                  </Link>
                  <Link className="azzle-default-btn outline-btn" data-aos="fade-up" data-aos-delay="1000" href="/about-us" data-text="Learn more">
                    <span className="button-wraper">Learn more</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="container">
        <div className="divider"></div>
        <div className="azzle-brand-slider-wraper">
          <div className="azzle-brand-slider-title" data-aos="fade-up" data-aos-delay=".9s">
            <p>Proudly serving the community by partnering with key government entities in Dubai</p>
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
