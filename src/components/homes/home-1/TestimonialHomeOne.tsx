"use client";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";

function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.5303 7.53033C27.8232 7.23744 27.8232 6.76256 27.5303 6.46967L21.7574 0.6967C21.4645 0.403806 20.9896 0.403806 20.6967 0.6967C20.4038 0.989593 20.4038 1.46447 20.6967 1.75736L26.4393 7.5L20.6967 13.2426C20.4038 13.5355 20.4038 14.0104 20.6967 14.3033C20.9896 14.5962 21.4645 14.5962 21.7574 14.3033L27.5303 8.53033C27.8232 8.23744 27.8232 7.76256 27.5303 7.53033ZM0 8H27V7H0V8Z" fill="#272A37" />
      </svg>
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.46967 7.53033C0.176777 7.23744 0.176777 6.76256 0.46967 6.46967L6.24264 0.6967C6.53553 0.403806 7.01041 0.403806 7.3033 0.6967C7.59619 0.989593 7.59619 1.46447 7.3033 1.75736L1.56066 7.5L7.3033 13.2426C7.59619 13.5355 7.59619 14.0104 7.3033 14.3033C7.01041 14.5962 6.53553 14.5962 6.24264 14.3033L0.46967 8.53033C0.176777 8.23744 0.176777 7.76256 0.46967 7.53033ZM28 8H1V7H28V8Z" fill="#272A37" />
      </svg>
    </div>
  );
}

export default function TestimonialHomeOne() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    lazyLoad: 'progressive' as const,
    arrows: true,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
  };


  return (
    <div className="azzle-section-padding">
      <div className="container">
        <div className="azzle-section-title center font-title max-width-750">
          <h2>Check user reviews using our AI chatbot</h2>
        </div>
        <Slider {...settings} className="azzle-t-slider-init">
          <div className="azzle-t-wrap">
            <div className="azzle-t-thumb" data-aos="zoom-in" data-aos-delay="500">
              <img src="assets/images/home2/t-thumb1.png" alt="Thumb" />
            </div>
            <div className="azzle-default-content content4" data-aos="fade-up" data-aos-delay="700">
              <h3>“Easy to use AI Chatbot with many options”</h3>
              <p>I have been using AI chatbots for several chatbots for the past year. I learned quickly and exploring the tool, & asking questions to Slack support. The tool is very easy user-friendly and the support group helps quickly and thoroughly. Keep up the good work!</p>
              <div className="mt-50">
                <div className="azzle-t-author-title">
                  <p>-Henry Fayol</p>
                  <span>Professional blog writer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="azzle-t-wrap">
            <div className="azzle-t-thumb">
              <img src="assets/images/home2/t-thumb2.png" alt="Thumb" />
            </div>
            <div className="azzle-default-content content4">
              <h3>“Great tool and has excellent support”</h3>
              <p>I am using AI Chatbot for my study purpose. I am a science student and it is helping me to understand concepts easily and I can learn about anything right from it. it motivates me to learn more. The tool is very user-friendly. I love it!</p>
              <div className="mt-50">
                <div className="azzle-t-author-title">
                  <p>-Willium Patters</p>
                  <span>Student</span>
                </div>
              </div>
            </div>
          </div>
          <div className="azzle-t-wrap">
            <div className="azzle-t-thumb">
              <img src="assets/images/home2/t-thumb3.png" alt="Thumb" />
            </div>
            <div className="azzle-default-content content4">
              <h3>“ Best AI Chat tool for mobile phone”</h3>
              <p>II was looking for a chatbot to optimize the workload of our sales team and sent inquiries to almost every chatbot/live chat company. They immediately answered my inquiry and set a meeting to understand our needs. Thanks for the great service</p>
              <div className="mt-50">
                <div className="azzle-t-author-title">
                  <p>-Max Taylor</p>
                  <span>Sales Manager</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
