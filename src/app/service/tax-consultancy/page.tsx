
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TaxConsultancyArea from "@/components/service/tax-consultancy/TaxConsultancyArea";
import ServicePageHeader from "@/components/service/ServicePageHeader";
import OtherServicesCarousel from "@/components/service/OtherServicesCarousel";

export default function TaxConsultancy() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/tax.jpg"
            logoAlt="Tax Consultancy"
            title="Tax Consultancy"
            subtitle="Expert advice and professional services for your VAT and corporate tax needs."
          />
          <TaxConsultancyArea />
          <OtherServicesCarousel />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
