
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TawjeehArea from "@/components/service/tawjeeh/TawjeehArea";
import ServicePageHeader from "@/components/service/ServicePageHeader";

export default function Tawjeeh() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: "120px" }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/t3-logo.webp"
            logoAlt="Taw-Jeeh"
            title="Taw-Jeeh Services"
            subtitle="All Ministry of Labour and Taw-Jeeh services handled professionally."
          />
          <TawjeehArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
