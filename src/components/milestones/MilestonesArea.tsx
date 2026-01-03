
"use client";
import Slider from "react-slick";

const milestones = [
  {
    year: "2008",
    title: "Foundation of Al Garhoud Center",
    description: "Al Garhoud Center was established with a clear mission to simplify government services for the residents and businesses of Dubai.",
    image: "https://picsum.photos/seed/1/600/400"
  },
  {
    year: "2012",
    title: "Integration of Amer Services",
    description: "Expanded our service portfolio by becoming an official Amer service center, streamlining visa and residency transactions for our clients.",
    image: "https://picsum.photos/seed/2/600/400"
  },
  {
    year: "2015",
    title: "Partnership with Dubai Health Authority (DHA)",
    description: "Began offering seamless medical fitness typing and application processing, becoming a trusted partner for DHA-related services.",
    image: "https://picsum.photos/seed/3/600/400"
  },
  {
    year: "2018",
    title: "Official DET Service Provider",
    description: "Became a key partner for the Department of Economy and Tourism (DET), assisting businesses with licenses and regulatory compliance.",
    image: "https://picsum.photos/seed/4/600/400"
  },
  {
    year: "2021",
    title: "Launch of Digital Platform",
    description: "Introduced a new digital platform to offer select services online, enhancing accessibility and convenience for our clients.",
    image: "https://picsum.photos/seed/5/600/400"
  },
  {
    year: "2024",
    title: "Surpassing 1 Million Applications",
    description: "Celebrated a major achievement by successfully processing over one million applications, a testament to our efficiency and client trust.",
    image: "https://picsum.photos/seed/6/600/400"
  }
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


export default function MilestonesArea() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <section className="azzle-section-padding">
      <div className="container">
        <Slider {...settings} className="milestones-carousel" data-aos="fade-up">
          {milestones.map((milestone, index) => (
            <div key={index}>
              <div className="milestone-card">
                <div className="milestone-card-image">
                  <img src={milestone.image} alt={milestone.title} />
                </div>
                <div className="milestone-card-content">
                  <div className="milestone-card-year">{milestone.year}</div>
                  <h3 className="milestone-card-title">{milestone.title}</h3>
                  <p className="milestone-card-description">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
