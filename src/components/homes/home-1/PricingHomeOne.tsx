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
                  <h5 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Trust First</h5>
                  <h5 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Client-Centric Excellence</h5>
                  <h5 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0' }}>Compliance by Design</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
