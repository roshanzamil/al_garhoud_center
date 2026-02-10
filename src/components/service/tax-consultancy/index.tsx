
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TaxConsultancyArea from "./TaxConsultancyArea";

export default function TaxConsultancy() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <TaxConsultancyArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
