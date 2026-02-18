
import Image from "next/image";

export default function MessageFromLeaders() {
  return (
    <section className="azzle-section-padding leadership-message-section">
      <div className="container">
        <div className="row align-items-stretch">
          
          {/* CEO Message */}
          <div className="col-lg-6 d-flex" data-aos="fade-right">
            <div className="leadership-message-card">
              <h2 className="message-title">CEO's Message</h2>
              <div className="message-content">
                <p>At Al Garhoud Center, our purpose is simple yet significant: to make government and business services accessible, reliable and efficient for every individual and organization we serve.</p>
                <p>As a government-recognized document clearing center, we operate at the intersection of compliance, convenience and confidence. From AMER, DET, Tawjeeh, DHA and Dubai Courts services to tax consultancy, business setup and accountancy solutions, our role extends far beyond processing documents. We act as a trusted bridge between our clients and government entities, ensuring every interaction is handled with accuracy, transparency and professionalism.</p>
                <p>In a fast-evolving regulatory environment, clarity and compliance are not optional, they are essential. Our experienced team remains consistently aligned with the latest regulations and procedural updates, enabling us to guide our clients with confidence and precision. Whether supporting entrepreneurs taking their first steps, businesses scaling operations or individuals navigating essential government services, we are committed to delivering solutions that are timely, compliant and stress-free.</p>
                <p>As we continue to grow, our focus remains unwavering - strengthening partnerships, enhancing service quality and contributing positively to the business ecosystem of the UAE.</p>
              </div>
              <div className="message-author-footer">
                <Image src="https://picsum.photos/seed/ceo/150/150" alt="Yasser Abdelmawla Youssef Khedr" width={150} height={150} className="author-image" data-ai-hint="man portrait" />
                <div className="author-details">
                  <h4>Yasser Abdelmawla Youssef Khedr</h4>
                  <p>CEO - Al Garhoud Center</p>
                </div>
              </div>
            </div>
          </div>

          {/* GM Message */}
          <div className="col-lg-6 d-flex" data-aos="fade-left">
            <div className="leadership-message-card">
              <h2 className="message-title">GM's Message</h2>
              <div className="message-author-header">
                <Image src="https://picsum.photos/seed/gm/150/150" alt="Sameer Ali" width={150} height={150} className="author-image" data-ai-hint="man portrait" />
              </div>
              <div className="message-content">
                <p>With an established presence across the UAE, Oman, Bahrain, Saudi Arabia, and Egypt, we work alongside entrepreneurs, SMEs and corporates as a strategic partner in business formation, expansion and ongoing operations.</p>
                <p>Our regional expertise and structured approach allow us to deliver consistent, compliant and scalable solutions aligned with our clients' growth objectives.</p>
                <p>As we look ahead, we remain focused on innovation, service excellence and continuous improvement, ensuring measurable value for our clients and stakeholders. Strengthening long-term relationships built on trust, transparency and performance remains central to our business philosophy.</p>
                <p>Thank you for your continued trust in Al Garhoud Center.</p>
              </div>
              <div className="message-author-footer-gm">
                <div className="author-details">
                  <h4>Sameer Ali</h4>
                  <p>GM - Al Garhoud Center</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
