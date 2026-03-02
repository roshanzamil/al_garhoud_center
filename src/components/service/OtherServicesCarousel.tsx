"use client";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

const services = [
  { title: "Dubai Health - DHA", path: "/service/dha", logo: "/assets/images/service/DHA-logo.webp" },
  { title: "Typing Services", path: "/service/typing", logo: "/assets/images/service/typing-logo.webp" },
  { title: "Amer", path: "/service/amer", logo: "/assets/images/service/amer-logo.webp" },
  { title: "DET", path: "https://eservices.dubaided.gov.ae/pages/anon/gsthme.aspx?dedqs=PM671p6QBb0lV1okx2JABgxoLLKXOgPx", logo: "/assets/images/service/det-logo.webp" },
  { title: "Taw-Jeeh Services", path: "/service/tawjeeh", logo: "/assets/images/service/t3-logo.webp" },
  { title: "Notary Public", path: "/service/notary", logo: "/assets/images/service/dubai-courts-logo.webp" },
  { title: "Salem", path: "/service/salem", logo: "/assets/images/service/salem.jpg" },
  { title: "Business Setup", path: "/service/business-setup", logo: "/assets/images/service/business.jpg" },
  { title: "Tax Consultancy", path: "/service/tax-consultancy", logo: "/assets/images/service/tax.jpg" },
  { title: "Accounting Services", path: "/service/accounting", logo: "/assets/images/service/accounting.jpg" },
];

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} milestone-arrow milestone-next`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} milestone-arrow milestone-prev`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default function OtherServicesCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="azzle-section-padding bg-light">
      <div className="container">
        <div className="azzle-section-title center" data-aos="fade-up">
          <h2>Explore Other Services</h2>
        </div>
        <div className="other-services-carousel-wrapper" data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings} className="other-services-carousel">
            {services.map((service, index) => {
              const isExternal = service.path.startsWith("http");
              const CardContent = (
                <div className="other-service-card">
                  <div className="other-service-card-icon">
                    <Image src={service.logo} alt={service.title} width={100} height={80} unoptimized style={{objectFit: 'contain'}} />
                  </div>
                  <h4 className="other-service-card-title">{service.title}</h4>
                </div>
              );

              if (isExternal) {
                return (
                  <div key={index} style={{height: '100%'}}>
                    <a href={service.path} target="_blank" rel="noopener noreferrer" style={{height: '100%', display: 'block'}}>
                      {CardContent}
                    </a>
                  </div>
                );
              }

              return (
                 <div key={index} style={{height: '100%'}}>
                    <Link href={service.path} style={{height: '100%', display: 'block'}}>
                      {CardContent}
                    </Link>
                  </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}