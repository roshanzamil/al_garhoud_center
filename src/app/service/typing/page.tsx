
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TypingArea from "@/components/service/typing/TypingArea";
import ServicePageHeader from "@/components/service/ServicePageHeader";
import OtherServicesCarousel from "@/components/service/OtherServicesCarousel";

export default function Typing() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/typing-logo.webp"
            logoAlt="Typing"
            title="Typing Services"
            subtitle="Accurate typing for visas, labor contracts, and various legal documents."
          />
          <TypingArea />
          <OtherServicesCarousel />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
