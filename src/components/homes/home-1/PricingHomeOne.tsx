"use client";

export default function PricingHomeOne() {
  return (
    <section className="azzle-section-padding-bottom">
      <div className="position-r pt-0">
        <div className="container">
          <div className="card-grid-container">
            {/* Vision */}
            <div className="card-grid-item" data-aos="fade-up" data-aos-delay="500">
              <div className="azzle-pricing-wrap">
                <div className="azzle-pricing-header">
                  <h4>Vision</h4>
                </div>
                <div className="azzle-pricing-body">
                  <p>
                    To simplify government and business processes through expert guidance, smart systems and end-to-end solutions - empowering individuals and enterprises to operate, expand and succeed across the Middle East with confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="card-grid-item" data-aos="fade-up" data-aos-delay="700">
              <div className="azzle-pricing-wrap active">
                <div className="azzle-pricing-header">
                  <h4>Mission</h4>
                </div>
                <div className="azzle-pricing-body">
                  <p>
                    To be the region&apos;s most trusted and digitally driven gateway for government services and business solutions - setting new benchmarks in compliance, speed and customer experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="card-grid-item" data-aos="fade-up" data-aos-delay="900">
              <div className="azzle-pricing-wrap">
                <div className="azzle-pricing-header">
                  <h4>Values</h4>
                </div>
                <div className="azzle-pricing-body">
                  <div style={{ marginBottom: "1rem" }}>
                    <h5 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Trust First</h5>
                    <p>We operate with integrity, transparency and accountability in every interaction.</p>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <h5 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Client-Centric Excellence</h5>
                    <p>Our clients&apos; success defines our performance; we deliver precision, speed and clarity at every step.</p>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Compliance by Design</h5>
                    <p>Regulatory accuracy is embedded into our processes, ensuring peace of mind and long-term sustainability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
