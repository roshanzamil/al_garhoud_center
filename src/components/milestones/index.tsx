
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import MilestonesArea from "./MilestonesArea";

export default function Milestones() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className="azzle-section-pt">
            <div className="container">
              <div className="azzle-section-title center max-width-780" data-aos="fade-up" data-aos-delay="500">
                <h2>Our Journey of Excellence</h2>
              </div>
            </div>
          </section>
          <MilestonesArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
