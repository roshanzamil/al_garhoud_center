
import Count from "@/common/count";
import Link from "next/link";

export default function AboutHomeOne() {
  return (
    <>
      <div className="azzle-section-padding pt-0 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="azzle-content-thumb" data-aos="fade-right" data-aos-delay="500">
                <img src="assets/images/home1/thumb2.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="azzle-default-content pl-110" data-aos="fade-left" data-aos-delay="700">
                <h2>Empowering Business Journeys Across the UAE</h2>
                <p>With over 18 years of trusted excellence, we stand as a premier DET service provider, empowering businesses to launch and grow with confidence. From the first form to full formation, our end-to-end solutions have supported numerous established companies in setting up their ventures seamlessly. We don’t just assist — we stand by you every step of the way.</p>
                <div className="azzle-listicon-wrap mt-50">
                  <ul>
                    <li>
                      <img src="assets/images/home1/arrow.svg" alt="Icon" />
                      <h3>Approved by the department of economy and tourism</h3>
                    </li>
                    <li>
                      <img src="assets/images/home1/arrow.svg" alt="Icon" />
                      <h3>Trusted by 18,000+ clients</h3>
                    </li>
                    <li>
                      <img src="assets/images/home1/arrow.svg" alt="Icon" />
                      <h3>End-to-end services</h3>
                    </li>
                  </ul>
                </div>
                 <div className="mt-50">
                  <Link className="azzle-default-btn" href="/about-us">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="section" style={{paddingBottom: '100px'}}>
        <div className="container">
          <div className="row">
            <div className="azzle-counter-column">
                <div className="azzle-counter-item azzle-counter-item2">
                  <h2 className="azzle-counter-data azzle-counter-data2">
                    <Count number={18} text="y" />
                  </h2>
                  <p>Years of Innovative services</p>
                </div>
                <div className="azzle-counter-item azzle-counter-item2">
                  <h2 className="azzle-counter-data azzle-counter-data2">
                    <Count number={100} text="+" />
                  </h2>
                  <p>Dedicated Workforce</p>
                </div>
                <div className="azzle-counter-item azzle-counter-item2">
                  <h2 className="azzle-counter-data azzle-counter-data2">
                    <Count number={3} text="" />
                  </h2>
                  <p>Number of Branches</p>
                </div>
                <div className="azzle-counter-item azzle-counter-item2">
                  <h2 className="azzle-counter-data azzle-counter-data2">
                    <Count number={1} text="M+" />
                  </h2>
                  <p>Happy Customers</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
