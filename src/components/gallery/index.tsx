import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import GalleryArea from "./GalleryArea";

export default function Gallery() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className="azzle-section-padding pb-0">
            <div className="container">
              <div className="azzle-section-title center max-width-780" data-aos="fade-up" data-aos-delay="500">
                <h2>Our Gallery</h2>
              </div>
            </div>
          </section>
          <GalleryArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
