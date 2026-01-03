
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FaqHomeOne from "../homes/home-1/FaqHomeOne";
import TestimonialHomeOne from "../homes/home-1/TestimonialHomeOne";
import ServiceTabs from "./ServiceTabs";



export default function Service() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className="azzle-section-padding pb-0">
            <div className="container">
              <div className="azzle-section-title center max-width-780" data-aos="fade-up" data-aos-delay="500">
                <h2>A World of Services at Your Fingertips</h2>
              </div>
            </div>
          </section>
          <ServiceTabs />
          <FaqHomeOne />
          <TestimonialHomeOne />           
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
