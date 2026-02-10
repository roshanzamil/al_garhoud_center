
import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import BusinessSetupArea from "./BusinessSetupArea";

export default function BusinessSetup() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Business Setup" page="Services" />
          <BusinessSetupArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
