const milestones = [
  {
    year: "2008",
    title: "Foundation of Al Garhoud Center",
    description: "Al Garhoud Center was established with a clear mission to simplify government services for the residents and businesses of Dubai."
  },
  {
    year: "2012",
    title: "Integration of Amer Services",
    description: "Expanded our service portfolio by becoming an official Amer service center, streamlining visa and residency transactions for our clients."
  },
  {
    year: "2015",
    title: "Partnership with Dubai Health Authority (DHA)",
    description: "Began offering seamless medical fitness typing and application processing, becoming a trusted partner for DHA-related services."
  },
  {
    year: "2018",
    title: "Official DET Service Provider",
    description: "Became a key partner for the Department of Economy and Tourism (DET), assisting businesses with licenses and regulatory compliance."
  },
  {
    year: "2021",
    title: "Launch of Digital Platform",
    description: "Introduced a new digital platform to offer select services online, enhancing accessibility and convenience for our clients."
  },
  {
    year: "2024",
    title: "Surpassing 1 Million Applications",
    description: "Celebrated a major achievement by successfully processing over one million applications, a testament to our efficiency and client trust."
  }
];

export default function MilestonesArea() {
  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="azzle-timeline-wrapper">
          <div className="azzle-timeline-line"></div>
          {milestones.map((milestone, index) => (
            <div key={index} className={`azzle-timeline-item-container ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="azzle-timeline-item" data-aos="fade-up">
                <div className="azzle-timeline-year">{milestone.year}</div>
                <h3 className="azzle-timeline-title">{milestone.title}</h3>
                <p className="azzle-timeline-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
