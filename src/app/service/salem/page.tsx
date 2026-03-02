
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import SalemArea from "@/components/service/salem/SalemArea";
import ServicePageHeader from "@/components/service/ServicePageHeader";
import OtherServicesCarousel from "@/components/service/OtherServicesCarousel";

export default function Salem() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/salem.jpg"
            logoAlt="Salem"
            title="Salem"
            subtitle="Occupational health screening and all medical fitness services."
          />
          <SalemArea />
          <OtherServicesCarousel />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
